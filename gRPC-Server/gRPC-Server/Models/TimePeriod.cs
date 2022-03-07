namespace gRPCServer.Models
{
    public class TimePeriod
    {
        [Key]
        public long Id { get; set; }
        public string Description { get; set; }
        public DateTime ValuationDate{ get; set; }
        public DateTime PropertyDate { get; set; }
    }
}
