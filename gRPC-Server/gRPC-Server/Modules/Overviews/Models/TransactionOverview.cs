namespace gRPCServer.Modules.Overviews.Models
{
    public class TransactionOverview : OverviewBase
    {
        public long Volgnummer { get; set; }
        public long TransactiePrijs { get; set; }
        public DateTime TransactieDatum { get; set; }
        public string Aard { get; set; }
        public string Soort { get; set; }
        public string Bruikbaarheid { get; set; }
    }
}
