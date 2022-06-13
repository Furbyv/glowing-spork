using gRPCServer.Modules.Taxations.Models;
using gRPCServer.Modules.WozObjects.Models;

namespace gRPCServer.Modules.WozObjects.Converters;
public static class WozObjectConverter
{
    public static WozObjectReply WozobjectpropertyToWozObjectsReply(Wozobjectproperty property) => new WozObjectReply
    {
        Wozobjectnummer = property.Wozobjectnummer,
        Gemeentenaam = "Test", //Add foreign key to gemeente?
        Straatnaam = property.Straatnaam,
        Huisnummer = (int)(property.Huisnummer ?? 0),
        Huisletter = property.Huisletter,
        Huisnummertoevoeging = property.Huisnummertoevoeging,
        Postcode = property.Postcode,
        Soortobjectcode = property.Soortobjectcode,
        Lat = property.WozObject.Geometry != null ? property.WozObject.Geometry.Y : 0,
        Lon = property.WozObject.Geometry != null ? property.WozObject.Geometry.X : 0,
        ImageData = property.WozObject.Images.Count > 0 ? WozObjectImageConverter.ImageToByteString(property.WozObject.Images.FirstOrDefault()) : null
    };

    public static FullWozObjectReply WozobjectpropertyToFullWozObjectsReply(Wozobjectproperty property) => new FullWozObjectReply
    {
        Wozobjectnummer = property.Wozobjectnummer,
        Gemeentenaam = "Test", //Add foreign key to gemeente?
        Straatnaam = property.Straatnaam,
        Huisnummer = (int)(property.Huisnummer ?? 0),
        Huisletter = property.Huisletter,
        Huisnummertoevoeging = property.Huisnummertoevoeging,
        Postcode = property.Postcode,
        Soortobjectcode = property.Soortobjectcode,
        Wijkcode = property.Wijkcode,
        Buurtcode = property.Buurtcode,
        Woonplaats = property.Woonplaatsnaam,
        Locatieomschrijving = property.Locatieomschrijving,
        Indicatieligging = property.Indicatieligging,
        Omschrijving = property.Omschrijving,
        Lat = property.WozObject.Geometry.Y,
        Lon = property.WozObject.Geometry.X,
    };

    public static FullWozObjectReply WozobjectpropertyToFullWozObjectsReply(FreezeWozobjectProperty property, Wozobject wozobject) => new FullWozObjectReply
    {
        Wozobjectnummer = wozobject.Wozobjectnummer,
        Gemeentenaam = "Test", //Add foreign key to gemeente?
        Straatnaam = property.Straatnaam,
        Huisnummer = (int)(property.Huisnummer ?? 0),
        Huisletter = property.Huisletter,
        Huisnummertoevoeging = property.Huisnummertoevoeging,
        Postcode = property.Postcode,
        Soortobjectcode = property.Soortobjectcode,
        Wijkcode = property.Wijkcode,
        Buurtcode = property.Buurtcode,
        Woonplaats = property.Woonplaatsnaam,
        Locatieomschrijving = property.Locatieomschrijving,
        Indicatieligging = property.Indicatieligging,
        Omschrijving = property.Omschrijving,
        Lat = wozobject.Geometry.Y,
        Lon = wozobject.Geometry.X,
    };

    public static Wozobjectproperty FullWozObjectsReplyToWozobjectproperty(FullWozObjectReply fullWozObject, DataContext dbContext)
    {
        var wozobject = dbContext.Wozobjectproperties.Where(w => w.Wozobjectnummer == fullWozObject.Wozobjectnummer)
           .Where(p => DateTime.UtcNow >= p.Startdate && DateTime.UtcNow <= p.Enddate).FirstOrDefault();

        if (wozobject != null)
        {
            wozobject.Straatnaam = fullWozObject.Straatnaam;
            wozobject.Huisnummer = fullWozObject.Huisnummer;
            wozobject.Huisletter = fullWozObject.Huisletter;
            wozobject.Huisnummertoevoeging = fullWozObject.Huisnummertoevoeging;
            wozobject.Postcode = fullWozObject.Postcode;
            wozobject.Soortobjectcode = fullWozObject.Soortobjectcode;
            wozobject.Wijkcode = fullWozObject.Wijkcode;
            wozobject.Buurtcode = fullWozObject.Buurtcode;
            wozobject.Woonplaatsnaam = fullWozObject.Woonplaats;
            wozobject.Locatieomschrijving = fullWozObject.Locatieomschrijving;
            wozobject.Indicatieligging = fullWozObject.Indicatieligging;
            wozobject.Omschrijving = fullWozObject.Omschrijving;
            return wozobject;
        }
        else
        {
            return new Wozobjectproperty
            {
                Wozobjectnummer = fullWozObject.Wozobjectnummer,
                Straatnaam = fullWozObject.Straatnaam,
                Huisnummer = fullWozObject.Huisnummer,
                Huisletter = fullWozObject.Huisletter,
                Huisnummertoevoeging = fullWozObject.Huisnummertoevoeging,
                Postcode = fullWozObject.Postcode,
                Soortobjectcode = fullWozObject.Soortobjectcode,
                Wijkcode = fullWozObject.Wijkcode,
                Buurtcode = fullWozObject.Buurtcode,
                Woonplaatsnaam = fullWozObject.Woonplaats,
                Locatieomschrijving = fullWozObject.Locatieomschrijving,
                Indicatieligging = fullWozObject.Indicatieligging,
                Omschrijving = fullWozObject.Omschrijving
            };
        }
    }
}

