using System;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace gRPCServer
{
    public partial class Wozobjectproperty
    {
        public Wozobjectproperty()
        {
            Wozobjectflexproperties = new HashSet<Wozobjectflexproperty>();
        }
        [Key]
        public long Id { get; set; }
        public long? Wozobjectnummer { get; set; }
        public string Adresidentificatie { get; set; }
        public string Nummeraanduiding { get; set; }
        public decimal? Gemeentecode { get; set; }
        public string Naamopenbareruimte { get; set; }
        public string Straatnaam { get; set; }
        public decimal? Huisnummer { get; set; }
        public string Huisletter { get; set; }
        public string Huisnummertoevoeging { get; set; }
        public string Postcode { get; set; }
        public string Wijkcode { get; set; }
        public string Buurtcode { get; set; }
        public string Woonplaatsnaam { get; set; }
        public string Locatieomschrijving { get; set; }
        public decimal? Grondoppervlakte { get; set; }
        public string Soortobjectcode { get; set; }
        public string Indicatieligging { get; set; }
        public BitArray Aanwezigheidlift { get; set; }
        public decimal? Gebruikscode { get; set; }
        public string Codegebouwdongebouwd { get; set; }
        public decimal? Meegetaxeerdeoppervlakte { get; set; }
        public decimal? Ozbvrijstelling { get; set; }
        public decimal? Bijzonderewaarderingscode { get; set; }
        public decimal? Monumentaanduiding { get; set; }
        public string Codeomzetbelasting { get; set; }
        public string Groepaanduiding { get; set; }
        public string Aanduidingbouwstroom { get; set; }
        public string Aanduidingonderzoek { get; set; }
        public decimal? Statuswozobject { get; set; }
        public string Waardegebied { get; set; }
        public string Codeontbrekennutsvoorzieningen { get; set; }
        public string Financieringsvorm { get; set; }
        public string Stijlletter { get; set; }
        public string Omschrijving { get; set; }
        public decimal? Begindatumgeldigheid { get; set; }
        public decimal? Einddatumgeldigheid { get; set; }
        public decimal? Tijdstipregistratie { get; set; }
        public DateTime? Startdate { get; set; }
        public DateTime? Enddate { get; set; }

        public virtual Gemeente GemeentecodeNavigation { get; set; }
        public virtual Wozobject WozobjectnummerNavigation { get; set; }
        public virtual ICollection<Wozobjectflexproperty> Wozobjectflexproperties { get; set; }
    }
}
