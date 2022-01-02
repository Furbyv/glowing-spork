namespace gRPCServer
{
    public class WozSubobjectService : SubObjects.SubObjectsBase
    {
        private readonly ILogger<WozObjectService> _logger;
        readonly DataContext _dbContext;

        public override Task<WozSubObjectsReply> GetSubObjects(SubobjectsRequestById request, ServerCallContext context)
        {
            var subobjects = _dbContext.Wozdeelobjects.Where(w => w.Wozobjectnummer == request.Wozobjectnummer)
                .Where(p => DateTime.Now >= p.Startdate && DateTime.Now <= p.Enddate)
                .Include(w => w.Wozdeelobjectproperties.Where(p => DateTime.Now >= p.Startdate && DateTime.Now <= p.Dtend))
                .Select(s=>WozSubobjectConverter.WozdeelobjectToWozSubobjectReply(s)).ToList();

            var reply = new WozSubObjectsReply();
            reply.Wozsubobjects.AddRange(subobjects);
            return Task.FromResult(reply);
        }
    }
}
