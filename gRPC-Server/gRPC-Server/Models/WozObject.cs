
namespace gRPCServer;
public partial class Wozobject
{
    [Key]
    public long Wozobjectnummer { get; set; }
    public DateTime? Startdate { get; set; }
    public DateTime? Enddate { get; set; }
    [AllowNull]
    public Point Geometry { get; set; }
    public ICollection<Wozdeelobject> Wozdeelobjects { get; set; } = new HashSet<Wozdeelobject>();
    public ICollection<Wozobjectproperty> Wozobjectproperties { get; set; } = new HashSet<Wozobjectproperty>();
    public ICollection<Image> Images { get; set; } = new HashSet<Image>();
}

