namespace gRPCServer.Logic;

public class Comparator
{
    private readonly DataContext _context;
    private readonly Model _model;
    public Comparator(DataContext context, Model model) {
        _context = context;
        _model = model; 
    }

    private IEnumerable<VglSearchRestrictions> GetSearchRestrictions()
    {
        var restrictions = _context.VglSearchRestrictions.AsNoTracking().Where(r => r.ModelId == _model.Id).ToList();
        return restrictions;
    }

    private void SetContextFilter(IQueryable<Models.TransactionOverview> query, VglSearchRestrictions restriction, Wozobject wozObject)
    {
        var lowerbound = (int)(restriction.MaxAbsoluteDifference != null ? restriction.MaxAbsoluteDifference : restriction.LowerBoundDifference);
        var upperbound = (int)(restriction.MaxAbsoluteDifference != null ? restriction.MaxAbsoluteDifference : restriction.UpperBoundDifference);

        switch (restriction.RestrictionDefinition)
        {
            case RestrictionDefinitions.TransactieDatum:
                query.Where(t => t.TransactieDatum >= _model.TimePeriod.ValuationDate.AddYears(-1 * lowerbound)
                            && t.TransactieDatum <= _model.TimePeriod.ValuationDate.AddYears(upperbound));
                
                break;
            case RestrictionDefinitions.Afstand:
                query.Where(t => t.Geometry.IsWithinDistance(wozObject.Geometry, lowerbound));
                break;
            case RestrictionDefinitions.VerschilGemeente:
                query.Where(t => t.Gemeentecode == wozObject.Wozobjectproperties.FirstOrDefault().Gemeentecode);
                break;
            case RestrictionDefinitions.Bouwjaar:
                query.Where(t => t.Bouwjaar >= 2000 - lowerbound && t.Bouwjaar <= 2000 + upperbound);
                break;
            case RestrictionDefinitions.VerschilPrimairGbo:
                query.Where(t => t.Wonopp >= 100 - lowerbound && t.Wonopp <= 100 + upperbound);
                break;
            case RestrictionDefinitions.VerschilKavelOpp:
                query.Where(t => t.Grondopp >= 150 - lowerbound && t.Grondopp <= 150 + upperbound);
                break;
            default:
                break;
        }
    }

    private IEnumerable<Models.TransactionOverview> FilterAvaiableTransactions(List<VglSearchRestrictions> restrictions,Wozobject wozObject) 
    {
        var query = _context.TransactieOverzicht.AsNoTracking();
        restrictions.ForEach(restriction => SetContextFilter(query, restriction, wozObject));
        return query.ToList();
    }

    public IEnumerable<Models.TransactionOverview> FindComparableObjects(Wozobject wozObject)
    {
        //TODO; add multiple search criteria options
        var comparableTransactions = FilterAvaiableTransactions(GetSearchRestrictions().ToList(), wozObject);
        //Loop through list of transactions and score each transaction based on criteria
        //Order list by score and return list of transactions with wozobject reference
        return comparableTransactions;
    }
}

