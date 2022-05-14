namespace gRPCServer.Models
{
    public class DeelgroupDefinition
    {
        [Key]
        public long Id { get; set; }
        public string Description { get; set; }
        public long ModelGroupId {  get; set; }
        public ModelGroup ModelGroup {  get; set; }
    }
}
