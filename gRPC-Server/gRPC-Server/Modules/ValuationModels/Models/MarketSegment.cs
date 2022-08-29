namespace gRPCServer.Modules.ValuationModels.Models;
public class MarketSegment
{
    [Key]
    public long Id { get; set; }
    public string Description { get; set; }
    public long WaardeGebiedId { get; set; }
    public long ObjectGroupDefinitionId { get; set; }
    public long ModelId { get; set; }

    [ForeignKey("WaardeGebiedId")]
    public WaardeGebied WaardeGebied { get; set; }

    [ForeignKey("ObjectGroupDefinitionId")]
    public ObjectGroupDefinition ObjectGroupDefinition { get; set; }

    [ForeignKey("ModelId")]
    public Model Model { get; set; }
    public ICollection<DeelPrice> DeelPrices { get; set; } = new HashSet<DeelPrice>();
}
