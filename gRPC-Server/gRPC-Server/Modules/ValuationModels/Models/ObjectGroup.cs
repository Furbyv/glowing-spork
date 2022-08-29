namespace gRPCServer.Modules.ValuationModels.Models;
public class ObjectGroup
{
    [Key]
    public long Id { get; set; }
    public string CodeWozObject { get; set; }
    public long ObjectgroupDefinitionId { get; set; }
    public long ModelId { get; set; }
    public ObjectGroupDefinition ObjectGroupDefinition { get; set; }
    public Model Model { get; set; }
}
