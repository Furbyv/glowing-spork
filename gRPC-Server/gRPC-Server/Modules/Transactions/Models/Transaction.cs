using gRPCServer.Modules.WozObjects.Models;

namespace gRPCServer.Modules.Transactions.Models
{
    public class Transaction
    {
        [Key]
        public long VolgnummerMarktgegeven { get; set; }
        public long Wozobjectnummer { get; set; }
        public string Aard { get; set; }
        public string Soort { get; set; }
        public string Bruikbaarheid { get; set; }
        public DateTime TransactieDatum { get; set; }
        public long Transactieprijs { get; set; }
        public Wozobject Wozobject { get; set; }
    }
}
