using gRPCServer.Modules.Transactions.Models;
using Transaction = gRPCServer.Modules.Transactions.Models.Transaction;

namespace gRPCServer.Modules.Taxations.Models;
public class ComparisonScore
{
    [Key]
    public long Id { get; set; }
    public long TaxationId { get; set; }
    public long VolgnummerMarktgegeven { get; set; }
    public bool Selected { get; set; }
    public double TotaleScore { get; set; }
    public double AfstandScore { get; set; }
    public double WonOppScore { get; set; }
    public double AanbouwOppScore { get; set; }
    public double KavelOppScore { get; set; }
    public double TransactieDatumScore { get; set; }
    public double ObjectTypeScore { get; set; }
    public double AantalBijgebouwenScore { get; set; }
    public double BouwjaarScore { get; set; }

    [ForeignKey("VolgnummerMarktgegeven")]
    public Transaction Transaction { get; set; }

    [ForeignKey("TaxationId")]
    public Taxation Taxation { get; set; }
}
