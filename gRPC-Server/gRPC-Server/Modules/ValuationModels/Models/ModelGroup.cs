namespace gRPCServer.Modules.ValuationModels.Models
{
    public class ModelGroup
    {
        [Key]
        public long Id { get; set; }
        public string Description { get; set; }
        public ICollection<Model> Models { get; set; } = new HashSet<Model>();
        public ICollection<DeelgroupDefinition> DeelGroupDefinitions { get; set; } = new HashSet<DeelgroupDefinition>();
    }
}
