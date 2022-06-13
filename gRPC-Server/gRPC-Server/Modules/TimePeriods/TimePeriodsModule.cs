namespace gRPCServer.Modules.TimePeriods;
public class TimePeriodsModule : IModule
{
    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGrpcService<TimePeriodsEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
        return endpoints;
    }

    public IServiceCollection RegisterModule(IServiceCollection builder)
    {
        return builder;
    }
}
