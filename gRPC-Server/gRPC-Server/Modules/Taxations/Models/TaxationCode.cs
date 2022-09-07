namespace gRPCServer.Modules.Taxations.Models
{
    public class TaxationCode
    {
        [Key]
        public string TaxCode { get; set; }
        public string Description { get; set; }
        public long TaxOrder { get; set; }
    }
}
