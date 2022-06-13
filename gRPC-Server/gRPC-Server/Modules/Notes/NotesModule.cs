namespace gRPCServer.Modules.Notes;

public class NotesModule : IModule
{
    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGrpcService<NotesEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
        return endpoints;
    }

    public IServiceCollection RegisterModule(IServiceCollection builder)
    {
        return builder;
    }
}
