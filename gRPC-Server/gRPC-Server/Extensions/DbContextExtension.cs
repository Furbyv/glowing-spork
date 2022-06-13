namespace gRPCServer.Extensions
{
    public static class DbContextExtension
    {
        public static IServiceCollection SetNpgsqlContext<T>(this IServiceCollection builder, string connectionString)
            where T : DbContext
        {
            builder.AddDbContext<T>(optionsBuilder =>
                optionsBuilder.UseNpgsql(connectionString, x => x.UseNetTopologySuite()).ReplaceService<ISqlGenerationHelper, CustomNameSqlGenerationHelper>().EnableDetailedErrors()
            );
            return builder;
        }
    }
}
