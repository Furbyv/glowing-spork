using Google.Protobuf.WellKnownTypes;

namespace gRPCServer
{
    public class TimePeriodService : TimePeriods.TimePeriodsBase
    {
        private readonly ILogger<TimePeriodService> _logger;
        readonly DataContext _dbContext;
        public TimePeriodService(ILogger<TimePeriodService> logger, DataContext dbContext)
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
}
