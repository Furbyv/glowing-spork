namespace gRPCServer.Modules.TimePeriods.Endpoints;

public class TimePeriodConverter
{
    public static TimePeriodRecord ToRecord(TimePeriod model)
    {
        var record = new TimePeriodRecord();
        record.Id = model.Id;
        record.Description = model.Description;
        record.PropertyDate = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(model.PropertyDate.ToUniversalTime());
        record.ValuationDate = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(model.ValuationDate.ToUniversalTime());
        return record;
    }
}
