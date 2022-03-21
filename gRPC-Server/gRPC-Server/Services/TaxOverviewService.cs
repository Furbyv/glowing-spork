namespace gRPCServer;
public class TaxOverviewService :Taxoverview.TaxoverviewBase
{
    private readonly ILogger<WozObjectService> _logger;
    readonly DataContext _dbContext;
    public TaxOverviewService(ILogger<WozObjectService> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public override Task<WozObjectsTaxOverviewReply> GetOverviewObjects(WozObjectFilterRequest request, ServerCallContext context)
    {
        var overviewQuery = _dbContext.Taxatieoverzicht.Where(t => t.Tijdvakid == request.Tijdvakid);
        if(request.Gemeentecodes != null && request.Gemeentecodes.Count > 0)
        {
            overviewQuery = overviewQuery.Where(t => request.Gemeentecodes.Contains(t.Gemeentecode));
        }
        if(request.Woonplaatsen != null && request.Woonplaatsen.Count > 0)
        {
            overviewQuery = overviewQuery.Where(t => request.Woonplaatsen.Contains(t.Woonplaatsnaam));
        }
        if(request.Straatnamen != null && request.Straatnamen.Count > 0)
        {
            overviewQuery = overviewQuery.Where(t => request.Straatnamen.Contains(t.Straatnaam));
        }
        if(request.Soortgroepids != null && request.Soortgroepids.Count > 0)
        {
            //overviewQuery = overviewQuery.Where(t=>request.Soortgroepids.Contains(t.SoortObjectGroepid))
        }
        if (request.Soortobjectcodes != null && request.Soortobjectcodes.Count > 0)
        {
            overviewQuery = overviewQuery.Where(t => request.Soortobjectcodes.Contains(t.Soortobjectcode));
        }
        if (request.Buurtcodes != null && request.Buurtcodes.Count > 0)
        {
            overviewQuery = overviewQuery.Where(t => request.Buurtcodes.Contains(t.Buurtcode));
        }
        if (request.Wijkcodes != null && request.Wijkcodes.Count > 0)
        {
            overviewQuery = overviewQuery.Where(t => request.Wijkcodes.Contains(t.Wijkcode));
        }

        var overviewObjects = overviewQuery.Select(t =>TaxOverviewConverter.TaxOverviewToWozObjectOverview(t)).ToList() ;
        var columnDefinitions = ColumnDefinitionConverter.GetColumnDefinitions(_dbContext,Protos.GridType.Taxoverview);

        var reply = new WozObjectsTaxOverviewReply();
        reply.OverviewObjects.Add(overviewObjects);
        reply.ColumnDefinitions.Add(columnDefinitions);

        return Task.FromResult(reply);
    }
}
