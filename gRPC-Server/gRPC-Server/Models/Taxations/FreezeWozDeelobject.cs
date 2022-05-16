namespace gRPCServer.Models;
public class FreezeWozDeelobject
{
        [Key]
        public long Id { get; set; }
        public long TaxId { get; set; }
        public long DeelgroupId { get; set; }
        public long NummerWozDeelobject { get; set; }
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
        public Taxation Taxation { get; set; }
        public Deelgroup Deelgroup { get; set; }

        public FreezeWozDeelobject() { }
        public FreezeWozDeelobject(long taxid, long volgnummer, Wozdeelobjectproperty property ) {
            TaxId = taxid;
            NummerWozDeelobject = volgnummer;
            Codewozdeelobject = property.Codewozdeelobject;
            Bouwjaar = property.Bouwjaar;
            Bouwlaag = property.Bouwlaag;
            Ontsluitingverdieping = property.Ontsluitingverdieping;
            Aantalkamers = property.Aantalkamers;
            Bouwjaarklasse = property.Bouwjaarklasse;
            Renovatiejaar = property.Renovatiejaar;
            Renovatiepercentage = property.Renovatiepercentage;
            Kwaliteit = property.Kwaliteit;
            Onderhoudstoestand = property.Onderhoudstoestand;
            Uitstraling = property.Uitstraling;
            Doelmatigheid = property.Doelmatigheid;
            Voorzieningen = property.Voorzieningen;
            Inhoud = property.Inhoud;
            Codebrutonettoinhoud = property.Codebrutonettoinhoud;
            Oppervlakte = property.Oppervlakte;
            Codenettobrutooppervlakte = property.Codenettobrutooppervlakte;
            Aantalstuks = property.Aantalstuks;
            Lengte = property.Lengte;
            Breedte = property.Breedte;
            Hoogte = property.Hoogte;
            Frontbreedte = property.Frontbreedte;
            Bagidentificatie = property.Bagidentificatie;
            Bapaaltgegevenstaxatieverslag = property.Bapaaltgegevenstaxatieverslag;
            Archetype = property.Archetype;
            Statusdeelobject = property.Statusdeelobject;
            Bepaaltaanduiding = property.Bepaaltaanduiding;
            Codevrijstellingozb = property.Codevrijstellingozb;
            Groepaanduiding = property.Groepaanduiding;
            Codeomzetbelasting = property.Codeomzetbelasting;
            Aantekening = property.Aantekening;
            Begindatumgeldigheid = property.Begindatumgeldigheid;
            Einddatumgeldigheid = property.Einddatumgeldigheid;
            Tijdstipregistratie = property.Tijdstipregistratie;
    }
}
