namespace gRPCServer.Modules.Notes.Models
{
    public class Notes
    {
        [Key]
        public long Id { get; set; }
        public long Wozobjectnummer { get; set; }
        public long UserId { get; set; }
        public string Note { get; set; }

        [ForeignKey("Wozobjectnummer")]
        public Wozobject WozObject { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
