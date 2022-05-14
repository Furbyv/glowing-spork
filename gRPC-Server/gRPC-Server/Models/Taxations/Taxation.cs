namespace gRPCServer.Models
{
    public class Taxation
    {
        [Key]
        public long Id { get; set; }
        public long Wozobjectnummer { get; set; }
        public string Status {  get; set; }
        public long ModelId { get; set; }
        public long TimePeriodId { get; set; }
        public bool Active { get; set; }
        public Wozobject Wozobject { get; set; }
        public TaxationStatus TaxationStatus { get; set; }
        public Model Model { get; set; }
        public TimePeriod TimePeriod { get; set; }
        public FreezeWozobjectProperty FreezeWozobjectProperty { get; set; }
    }
}
