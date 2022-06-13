﻿using TransactionOverview = gRPCServer.Protos.TransactionOverview;

namespace gRPCServer.Converters
{
    public static class TransactionConverter
    {
        public static Protos.Transaction ModelToTransactionReply(Transaction transaction) {
            var wozproperty = transaction.Wozobject.Wozobjectproperties.FirstOrDefault(p => p.Startdate <= transaction.TransactieDatum && p.Enddate >= transaction.TransactieDatum);
            var reply = new Protos.Transaction();
            reply.Wozobjectnummer = transaction.Wozobjectnummer;
            reply.Transactiedatum = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(transaction.TransactieDatum.ToUniversalTime());
            reply.Transactieprijs = transaction.Transactieprijs;
            reply.Volgnummer = transaction.VolgnummerMarktgegeven;
            reply.Lat = transaction.Wozobject.Geometry != null ? transaction.Wozobject.Geometry.Y : 0;
            reply.Lon = transaction.Wozobject.Geometry != null ? transaction.Wozobject.Geometry.X : 0;
            reply.Aard = transaction.Aard;
            reply.Bruikbaarheid = transaction.Bruikbaarheid;
            reply.Huisletter = wozproperty.Huisletter;
            reply.Huisnummer = (int)wozproperty.Huisnummer;
            reply.Straatnaam = wozproperty?.Straatnaam;
            reply.Soortobjectcode = wozproperty.Soortobjectcode;
            return reply;
        }
        public static TransactionOverview ModelToOverviewReply(Modules.Overviews.Models.TransactionOverview model)
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
}
