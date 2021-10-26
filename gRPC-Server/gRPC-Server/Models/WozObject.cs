using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer
{
    public partial class Wozobject
    {
        public Wozobject()
        {
            Wozdeelobjects = new HashSet<Wozdeelobject>();
            Wozobjectproperties = new HashSet<Wozobjectproperty>();
        }

        [Key]
        public long Wozobjectnummer { get; set; }
        public DateTime? Startdate { get; set; }
        public DateTime? Enddate { get; set; }

        public virtual ICollection<Wozdeelobject> Wozdeelobjects { get; set; }
        public virtual ICollection<Wozobjectproperty> Wozobjectproperties { get; set; }
    }
}
