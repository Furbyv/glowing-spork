namespace gRPCServer.Models
{
    public class User
    {
        [Key]
        public long Id { get; set; }
        public string Username { get; set; }
        public string Fullname { get; set; }
        public BitArray Active { get; set; }
    }
}
