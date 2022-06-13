using gRPCServer.Modules.TimePeriods.Models;

namespace gRPCServer;

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
}
