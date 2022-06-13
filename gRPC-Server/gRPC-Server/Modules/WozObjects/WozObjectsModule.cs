using gRPCServer.Extensions;
using gRPCServer.Modules.WozObjects.Endpoints;
using gRPCServer.Modules.WozObjects.Models;

namespace gRPCServer.Modules.WozObjects
{
    public class WozObjectsModule : IModule
    {
        public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
        {
            endpoints.MapGrpcService<WozObjectsEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
            endpoints.MapGrpcService<WozSubobjectsEnpoint>().EnableGrpcWeb().RequireCors("AllowAll");
            return endpoints;
        }

        public IServiceCollection RegisterModule(IServiceCollection builder, IConfiguration configuration)
        {
            return builder;
        }
    }
}
