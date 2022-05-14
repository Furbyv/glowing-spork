namespace gRPCServer.Models
{
    public class TaxationStatus
    {
       [Key]
       public string Status { get; set; } 
       public string Description { get; set; }
    }
}
