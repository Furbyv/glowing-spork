using Grpc.Core;
using gRPCServer.Models;
using gRPCServer.Protos;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Diagnostics;
using System.Threading;

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
            .Contains(request.Wozobjectnummer.ToString())).Where(p => DateTime.Now >= p.Startdate && DateTime.Now <= p.Enddate)
            .Select(w => WozObjectConverter.WozobjectpropertyToWozObjectsReply(w)).ToList();

            var reply = new WozObjectsReply();
            reply.Wozobjects.Add(wozobjects);

            return Task.FromResult(reply);
        }

        public override async Task GetFullWozObject(WozObjectRequestById request, IServerStreamWriter<FullWozObjectReply> responseStream, ServerCallContext context)
        {
            Stopwatch timer = new Stopwatch();
            timer.Start();
            var wozobject = _dbContext.Wozobjectproperties.Where(w => w.Wozobjectnummer == request.Wozobjectnummer)
                .Where(p => DateTime.Now >= p.Startdate && DateTime.Now <= p.Enddate).FirstOrDefault();

            var reply = WozObjectConverter.WozobjectpropertyToFullWozObjectsReply(wozobject);
            await responseStream.WriteAsync(reply);

            while (1 == 1)
            {
                //_dbContext.Entry<Wozobjectproperty>(wozobject).Reload();
                //_dbContext.ChangeTracker.DetectChanges();
                //Console.WriteLine(_dbContext.ChangeTracker.HasChanges());
                //Console.WriteLine(_dbContext.ChangeTracker.DebugView.LongView);
                if (true)
                {
                    _dbContext.Entry<Wozobjectproperty>(wozobject).Reload();
                    reply = WozObjectConverter.WozobjectpropertyToFullWozObjectsReply(wozobject);
                    await responseStream.WriteAsync(reply);
                }
                Thread.Sleep(10000);
            }
            timer.Stop();
            return;
        }
    }
}
