namespace gRPCServer;
public partial class Wozdeelobject
{
    [Key]
    public long Id { get; set; }
    public long? Wozobjectnummer { get; set; }
    public decimal? Nummerwozdeelobject { get; set; }
    public DateTime? Startdate { get; set; }
    public DateTime? Enddate { get; set; }

    public virtual Wozobject WozobjectnummerNavigation { get; set; }
    public virtual ICollection<Wozdeelobjectproperty> Wozdeelobjectproperties { get; set; } = new HashSet<Wozdeelobjectproperty>();
}
