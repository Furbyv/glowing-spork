using gRPCServer.Modules.Transactions.Endpoints;

namespace gRPCServer.Modules.Transactions;

public class TransactionsModule : IModule
{
    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGrpcService<TransactionsEndpoint>().EnableGrpcWeb().RequireCors("AllowAll");
        return endpoints;
    }

    public IServiceCollection RegisterModule(IServiceCollection builder, IConfiguration configuration)
    {
        return builder;
    }
}
