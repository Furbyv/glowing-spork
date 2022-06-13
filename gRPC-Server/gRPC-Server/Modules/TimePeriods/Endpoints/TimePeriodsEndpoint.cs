using Google.Protobuf.WellKnownTypes;
using gRPCServer.Modules.TimePeriods.Endpoints;

namespace gRPCServer;
public class TimePeriodsEndpoint : TimePeriods.TimePeriodsBase
{
    private readonly ILogger<TimePeriodsEndpoint> _logger;
    readonly DataContext _dbContext;
    public TimePeriodsEndpoint(ILogger<TimePeriodsEndpoint> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public override async Task<TimePeriodsReply> GetTimePeriods(Empty request, ServerCallContext context)
    {
        var periods = await _dbContext.Timeperiods
            .Select(n => TimePeriodConverter.ToRecord(n))
            .ToArrayAsync(context.CancellationToken);
        var reply = new TimePeriodsReply();
        reply.TimePeriods.AddRange(periods);
        return reply;
    }

    public override Task<AddTimePeriodReply> AddTimePeriod(TimePeriodRecord request, ServerCallContext context)
    {
        return base.AddTimePeriod(request, context);
    }
}
