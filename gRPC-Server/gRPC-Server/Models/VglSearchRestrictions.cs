namespace gRPCServer.Models
{
    public class VglSearchRestriction
    {
        [Key]
        public long Id { get;set;}
        public string Description { get;set;}
        public long ModelId { get;set;}
        [AllowNull]
        public int? MaxAbsoluteDifference { get; set; }
        [AllowNull]
        public int? LowerBoundDifference {  get; set; }
        [AllowNull]
        public int? UpperBoundDifference { get; set; }
        public bool Priority { get; set; }

        [Column("RestrictionDefinitionId")]
        public RestrictionDefinitions RestrictionDefinition {  get; set; }
        public Model Model { get; set; }
    }
}
