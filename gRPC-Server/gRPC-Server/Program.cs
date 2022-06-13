using gRPCServer;
using gRPCServer.Modules;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEntityFrameworkNpgsql().AddDbContext<DataContext>(optionsBuilder =>
optionsBuilder.UseNpgsql(builder.Configuration.GetConnectionString("dbContext"), x => x.UseNetTopologySuite()).ReplaceService<ISqlGenerationHelper, CustomNameSqlGenerationHelper>().EnableDetailedErrors());
builder.Services.AddGrpc();
builder.Services.RegisterModules();
builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader()
           .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));
var app = builder.Build();

app.UseRouting();
app.UseGrpcWeb();
app.UseCors();
app.MapEndpoints();
app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<WozObjectService>().EnableGrpcWeb().RequireCors("AllowAll");
    endpoints.MapGrpcService<WozSubobjectService>().EnableGrpcWeb().RequireCors("AllowAll");
    endpoints.MapGrpcService<TaxOverviewService>().EnableGrpcWeb().RequireCors("AllowAll");
    endpoints.MapGrpcService<TransactionService>().EnableGrpcWeb().RequireCors("AllowAll");
    endpoints.MapGrpcService<NoteService>().EnableGrpcWeb().RequireCors("AllowAll");
    endpoints.MapGrpcService<TaxationService>().EnableGrpcWeb().RequireCors("AllowAll");
}
);
app.Run();