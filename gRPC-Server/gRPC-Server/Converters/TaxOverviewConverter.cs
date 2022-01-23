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
                Huisnummer = model.Huisnummer ?? 0,
                Huisletter = model.Huisletter,
                Huisnummertoevoeging  = model.Huisnummertoevoeging,
                Postcode = model.Postcode,
                Wijkcode =model.Wijkcode,
                Buurtcode = model.Buurtcode,
                Locatieomschrijving = model.Locatieomschrijving,
                Waardegebied = model.Waardegebied,
                Bouwjaar = model.Bouwjaar ?? 0,
                Soortobjectcode = model.Soortobjectcode,
                Model = model.Model,
                Woninh = model.Woninh ?? 0,
                Wonopp = model.Wonopp ?? 0,
                Grondopp = model.Grondopp ?? 0,
                Aanbouwopp = model.Aanbouwopp ?? 0,
                Schuuropp = model.Schuuropp ?? 0,
                Garageopp = model.Garageopp ?? 0,
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
