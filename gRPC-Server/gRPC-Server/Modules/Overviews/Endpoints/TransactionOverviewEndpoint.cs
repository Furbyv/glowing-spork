namespace gRPCServer.Modules.Overviews.Endpoints;

public class TransactionOverviewEndpoint : TransactionsService.TransactionsServiceBase
{
    private readonly ILogger<TransactionOverviewEndpoint> _logger;
    readonly DataContext _dbContext;
    public TransactionOverviewEndpoint(ILogger<TransactionOverviewEndpoint> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public override Task<TransactionsOverview> GetTransactionsOverview(FilterRequest request, ServerCallContext context)
    {
        var overviewQuery = _dbContext.TransactieOverzicht.AsNoTracking().Where(t => t.TransactieDatum >= request.Startdate.ToDateTime() && t.TransactieDatum <= request.Enddate.ToDateTime());
        overviewQuery = FilterRequestHelper.FilterFromRequest(request, overviewQuery);
        var overview = overviewQuery.Select(t => TransactionConverter.ModelToOverviewReply(t)).ToList();
        var columnDefinitions = ColumnDefinitionConverter.GetColumnDefinitions(_dbContext, Protos.GridType.Transactionoverview);

        var reply = new TransactionsOverview();
        reply.OverviewTransaction.AddRange(overview);
        reply.ColumnDefinitions.AddRange(columnDefinitions);
        return Task.FromResult(reply);
    }
}
