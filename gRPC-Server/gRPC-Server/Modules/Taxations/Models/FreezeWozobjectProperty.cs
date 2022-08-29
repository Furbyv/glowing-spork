using gRPCServer.Modules.WozObjects.Models;

namespace gRPCServer.Modules.Taxations.Models;

public class FreezeWozobjectProperty
{
    [Key]
    public long TaxationId { get; set; }
    public string Adresidentificatie { get; set; }
    public string Nummeraanduiding { get; set; }
    public decimal Gemeentecode { get; set; }
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

    [ForeignKey("TaxationId")]
    public Taxation Taxation { get; set; }
    public FreezeWozobjectProperty() { }
    public FreezeWozobjectProperty(long taxid, Wozobjectproperty wozobjectproperty)
    {
        TaxationId = taxid;
        Nummeraanduiding = wozobjectproperty.Nummeraanduiding;
        Gemeentecode = wozobjectproperty.Gemeentecode;
        Naamopenbareruimte = wozobjectproperty.Naamopenbareruimte;
        Straatnaam = wozobjectproperty.Straatnaam;
        Huisnummer = wozobjectproperty.Huisnummer;
        Huisletter = wozobjectproperty.Huisletter;
        Huisnummertoevoeging = wozobjectproperty.Huisnummertoevoeging;
        Postcode = wozobjectproperty.Postcode;
        Wijkcode = wozobjectproperty.Wijkcode;
        Buurtcode = wozobjectproperty.Buurtcode;
        Woonplaatsnaam = wozobjectproperty.Woonplaatsnaam;
        Locatieomschrijving = wozobjectproperty.Locatieomschrijving;
        Grondoppervlakte = wozobjectproperty.Grondoppervlakte;
        Soortobjectcode = wozobjectproperty.Soortobjectcode;
        Indicatieligging = wozobjectproperty.Indicatieligging;
        Aanwezigheidlift = wozobjectproperty.Aanwezigheidlift;
        Gebruikscode = wozobjectproperty.Gebruikscode;
        Codegebouwdongebouwd = wozobjectproperty.Codegebouwdongebouwd;
        Meegetaxeerdeoppervlakte = wozobjectproperty.Meegetaxeerdeoppervlakte;
        Ozbvrijstelling = wozobjectproperty.Ozbvrijstelling;
        Bijzonderewaarderingscode = wozobjectproperty.Bijzonderewaarderingscode;
        Monumentaanduiding = wozobjectproperty.Monumentaanduiding;
        Codeomzetbelasting = wozobjectproperty.Codeomzetbelasting;
        Groepaanduiding = wozobjectproperty.Groepaanduiding;
        Aanduidingbouwstroom = wozobjectproperty.Aanduidingbouwstroom;
        Aanduidingonderzoek = wozobjectproperty.Aanduidingonderzoek;
        Statuswozobject = wozobjectproperty.Statuswozobject;
        Waardegebied = wozobjectproperty.Waardegebied;
        Codeontbrekennutsvoorzieningen = wozobjectproperty.Codeontbrekennutsvoorzieningen;
        Financieringsvorm = wozobjectproperty.Financieringsvorm;
        Stijlletter = wozobjectproperty.Stijlletter;
        Omschrijving = wozobjectproperty.Omschrijving;
    }
}
