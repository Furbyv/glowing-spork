namespace gRPCServer.Modules.ValuationModels.Models;
public class DeelPrice
{
    [Key]
    public long Id { get; set; }
    public long MarketSegmentId { get; set; }
    public long DeelGroupDefinitionId { get; set; }
    public double Price { get; set; }   
    public double Percentage { get; set; }

    [ForeignKey("MarketSegmentId")]
    public MarketSegment MarketSegment { get; set; }

    [ForeignKey("DeelGroupDefinitionId")]
    public DeelgroupDefinition Deelgroup { get; set; }
}
