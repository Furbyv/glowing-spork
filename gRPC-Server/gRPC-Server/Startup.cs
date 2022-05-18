namespace gRPCServer;

public class Startup
{
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

    readonly IConfiguration _configuration;
    public Startup(IConfiguration configuration) => _configuration = configuration;

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddCors(options =>
        options.AddDefaultPolicy(builder => builder
        .SetIsOriginAllowed(_ => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()));
        services.AddEntityFrameworkNpgsql().AddDbContext<DataContext>(optionsBuilder =>
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("dbContext"),x=> x.UseNetTopologySuite()).ReplaceService<ISqlGenerationHelper, CustomNameSqlGenerationHelper>().EnableDetailedErrors());
        services.AddGrpc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        app.UseCors();
        app.UseRouting();
        app.UseGrpcWeb();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapGrpcService<WozObjectService>().EnableGrpcWeb();
            endpoints.MapGrpcService<WozSubobjectService>().EnableGrpcWeb();
            endpoints.MapGrpcService<TaxOverviewService>().EnableGrpcWeb();
            endpoints.MapGrpcService<TransactionService>().EnableGrpcWeb();
            endpoints.MapGrpcService<NoteService>().EnableGrpcWeb();
            endpoints.MapGrpcService<TimePeriodService>().EnableGrpcWeb();
            endpoints.MapGrpcService<TaxationService>().EnableGrpcWeb();

            endpoints.MapGet("/", async context =>
            {
                await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
            });
        });
    }
}