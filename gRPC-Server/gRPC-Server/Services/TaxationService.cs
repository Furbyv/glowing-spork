using gRPCServer.Logic;
using gRPCServer.Logic.Valuation;

namespace gRPCServer
{
    public class TaxationService : TaxationObjects.TaxationObjectsBase
    {
        private readonly ILogger<TaxationService> _logger;
        readonly DataContext _dbContext;
        public TaxationService(ILogger<TaxationService> logger, DataContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public async override Task<TaxationsObject> GetTaxationsObject(TaxationRequest request, ServerCallContext context)
        {
            var wozObject = await _dbContext.Wozobjects
                .AsNoTracking()
                .AsSplitQuery()
                .Include(w => w.Wozobjectproperties)
                .Include(w => w.Wozdeelobjects)
                .ThenInclude(w =>  w.Wozdeelobjectproperties) 
                .FirstOrDefaultAsync(x => x.Wozobjectnummer == request.Wozobjectnummer);
            var model = await _dbContext.Models.AsNoTracking()
                .Include(m => m.DeelGroups)
                .Include(m=>m.TimePeriod)
                .FirstOrDefaultAsync(m=> m.TimePeriodId == request.Prijspeilid);
            var reply = new TaxationsObject();
            reply.Prijspeilid = request.Prijspeilid;
            if (wozObject != null && model != null)
            {
                var taxation = TaxationBuilder.BuildNewTaxation(wozObject, model);
                var comparator = new Comparator(_dbContext,taxation);
                taxation.ComparisonScores = comparator.FindComparableObjects(wozObject).ToList();
                var taxObject = TaxationConverter.TaxationToReply(taxation);
                reply.Taxations.Add(taxObject);
            }
            return reply;
        }
    }
}
