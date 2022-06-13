using gRPCServer.Modules;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<DataContext>(optionsBuilder =>
    optionsBuilder.UseNpgsql(builder.Configuration.GetConnectionString("dbContext"), x => x.UseNetTopologySuite()).ReplaceService<ISqlGenerationHelper, CustomNameSqlGenerationHelper>().EnableDetailedErrors()
);
builder.Services.AddGrpc();
builder.Services.RegisterModules(builder.Configuration);
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
app.Run();