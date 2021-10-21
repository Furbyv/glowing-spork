using System.ComponentModel.DataAnnotations;

namespace gRPCServer.Models
{
    public class WozObject
    {
        [Key] public long WozObjectNummer { get; set; }
    }
}
