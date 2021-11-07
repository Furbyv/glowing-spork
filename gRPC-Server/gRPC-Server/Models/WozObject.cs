using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer
{
    public partial class Wozobject
    {
        public Wozobject(){}

        [Key]
        public long Wozobjectnummer { get; set; }
        public DateTime? Startdate { get; set; }
        public DateTime? Enddate { get; set; }

        public  ICollection<Wozdeelobject> Wozdeelobjects { get; set; } = new HashSet<Wozdeelobject>();
        public  ICollection<Wozobjectproperty> Wozobjectproperties { get; set; } = new HashSet<Wozobjectproperty>();
        public ICollection<Image> Images { get; set; } = new HashSet<Image>();
    }
}
