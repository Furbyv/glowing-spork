using gRPCServer.Modules.Overviews.Models;
using TransactionOverview = gRPCServer.Protos.TransactionOverview;

namespace gRPCServer.Modules.Overviews.Converters;

public static class OverviewsConverter
{
    public static WozObjectOverview TaxOverviewToWozObjectOverview(TaxOverview model)
    {
        return new WozObjectOverview()
        {
            Wozobjectnummer = model.Wozobjectnummer,
            Lat = model.Geometry != null ? model.Geometry.Y : 0,
            Lon = model.Geometry != null ? model.Geometry.X : 0,
            Tijdvakid = model.Tijdvakid,
            Gemeentecode = model.Gemeentecode,
            Woonplaatsnaam = model.Woonplaatsnaam,
            Straatnaam = model.Straatnaam,
            Huisnummer = model.Huisnummer ?? 0,
            Huisletter = model.Huisletter,
            Huisnummertoevoeging = model.Huisnummertoevoeging,
            Postcode = model.Postcode,
            Wijkcode = model.Wijkcode,
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

    public static TransactionOverview ModelToOverviewReply(Models.TransactionOverview model)
    {
        var reply = new TransactionOverview();
        reply.Wozobjectnummer = model.Wozobjectnummer;
        reply.Volgnummer = model.Volgnummer;
        reply.Lat = model.Geometry != null ? model.Geometry.Y : 0;
        reply.Lon = model.Geometry != null ? model.Geometry.X : 0;
        reply.Gemeentecode = model.Gemeentecode;
        reply.Woonplaatsnaam = model.Woonplaatsnaam;
        reply.Straatnaam = model.Straatnaam;
        reply.Huisnummer = model.Huisnummer ?? 0;
        reply.Huisletter = model.Huisletter;
        reply.Huisnummertoevoeging = model.Huisnummertoevoeging;
        reply.Postcode = model.Postcode;
        reply.Wijkcode = model.Wijkcode;
        reply.Buurtcode = model.Buurtcode;
        reply.Locatieomschrijving = model.Locatieomschrijving;
        reply.Bouwjaar = model.Bouwjaar ?? 0;
        reply.Soortobjectcode = model.Soortobjectcode;
        reply.Woninh = model.Woninh ?? 0;
        reply.Wonopp = model.Wonopp ?? 0;
        reply.Indicatieligging = model.Indicatieligging;
        reply.Kwaliteit = model.Kwaliteit;
        reply.Onderhoud = model.Onderhoud;
        reply.Uitstraling = model.Uitstraling;
        reply.Doelmatigheid = model.Doelmatigheid;
        reply.Voorzieningen = model.Voorzieningen;
        reply.Aanduidingbouwstroom = model.Aanduidingbouwstroom;
        reply.Aard = model.Aard;
        reply.Soort = model.Soort;
        reply.Bruikbaarheid = model.Bruikbaarheid;
        reply.Transactieprijs = model.TransactiePrijs;
        reply.Transactiedatum = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(model.TransactieDatum.ToUniversalTime());
        return reply;
    }
}
