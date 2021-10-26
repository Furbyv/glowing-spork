using Grpc.Core;
using gRPCServer.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gRPCServer
{
    public class GreeterService : Greeter.GreeterBase
    {
        private readonly ILogger<GreeterService> _logger;
        readonly DataContext _dbContext;
        public GreeterService(ILogger<GreeterService> logger, DataContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            var wozobject = _dbContext.Wozobjects.Where(w => w.Wozobjectnummer == 1).SingleOrDefault();
            return Task.FromResult(new HelloReply
            {
                Message = "Hello " + wozobject.Wozobjectnummer+ request.Name
            });
        }
    }
}
