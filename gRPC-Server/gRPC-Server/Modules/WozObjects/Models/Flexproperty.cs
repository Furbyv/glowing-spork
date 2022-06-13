#nullable disable

using gRPCServer;

namespace gRPCServer.Modules.WozObjects.Models;
public partial class Flexproperty
{
    public Flexproperty()
    {
        Wozobjectflexproperties = new HashSet<Wozobjectflexproperty>();
    }
    [Key]
    public string Propertycode { get; set; }
    public string Omschrijving { get; set; }
    public string Propertytype { get; set; }

    public virtual Propertytype PropertytypeNavigation { get; set; }
    public virtual ICollection<Wozobjectflexproperty> Wozobjectflexproperties { get; set; }
}

