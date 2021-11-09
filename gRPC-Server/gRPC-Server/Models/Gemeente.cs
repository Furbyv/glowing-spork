#nullable disable

namespace gRPCServer;
public partial class Gemeente
{
    public Gemeente() { }

    [Key]
    public decimal Gemeentecode { get; set; }
    public string Gemeentenaam { get; set; }

    public ICollection<Wozobjectproperty> Wozobjectproperties { get; set; } = new HashSet<Wozobjectproperty>();
}

