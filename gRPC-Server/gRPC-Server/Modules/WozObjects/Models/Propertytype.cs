namespace gRPCServer.Modules.WozObjects.Models;
public partial class Propertytype
{
    [Key]
    public string Propertytype1 { get; set; }
    public virtual ICollection<Flexproperty> Flexproperties { get; set; } = new HashSet<Flexproperty>();
}

