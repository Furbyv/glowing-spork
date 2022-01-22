namespace gRPCServer.Models;
public class TaxOverview
{
    public int Tijdvakid { get; set; }
    public long Wozobjectnummer { get; set; }
    public Geometry Geometry { get; set; }
    public int Gemeentecode { get; set; }
    public string Straatnaam { get; set; }
    public int Huisnummer { get; set; }
    public string Huisletter { get; set; }
    public string Huisnummertoevoeging { get; set; }
    public string Postcode { get; set; }
    public string Wijkcode { get; set; }
    public string Buurtcode { get; set; }
    public string Woonplaatsnaam { get; set; }
    public string Locatieomschrijving { get; set; }
    public string Soortobjectcode { get; set; }
    public string Indicatieligging { get; set; }
    public string Groepaanduiding { get; set; }
    public string Aanduidingbouwstroom { get; set; }
    public string Statuswozobject { get; set; }
    public string Waardegebied { get; set; }
    public string Model { get; set; }
    public int Woninh { get; set; }
    public int Wonopp { get; set; }
    public int Grondopp { get; set; }
    public int Aanbouwopp { get; set; }
    public int Schuuropp { get; set; }
    public int Garageopp { get; set; }
    public int Bouwjaar { get; set; }
    public string Kwaliteit { get; set; }
    public string Onderhoud { get; set; }
    public string Uitstraling { get; set; }
    public string Doelmatigheid { get; set; }
    public string Voorzieningen { get; set; }
}

