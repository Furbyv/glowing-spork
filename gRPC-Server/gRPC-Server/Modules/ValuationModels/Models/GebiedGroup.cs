namespace gRPCServer.Modules.ValuationModels.Models;
public class GebiedGroup
{
    [Key]
    public long Id { get; set; }
    public string WaardeGebied { get; set; }
    public long WaardeGebiedenId { get; set; }
    public long ModelId { get; set; }

    [ForeignKey("WaardeGebiedenId")]
    public WaardeGebied WaardeGebiedObject { get; set; }
    public Model Model { get; set; }
}
