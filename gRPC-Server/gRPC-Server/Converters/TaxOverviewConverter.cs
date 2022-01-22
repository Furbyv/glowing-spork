namespace gRPCServer.Converters
{
    public static  class TaxOverviewConverter
    {
        public static WozObjectOverview TaxOverviewToWozObjectOverview(TaxOverview model)
        {
            return new WozObjectOverview() { 
                Wozobjectnummer = model.Wozobjectnummer,
                Lat = model.Geometry != null ? model.Geometry.Y : 0,
                Lon = model.Geometry != null ? model.Geometry.X : 0,
                Tijdvakid = model.Tijdvakid,
                Gemeentecode = model.Gemeentecode,
                Woonplaatsnaam = model.Woonplaatsnaam,
                Straatnaam = model.Straatnaam,
                Huisnummer = model.Huisnummer,
                Huisletter = model.Huisletter,
                Huisnummertoevoeging  = model.Huisnummertoevoeging,
                Postcode = model.Postcode,
                Wijkcode =model.Wijkcode,
                Buurtcode = model.Buurtcode,
                Locatieomschrijving = model.Locatieomschrijving,
                Waardegebied = model.Waardegebied,
                Bouwjaar = model.Bouwjaar,
                Soortobjectcode = model.Soortobjectcode,
                Model = model.Model,
                Woninh = model.Woninh,
                Wonopp = model.Wonopp,
                Grondopp = model.Grondopp,
                Aanbouwopp = model.Aanbouwopp,
                Schuuropp = model.Schuuropp,
                Garageopp = model.Garageopp,
                Indicatieligging = model.Indicatieligging,
                Kwaliteit = model.Kwaliteit,
                Onderhoud = model.Onderhoud,
                Uitstraling = model.Uitstraling,
                Doelmatigheid = model.Doelmatigheid,
                Voorzieningen = model.Voorzieningen,
            
            };
        }
    }
}
