namespace gRPCServer
{
    public static class FilterRequestHelper
    {
        public static IQueryable<T> FilterFromRequest<T>(FilterRequest request, IQueryable<T> query) where T : OverviewBase
        {
            if (request.Gemeentecodes != null && request.Gemeentecodes.Count > 0)
            {
                query = query.Where(t => request.Gemeentecodes.Contains(t.Gemeentecode));
            }
            if (request.Woonplaatsen != null && request.Woonplaatsen.Count > 0)
            {
                query = query.Where(t => request.Woonplaatsen.Contains(t.Woonplaatsnaam));
            }
            if (request.Straatnamen != null && request.Straatnamen.Count > 0)
            {
                query = query.Where(t => request.Straatnamen.Contains(t.Straatnaam));
            }
            if (request.Soortgroepids != null && request.Soortgroepids.Count > 0)
            {
                //overviewQuery = overviewQuery.Where(t=>request.Soortgroepids.Contains(t.SoortObjectGroepid))
            }
            if (request.Soortobjectcodes != null && request.Soortobjectcodes.Count > 0)
            {
                query = query.Where(t => request.Soortobjectcodes.Contains(t.Soortobjectcode));
            }
            if (request.Buurtcodes != null && request.Buurtcodes.Count > 0)
            {
                query = query.Where(t => request.Buurtcodes.Contains(t.Buurtcode));
            }
            if (request.Wijkcodes != null && request.Wijkcodes.Count > 0)
            {
                query = query.Where(t => request.Wijkcodes.Contains(t.Wijkcode));
            }

            return query;
        }
    }
}
