using Grpc.Core;
using gRPCServer.Models;
using gRPCServer.Protos;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;

namespace gRPCServer
{
    public class WozObjectService : WozObjects.WozObjectsBase
    {
        private readonly ILogger<WozObjectService> _logger;
        readonly DataContext _dbContext;
        public WozObjectService(ILogger<WozObjectService> logger, DataContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public override Task<WozObjectReply> GetWozObject(WozObjectRequestById request, ServerCallContext context)
        {
            var wozobject = _dbContext.WozObjects.Where(w => w.WozObjectNummer == request.Wozobjectnummer).SingleOrDefault();
            return Task.FromResult(new WozObjectReply
            {
                Wozobjectnummer = wozobject.WozObjectNummer
            });
        }
    }
}
