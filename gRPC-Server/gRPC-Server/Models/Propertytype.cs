using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer
{
    public partial class Propertytype
    {
        public Propertytype()
        {
            Flexproperties = new HashSet<Flexproperty>();
        }
        [Key]
        public string Propertytype1 { get; set; }

        public virtual ICollection<Flexproperty> Flexproperties { get; set; }
    }
}
