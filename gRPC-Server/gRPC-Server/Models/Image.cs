
namespace gRPCServer;
public class Image
{
    [Key]
    public long Id { get; set; }
    public long? Wozobjectnummer { get; set; }

    public byte[] Imagedata { get; set; }

    public bool Main { get; set; }

    [ForeignKey("Wozobjectnummer")]
    public Wozobject WozObject { get; set; }

}

