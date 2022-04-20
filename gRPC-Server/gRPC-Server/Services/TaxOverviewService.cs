namespace gRPCServer;
public class TaxOverviewService :Taxoverview.TaxoverviewBase
{
    private readonly ILogger<TaxOverviewService> _logger;
    readonly DataContext _dbContext;
    public TaxOverviewService(ILogger<TaxOverviewService> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }


    public override Task<WozObjectsTaxOverviewReply> GetOverviewObjects(FilterRequest request, ServerCallContext context)
    {
        var overviewQuery = _dbContext.Taxatieoverzicht.AsNoTracking().Where(t => t.Tijdvakid == request.Tijdvakid);
        overviewQuery = FilterRequestHelper.FilterFromRequest(request,overviewQuery);

        var overviewObjects = overviewQuery.Select(t =>TaxOverviewConverter.TaxOverviewToWozObjectOverview(t)).ToList() ;
        var columnDefinitions = ColumnDefinitionConverter.GetColumnDefinitions(_dbContext,Protos.GridType.Taxoverview);

        var reply = new WozObjectsTaxOverviewReply();
        reply.OverviewObjects.Add(overviewObjects);
        reply.ColumnDefinitions.Add(columnDefinitions);

        return Task.FromResult(reply);
    }
}
