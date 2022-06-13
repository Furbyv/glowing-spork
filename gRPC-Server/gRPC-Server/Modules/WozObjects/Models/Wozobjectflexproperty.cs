using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer.Modules.WozObjects.Models
{
    public partial class Wozobjectflexproperty
    {
        [Key]
        public long Id { get; set; }
        public long? Wozobjectpropertiesid { get; set; }
        public string Propertycode { get; set; }
        public long? Numbervalue { get; set; }
        public DateTime? Datevalue { get; set; }
        public string Textvalue { get; set; }

        public virtual Flexproperty PropertycodeNavigation { get; set; }
        public virtual Wozobjectproperty Wozobjectproperties { get; set; }
    }
}
