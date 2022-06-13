namespace gRPCServer.Modules.WozObjects.Models;
public partial class Wozdeelobject
{
    [Key]
    public long Id { get; set; }
    public long Wozobjectnummer { get; set; }
    public long Nummerwozdeelobject { get; set; }
    public DateTime? Startdate { get; set; }
    public DateTime? Enddate { get; set; }

    [ForeignKey("Wozobjectnummer")]
    public Wozobject Wozobject { get; set; }
    public ICollection<Wozdeelobjectproperty> Wozdeelobjectproperties { get; set; } = new HashSet<Wozdeelobjectproperty>();
}
