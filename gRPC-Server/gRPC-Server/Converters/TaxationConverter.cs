using Taxation = gRPCServer.Protos.Taxation;

namespace gRPCServer.Converters
{
    public static class TaxationConverter
    {
        public static Taxation TaxationToReply(Models.Taxation taxation)
        {
            var reply = new Taxation();
            reply.Id = taxation.Id;
            reply.FreezeWozObject = WozObjectConverter.WozobjectpropertyToFullWozObjectsReply(taxation.FreezeWozobjectProperty,taxation.Wozobject);
            var delen = taxation.FreezeWozDeelobjects.Select(f => WozSubobjectConverter.WozdeelobjectToWozSubobjectReply(f)).ToList();
            reply.FreezeDeelobjects.AddRange(delen);
            reply.Active = taxation.Active;
            reply.Status = taxation.Status;
            reply.Period = TimePeriodConverter.ToRecord(taxation.TimePeriod);
            var comparables = taxation.ComparisonScores.Select(s => ComparisonScoreToReply(s)).ToList();
            reply.ComparableObjects.AddRange(comparables);
            return reply;
        }

        public static ComparableObject ComparisonScoreToReply(ComparisonScore score)
        {
            var reply = new ComparableObject();
            reply.AanbouwOppScore = score.AanbouwOppScore;
            reply.AfstandScore = score.AfstandScore;
            reply.BijgebouwenScore = score.AantalBijgebouwenScore;
            reply.BouwjaarScore = score.BouwjaarScore;
            reply.KavelOppScore = score.KavelOppScore;
            reply.ObjectTypeScore = score.ObjectTypeScore;
            reply.Selected = score.Selected;
            reply.TransactieDatumScore = score.TransactieDatumScore;
            reply.WonOppScore = score.WonOppScore;
            reply.TotalScore = score.TotaleScore;
            return reply;
        }
    }
}
