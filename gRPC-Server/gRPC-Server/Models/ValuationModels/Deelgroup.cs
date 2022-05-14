namespace gRPCServer.Models
{
    public class Deelgroup
    {
        [Key]
        public long Id { get; set; }
        public string CodeWozDeelObject {  get; set; }
        public long DeelgroupDefinitionId { get; set; }
        public long ModelId { get; set; }
        public DeelgroupDefinition DeelgroupDefinition { get; set; }
        public Model Model { get; set; }
    }
}
