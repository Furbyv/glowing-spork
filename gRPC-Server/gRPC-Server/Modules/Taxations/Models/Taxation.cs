using gRPCServer.Modules.TimePeriods.Models;
using gRPCServer.Modules.ValuationModels.Models;
using gRPCServer.Modules.WozObjects.Models;

namespace gRPCServer.Modules.Taxations.Models;

public class Taxation
{
    [Key]
    public long Id { get; set; }
    public long Wozobjectnummer { get; set; }
    public string Status { get; set; }
    public long ModelId { get; set; }
    public long TimePeriodId { get; set; }
    public bool Active { get; set; }
    public long MarketSegmentId { get; set; }

    [ForeignKey("Wozobjectnummer")]
    public Wozobject Wozobject { get; set; }
    
    [ForeignKey("Status")]
    public TaxationStatus TaxationStatus { get; set; }
    
    [ForeignKey("ModelId")]
    public Model Model { get; set; }
    
    [ForeignKey("TimePeriodId")]
    public TimePeriod TimePeriod { get; set; }

    [ForeignKey("MarketSegmentId")]
    public MarketSegment MarketSegment { get; set; }
    public FreezeWozobjectProperty FreezeWozobjectProperty { get; set; }
    public ICollection<FreezeWozDeelobject> FreezeWozDeelobjects { get; set; } = new HashSet<FreezeWozDeelobject>();
    public ICollection<ComparisonScore> ComparisonScores { get; set; } = new HashSet<ComparisonScore>();

    public Taxation() { }
    public Taxation(long wozObjectnummer, Model model)
    {
        Wozobjectnummer = wozObjectnummer;
        Model = model;
        Active = true;
        TimePeriodId = model.TimePeriodId;
        Status = "W";
    }
}
