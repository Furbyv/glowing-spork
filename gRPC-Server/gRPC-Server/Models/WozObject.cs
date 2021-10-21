using System.ComponentModel.DataAnnotations;

namespace gRPC_Server.Models
{
    public class WozObject
    {
        [Key] public long WozObjectNummer { get; set; }
    }
}
