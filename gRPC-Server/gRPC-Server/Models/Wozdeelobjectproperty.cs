namespace gRPCServer;
public partial class Wozdeelobjectproperty
{
    [Key]
    public long Id { get; set; }
    public long? Wozdeelobjectid { get; set; }
    public string Codewozdeelobject { get; set; }
    public decimal? Bouwjaar { get; set; }
    public decimal? Bouwlaag { get; set; }
    public string Ontsluitingverdieping { get; set; }
    public decimal? Aantalkamers { get; set; }
    public string Bouwjaarklasse { get; set; }
    public decimal? Renovatiejaar { get; set; }
    public decimal? Renovatiepercentage { get; set; }
    public string Kwaliteit { get; set; }
    public string Onderhoudstoestand { get; set; }
    public string Uitstraling { get; set; }
    public string Doelmatigheid { get; set; }
    public string Voorzieningen { get; set; }
    public decimal? Inhoud { get; set; }
    public string Codebrutonettoinhoud { get; set; }
    public decimal? Oppervlakte { get; set; }
    public string Codenettobrutooppervlakte { get; set; }
    public decimal? Aantalstuks { get; set; }
    public decimal? Lengte { get; set; }
    public decimal? Breedte { get; set; }
    public decimal? Hoogte { get; set; }
    public decimal? Frontbreedte { get; set; }
    public string Bagidentificatie { get; set; }
    public BitArray Bapaaltgegevenstaxatieverslag { get; set; }
    public string Archetype { get; set; }
    public string Statusdeelobject { get; set; }
    public BitArray Bepaaltaanduiding { get; set; }
    public string Codevrijstellingozb { get; set; }
    public string Groepaanduiding { get; set; }
    public string Codeomzetbelasting { get; set; }
    public string Aantekening { get; set; }
    public decimal? Begindatumgeldigheid { get; set; }
    public decimal? Einddatumgeldigheid { get; set; }
    public decimal? Tijdstipregistratie { get; set; }
    public DateTime? Startdate { get; set; }
    public DateTime? Dtend { get; set; }

    public virtual Wozdeelobject Wozdeelobject { get; set; }
}

