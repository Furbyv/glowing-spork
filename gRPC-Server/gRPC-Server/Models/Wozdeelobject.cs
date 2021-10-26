using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer
{
    public partial class Wozdeelobject
    {
        public Wozdeelobject()
        {
            Wozdeelobjectproperties = new HashSet<Wozdeelobjectproperty>();
        }
        [Key]
        public long Id { get; set; }
        public long? Wozobjectnummer { get; set; }
        public decimal? Nummerwozdeelobject { get; set; }
        public DateTime? Startdate { get; set; }
        public DateTime? Enddate { get; set; }

        public virtual Wozobject WozobjectnummerNavigation { get; set; }
        public virtual ICollection<Wozdeelobjectproperty> Wozdeelobjectproperties { get; set; }
    }
}
