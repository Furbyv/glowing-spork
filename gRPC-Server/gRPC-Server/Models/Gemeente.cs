using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer
{
    public partial class Gemeente
    {
        public Gemeente()
        {
            Wozobjectproperties = new HashSet<Wozobjectproperty>();
        }

        [Key]
        public decimal Gemeentecode { get; set; }
        public string Gemeentenaam { get; set; }

        public ICollection<Wozobjectproperty> Wozobjectproperties { get; set; }
    }
}
