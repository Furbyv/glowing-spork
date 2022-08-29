using gRPCServer.Modules.TimePeriods.Models;

namespace gRPCServer.Modules.ValuationModels.Models;

public class Model
{
    [Key]
    public long Id { get; set; }
    public string Description { get; set; }
    public long TimePeriodId { get; set; }
    public long ModelGroupId { get; set; }
    public TimePeriod TimePeriod { get; set; }
    public ModelGroup ModelGroup { get; set; }
    public ICollection<Deelgroup> DeelGroups { get; set; } = new HashSet<Deelgroup>();
    public ICollection<MarketSegment> MarketSegments { get; set; } = new HashSet<MarketSegment>();
    public ICollection<GebiedGroup> GebiedGroups { get; set; } = new HashSet<GebiedGroup>();
    public ICollection<ObjectGroup> ObjectGroups { get; set; } = new HashSet<ObjectGroup>();
    
}
