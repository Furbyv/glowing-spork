using gRPCServer.Modules.Taxations.Models;
using gRPCServer.Modules.ValuationModels.Models;
using Taxation = gRPCServer.Modules.Taxations.Models.Taxation;

namespace gRPCServer.Modules.ValuationModels.Logic
{
    public static class Valuator
    {
        public static void ValuateTaxation(Taxation taxation)
        {
            taxation.FreezeWozDeelobjects.ToList().ForEach(d => ValuateDeelObject(d,taxation.MarketSegment));
            taxation.TotalModelValue = taxation.FreezeWozDeelobjects.Sum(d => d.ModelValue ?? 0);
        }

        private static void ValuateDeelObject(FreezeWozDeelobject deel, MarketSegment segment)
        {
            var modelPrices = segment.DeelPrices.Where(p => p.Deelgroup.Id == deel.DeelgroupId).Select(p => (p.Percentage, p.OppervlaktePrice, p.InhoudPrice, p.AantalPrice)).FirstOrDefault();

            if(deel.Oppervlakte > 0 && modelPrices.OppervlaktePrice > 0)
            {
                deel.ModelPpe = modelPrices.OppervlaktePrice;
                deel.ModelValue = modelPrices.OppervlaktePrice * (double)(deel.Oppervlakte ?? 0);
            }
            else if(deel.Inhoud > 0 && modelPrices.InhoudPrice > 0)
            {
                deel.ModelPpe = modelPrices.InhoudPrice;
                deel.ModelValue = modelPrices.InhoudPrice * (double)(deel.Inhoud ?? 0);
            }
            else
            {
                deel.ModelPpe = modelPrices.AantalPrice ?? 0;
                deel.ModelValue = (modelPrices.AantalPrice ?? 0) * (double)(deel.Aantalstuks ?? 1);
            }
        }

    }
}
