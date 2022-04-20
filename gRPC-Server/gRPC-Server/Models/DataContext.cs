﻿using Npgsql;

namespace gRPCServer.Models;
public class DataContext : DbContext
{
    public virtual DbSet<TimePeriod> Timeperiods { get; set; }
    public virtual DbSet<Flexproperty> Flexproperties { get; set; }
    public virtual DbSet<Gemeente> Gemeenten { get; set; }
    public virtual DbSet<Propertytype> Propertytypes { get; set; }
    public virtual DbSet<Wozdeelobject> Wozdeelobjects { get; set; }
    public virtual DbSet<Wozdeelobjectproperty> Wozdeelobjectproperties { get; set; }
    public virtual DbSet<Wozobject> Wozobjects { get; set; }
    public virtual DbSet<Wozobjectflexproperty> Wozobjectflexproperties { get; set; }
    public virtual DbSet<Wozobjectproperty> Wozobjectproperties { get; set; }
    public virtual DbSet<Image> Images { get; set; }
    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Notes> Notes { get; set; }
    public virtual DbSet<TaxOverview> Taxatieoverzicht { get; set; }
    public virtual DbSet<Transaction> Transactions { get; set; }
    public virtual DbSet<TransactionOverview> TransactieOverzicht { get; set; }
    public virtual DbSet<ColumnDefinition> ColumnDefinitions { get; set; }
    public DataContext(DbContextOptions<DataContext> options) : base(options) {
        NpgsqlConnection.GlobalTypeMapper.UseNetTopologySuite();
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TaxOverview>().HasNoKey();
        modelBuilder.Entity<TransactionOverview>().HasNoKey();
    }
}

