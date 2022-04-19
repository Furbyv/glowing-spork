namespace gRPCServer.Models
{
    public class Transaction
    {
        [Key]
        public long VolgnummerMarktgegeven { get; set; }
        public long Wozobjectnummer { get; set; }
        public string Aard { get; set; }
        public string Soort { get; set; }
        public string Bruikbaarheid { get; set; }
        public DateTime TrasactieDatum {  get; set; }
        public long Transactieprijs { get; set; }
    }
}
