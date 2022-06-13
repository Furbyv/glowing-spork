using gRPCServer.Modules.Transactions.Models;
using Transaction = gRPCServer.Modules.Transactions.Models.Transaction;

namespace gRPCServer.Modules.Transactions.Converters;
public static class TransactionConverter
{
    public static Protos.Transaction ModelToTransactionReply(Transaction transaction)
    {
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
}
