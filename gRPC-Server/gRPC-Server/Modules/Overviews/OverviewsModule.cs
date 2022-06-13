using gRPCServer.Modules.Overviews.Endpoints;

namespace gRPCServer.Modules.Overviews
{
    public class OverviewsModule : IModule
    {
        public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
        {
            endpoints.MapGrpcService<TaxOverviewEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
            endpoints.MapGrpcService <TransactionOverviewEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
            return endpoints;
        }

        public IServiceCollection RegisterModule(IServiceCollection builder)
        {
            return builder;
        }
    }
}
