namespace gRPCServer.Modules.Transactions.Endpoints;

public class TransactionsEndpoint : TransactionsService.TransactionsServiceBase
{
    private readonly ILogger<TransactionsEndpoint> _logger;
    readonly DataContext _dbContext;
    public TransactionsEndpoint(ILogger<TransactionsEndpoint> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public override Task<Protos.Transactions> GetTransactionsWozobject(TransactionRequest request, ServerCallContext context)
    {
        return base.GetTransactionsWozobject(request, context);
    }
}
