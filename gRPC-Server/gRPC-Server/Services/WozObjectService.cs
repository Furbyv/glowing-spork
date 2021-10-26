using Grpc.Core;
using gRPCServer.Models;
using gRPCServer.Protos;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;
using System;

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

        public override Task<WozObjectsReply> GetWozObject(WozObjectRequestById request, ServerCallContext context)
        {
            var wozobjects = _dbContext.Wozobjectproperties.Where(w => w.Wozobjectnummer.ToString()
            .Contains(request.Wozobjectnummer.ToString())).Where(p => DateTime.Now >= p.Startdate && DateTime.Now >= p.Enddate).Select(w => new WozObjectReply
            {
                Wozobjectnummer = (long)w.Wozobjectnummer,
                Gemeentenaam = "Test", //Add foreign key to gemeente?
                Straatnaam = w.Straatnaam,
                Huisnummer = (int)w.Huisnummer,
                Huisletter = w.Huisletter,
                Huisnummertoevoeging = w.Huisnummertoevoeging,
                Postcode = w.Postcode,
                Soortobjectcode = w.Soortobjectcode
            }).ToList();

            var reply = new WozObjectsReply();
            reply.Wozobjects.Add(wozobjects);

            return Task.FromResult(reply);
        }
    }
}
