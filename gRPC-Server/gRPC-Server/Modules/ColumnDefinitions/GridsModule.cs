namespace gRPCServer.Modules.Grids;
public class GridsModule : IModule
{
    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        return endpoints;
    }

    public IServiceCollection RegisterModule(IServiceCollection builder, IConfiguration configuration)
    {
        return builder;
    }
}
