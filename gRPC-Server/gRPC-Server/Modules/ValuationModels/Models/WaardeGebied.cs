namespace gRPCServer.Modules.ValuationModels.Models;
public class WaardeGebied
{
    [Key]
    public long Id { get; set; }
    public string Description { get; set; }
    public long ModelGroupId { get; set; }
    public ModelGroup ModelGroup { get; set; }
}
