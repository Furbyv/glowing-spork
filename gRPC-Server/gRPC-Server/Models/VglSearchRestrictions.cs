namespace gRPCServer.Models
{
    public class VglSearchRestrictions
    {
        [Key]
        public long Id { get;set;}
        public string Description { get;set;}
        public int RestrictionDefinitionId { get; set; }
        public long ModelId { get;set;}
        [AllowNull]
        public int? MaxAbsoluteDifference { get; set; }
        [AllowNull]
        public int? LowerBoundDifference {  get; set; }
        [AllowNull]
        public int? UpperBoundDifference { get; set; }
        public int Priority { get; set; }
        public RestrictionDefinitions RestrictionDefinition {  get; set; }
        public Model Model { get; set; }
    }
}
