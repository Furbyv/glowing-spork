
using gRPCServer.Protos;

namespace gRPCServer
{
    public static class WozObjectConverter
    {
        public static WozObjectReply WozobjectpropertyToWozObjectsReply(Wozobjectproperty property) => new WozObjectReply
        {
            Wozobjectnummer = (long)property.Wozobjectnummer,
            Gemeentenaam = "Test", //Add foreign key to gemeente?
            Straatnaam = property.Straatnaam,
            Huisnummer = (int)(property.Huisnummer ?? 0),
            Huisletter = property.Huisletter,
            Huisnummertoevoeging = property.Huisnummertoevoeging,
            Postcode = property.Postcode,
            Soortobjectcode = property.Soortobjectcode
        };
    }
}
