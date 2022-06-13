using gRPCServer.Extensions;

namespace gRPCServer.Logic;

public class Comparator
{
    private readonly DataContext _context;
    private readonly Models.Taxation _taxation;
    public Comparator(DataContext context, Models.Taxation taxation) {
        _context = context;
        _taxation = taxation; 
    }

    private IEnumerable<VglSearchRestriction> GetSearchRestrictions()
    {
        var restrictions = _context.VglSearchRestrictions.AsNoTracking().Where(r => r.ModelId == _taxation.Model.Id).ToList();
        return restrictions;
    }

    private IQueryable<Modules.Overviews.Models.TransactionOverview> SetContextFilter(IQueryable<Modules.Overviews.Models.TransactionOverview> query, VglSearchRestriction restriction, Wozobject wozObject)
    {

        var lowerbound = (int)(restriction.MaxAbsoluteDifference != null ? restriction.MaxAbsoluteDifference : restriction.LowerBoundDifference);
        var upperbound = (int)(restriction.MaxAbsoluteDifference != null ? restriction.MaxAbsoluteDifference : restriction.UpperBoundDifference);

        switch (restriction.RestrictionDefinition)
        {
            case RestrictionDefinitions.TransactieDatum:
                return query.Where(t => t.TransactieDatum >= _taxation.Model.TimePeriod.ValuationDate.AddMonths(-1 * lowerbound).SetKindUtc()
                            && t.TransactieDatum <= _taxation.Model.TimePeriod.ValuationDate.AddMonths(upperbound).SetKindUtc());
            case RestrictionDefinitions.Afstand:
                return query.Where(t => t.Geometry.IsWithinDistance(wozObject.Geometry, lowerbound));
            case RestrictionDefinitions.VerschilGemeente:
                return query.Where(t => t.Gemeentecode == wozObject.Wozobjectproperties.FirstOrDefault().Gemeentecode);
            case RestrictionDefinitions.Bouwjaar:
                var bouwjaar = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 1).Select(f=> f.Bouwjaar).Min();
                return query.Where(t => t.Bouwjaar >= bouwjaar - lowerbound && t.Bouwjaar <= bouwjaar + upperbound);
            case RestrictionDefinitions.VerschilPrimairGbo:
                var primairGbo = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 1).Select(f => f.Oppervlakte).Sum();
                return query.Where(t => t.Wonopp >= primairGbo - lowerbound && t.Wonopp <= primairGbo + upperbound);
            case RestrictionDefinitions.VerschilKavelOpp:
                var kavelOpp = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 2).Select(f => f.Oppervlakte).Sum();
                return query.Where(t => t.Grondopp >= kavelOpp - lowerbound && t.Grondopp <= kavelOpp + upperbound);
            default:
                return query;
        }
    }

    private IEnumerable<Modules.Overviews.Models.TransactionOverview> FilterAvaiableTransactions(List<VglSearchRestriction> restrictions,Wozobject wozObject) 
    {
        var query = _context.TransactieOverzicht.AsQueryable();
        restrictions.ForEach(restriction => {
            query = SetContextFilter(query, restriction, wozObject);
        });
        return query.ToList();
    }

    public IEnumerable<ComparisonScore> FindComparableObjects(Wozobject wozObject)
    {
        //TODO; add multiple search criteria options
        var comparableTransactions = FilterAvaiableTransactions(GetSearchRestrictions().ToList(), wozObject);
        //Loop through list of transactions and score each transaction based on criteria
        //Remove all non-comparable objects
        //Order list by score
        var comparables = comparableTransactions.Select(x => ScoreTransaction(x, wozObject))
            .Where(x => x.TotaleScore > 0)
            .OrderBy(x => x.TotaleScore).Reverse();
        return comparables;
    }

    private ComparisonScore ScoreTransaction(Modules.Overviews.Models.TransactionOverview transactionOverview, Wozobject wozObject)
    {
        var score = new ComparisonScore();
        score.TaxId = _taxation.Id;
        score.VolgnummerMarktgegeven = transactionOverview.Volgnummer;
        score.Selected = false;
        score.AfstandScore = CalculateDistanceScore(wozObject.Geometry, transactionOverview.Geometry);
        if(score.AfstandScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        var bouwjaar = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 1).Min(a => a.Bouwjaar);
        score.BouwjaarScore = CalculateBouwjaarScore((int)bouwjaar, (int)transactionOverview.Bouwjaar);
        if (score.BouwjaarScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        var primairGbo = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 1).Sum(d => d.Oppervlakte);
        score.WonOppScore = CalculateOppScore((int)(primairGbo ?? 0M), (transactionOverview.Wonopp ?? 0));
        if (score.WonOppScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        var kavelOpp = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 2).Sum(d => d.Oppervlakte);
        score.KavelOppScore = CalculateOppScore((int)(kavelOpp ?? 0M), (transactionOverview.Grondopp ?? 0));
        if (score.KavelOppScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        var aanbouwOpp = _taxation.FreezeWozDeelobjects.Where(f => f.Deelgroup.DeelgroupDefinitionId == 3).Sum(d => d.Oppervlakte);
        score.AanbouwOppScore = CalculateOppScore((int)(aanbouwOpp ?? 0M), (transactionOverview.Aanbouwopp ?? 0));
        if (score.AanbouwOppScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        score.TransactieDatumScore = CalculateTransactieDatumScore(_taxation.TimePeriod.ValuationDate,transactionOverview.TransactieDatum);
        if (score.TransactieDatumScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        score.ObjectTypeScore = 1;
        if (score.ObjectTypeScore > 0)
        {
            score.TotaleScore = -1;
            return score;
        }
        score.TotaleScore = (score.AfstandScore + score.BouwjaarScore + score.WonOppScore + score.KavelOppScore + score.AanbouwOppScore + score.TransactieDatumScore)/6;
        score.Transaction = _context.Transactions
            .AsNoTracking()
            .AsSplitQuery()
            .Include(t=>t.Wozobject)
            .ThenInclude(w => w.Wozobjectproperties.Where(p => p.Startdate <= transactionOverview.TransactieDatum && p.Enddate >= transactionOverview.TransactieDatum))
            .Where(t => t.Wozobjectnummer == transactionOverview.Wozobjectnummer)
            .Where(t => t.VolgnummerMarktgegeven == transactionOverview.Volgnummer)
            .FirstOrDefault();
        return score;
    }

    private double CalculateDistanceScore(Point pointA, Point pointB)
    {
        //Get distance in meters
        double distance = pointA.CalculateDistance(pointB);
        var distanceScore100m = 0.1;
        return 1 - ((distance%100) * distanceScore100m);
    }

    private double CalculateBouwjaarScore(int bouwjaarA, int bouwjaarB)
    {
        var difference = Math.Abs(bouwjaarA - bouwjaarB);
        var bouwjaarScore = 0.05;
        return 1 - (difference * bouwjaarScore);
    }

    private double CalculateTransactieDatumScore(DateTime datumA, DateTime datumB)
    {
        var difference = Math.Abs((datumA.Year - datumB.Year) * 12) + Math.Abs(datumA.Month - datumB.Month);
        var differenceScorePerMonth = 0.05;
        return 1 - (difference * differenceScorePerMonth);
    }

    private double CalculateOppScore(int oppA, int oppB)
    {
        //Procentual diff means object a can be more comparable to object B than B compared to A
        if(oppA > 0 && oppB > 0)
        {
            var procentualDiff = (oppB / oppA) * 100;
            var wonOppScore = 0.01;
            return 1 - (wonOppScore * procentualDiff);
        }
        return 0;
    }
}

