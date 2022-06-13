using gRPCServer.Modules.WozObjects.Converters;

namespace gRPCServer.Modules.WozObjects.Endpoints;
public class WozSubobjectsEnpoint : SubObjects.SubObjectsBase
{
    private readonly ILogger<WozObjectsEndpoint> _logger;
    readonly DataContext _dbContext;

    public WozSubobjectsEnpoint(ILogger<WozObjectsEndpoint> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public override Task<WozSubObjectsReply> GetSubObjects(SubobjectsRequestById request, ServerCallContext context)
    {
        var subobjects = _dbContext.Wozdeelobjects.Where(w => w.Wozobjectnummer == request.Wozobjectnummer)
            .Where(p => DateTime.UtcNow >= p.Startdate && DateTime.UtcNow <= p.Enddate)
            .Include(w => w.Wozdeelobjectproperties.Where(p => DateTime.UtcNow >= p.Startdate && DateTime.UtcNow <= p.Enddate))
            .Select(s => WozSubobjectConverter.WozdeelobjectToWozSubobjectReply(s)).ToList();

        var reply = new WozSubObjectsReply();
        reply.Wozsubobjects.AddRange(subobjects);
        return Task.FromResult(reply);
    }
}
