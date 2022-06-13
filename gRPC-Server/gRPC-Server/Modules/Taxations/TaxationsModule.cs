using gRPCServer.Modules.Taxations.Endpoints;

namespace gRPCServer.Modules.Taxations;

public class TaxationsModule : IModule
{
    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGrpcService<TaxationsEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
        return endpoints;
    }

    public IServiceCollection RegisterModule(IServiceCollection builder, IConfiguration configuration)
    {
        return builder;
    }
}
