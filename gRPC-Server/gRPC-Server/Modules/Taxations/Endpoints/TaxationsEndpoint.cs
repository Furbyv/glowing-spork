using gRPCServer.Logic;
using gRPCServer.Logic.Valuation;
using gRPCServer.Modules.Taxations.Converters;

namespace gRPCServer.Modules.Taxations.Endpoints;

public class TaxationsEndpoint : TaxationObjects.TaxationObjectsBase
{
    private readonly ILogger<TaxationsEndpoint> _logger;
    readonly DataContext _dbContext;
    public TaxationsEndpoint(ILogger<TaxationsEndpoint> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public async override Task<TaxationsObject> GetTaxationsObject(TaxationRequest request, ServerCallContext context)
    {
        var wozObject = await _dbContext.Wozobjects
            .AsSplitQuery()
            .Include(w => w.Wozobjectproperties)
            .Include(w => w.Wozdeelobjects)
            .ThenInclude(w => w.Wozdeelobjectproperties)
            .FirstOrDefaultAsync(x => x.Wozobjectnummer == request.Wozobjectnummer);
        var model = await _dbContext.Models
            .Include(m => m.DeelGroups)
            .Include(m => m.TimePeriod)
            .Include(m => m.MarketSegments).ThenInclude(s => s.DeelPrices)
            .FirstOrDefaultAsync(m => m.TimePeriodId == request.Prijspeilid);
        var reply = new TaxationsObject();
        reply.Prijspeilid = request.Prijspeilid;
        if (wozObject != null && model != null)
        {
            var taxation = _dbContext.Taxations.Include(t => t.ComparisonScores).Where(t => t.Wozobjectnummer == request.Wozobjectnummer && t.TimePeriodId == request.Prijspeilid).SingleOrDefault();
            if(taxation == null)
            {
                taxation = await TaxationBuilder.BuildNewTaxation(_dbContext,wozObject, model);
                var comparator = new Comparator(_dbContext, taxation);
                taxation.ComparisonScores = comparator.FindComparableObjects(wozObject).ToList();
                await _dbContext.Taxations.AddAsync(taxation);
                await _dbContext.SaveChangesAsync();
            }
            var taxObject = TaxationConverter.TaxationToReply(taxation);
            reply.Taxations.Add(taxObject);
        }
        return reply;
    }
}
