namespace gRPCServer.Converters
{
    public static class WozSubobjectConverter
    {
        public static WozSubObjectReply WozdeelobjectToWozSubobjectReply(Wozdeelobject subobject)
        {
            var properties = subobject.Wozdeelobjectproperties.Where(d => DateTime.Now >= d.Startdate && DateTime.Now <= d.Enddate).FirstOrDefault();
            var reply = new WozSubObjectReply();
            reply.Id = (int)subobject.Id;
            reply.Nummerwozdeelobject = (int)subobject.Nummerwozdeelobject;
            if(properties != null)
            {
                reply.Codewozdeelobject = properties.Codewozdeelobject;
                reply.Bouwjaar = (int)(properties.Bouwjaar ?? 0);
                reply.Kwaliteit = properties.Kwaliteit;
                reply.Onderhoud = properties.Onderhoudstoestand;
                reply.Uitstraling = properties.Uitstraling;
                reply.Doelmatigheid = properties.Doelmatigheid;
                reply.Voorzieningen = properties.Voorzieningen;
                reply.Oppervlakte = (int)(properties.Oppervlakte ?? 0);
                reply.Aantalstuks = (int)(properties.Aantalstuks ?? 0);
                reply.Bagidentificatie = properties.Bagidentificatie;
            }
            return reply;
        }
    }
}
