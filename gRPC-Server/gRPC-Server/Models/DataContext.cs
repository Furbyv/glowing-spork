using Npgsql;

namespace gRPCServer.Models;
public class DataContext : DbContext
{
    public virtual DbSet<Flexproperty> Flexproperties { get; set; }
    public virtual DbSet<Gemeente> Gemeenten { get; set; }
    public virtual DbSet<Propertytype> Propertytypes { get; set; }
    public virtual DbSet<Wozdeelobject> Wozdeelobjects { get; set; }
    public virtual DbSet<Wozdeelobjectproperty> Wozdeelobjectproperties { get; set; }
    public virtual DbSet<Wozobject> Wozobjects { get; set; }
    public virtual DbSet<Wozobjectflexproperty> Wozobjectflexproperties { get; set; }
    public virtual DbSet<Wozobjectproperty> Wozobjectproperties { get; set; }
    public virtual DbSet<Image> Images { get; set; }
    public virtual DbSet<TaxOverview> Taxatieoverzicht { get; set; }
    public DataContext(DbContextOptions<DataContext> options) : base(options) {
        NpgsqlConnection.GlobalTypeMapper.UseNetTopologySuite();
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TaxOverview>().HasNoKey();
    }
}

