using gRPCServer.Extensions;
using gRPCServer.Modules.Taxations.Models;
using gRPCServer.Modules.ValuationModels.Logic;
using gRPCServer.Modules.ValuationModels.Models;
using gRPCServer.Modules.WozObjects.Models;
using Taxation = gRPCServer.Modules.Taxations.Models.Taxation;

namespace gRPCServer.Logic.Valuation;
public static class TaxationBuilder
{
    public async static Task<Taxation> BuildNewTaxation(DataContext dbContext,Wozobject wozObject, Model model) {
        var taxation = new Taxation(wozObject.Wozobjectnummer, model);
        taxation.Wozobject = wozObject;
        taxation.TimePeriod = model.TimePeriod;
        taxation.TaxCode = "HER";
        SetFreezeObjectProperty(taxation, wozObject);
        SetFreezeDeelObjects(taxation, wozObject);
        taxation.MarketSegment = GetMarketSegment(model,await GetWaardeGebied(dbContext, taxation.FreezeWozobjectProperty),
            await GetObjectGroupDefinition(dbContext, taxation.FreezeWozobjectProperty));
        Valuator.ValuateTaxation(taxation);
        return taxation;
    }

    private static void SetFreezeObjectProperty(Taxation taxation, Wozobject wozObject) 
    {
        var propertydate = taxation.Model.TimePeriod.PropertyDate.SetKindUtc();
        var wozobjectproperty = wozObject.Wozobjectproperties.FirstOrDefault(p => p.Startdate <= propertydate && p.Enddate >= propertydate);
        taxation.FreezeWozobjectProperty = new FreezeWozobjectProperty(taxation.Id, wozobjectproperty);
    }

    private static void SetFreezeDeelObjects(Taxation taxation, Wozobject wozObject)
    {
        var propertydate = taxation.Model.TimePeriod.PropertyDate.SetKindUtc();
        var wozDelen = wozObject.Wozdeelobjects.Where(w => w.Startdate <= propertydate && w.Enddate >= propertydate).ToList();
        taxation.FreezeWozDeelobjects = new List<FreezeWozDeelobject>();
        wozDelen.ForEach(w =>
        {
            var wozdeelproperty = w.Wozdeelobjectproperties.FirstOrDefault(p => p.Startdate <= propertydate && p.Enddate >= propertydate);
            var freezeDeelobject = new FreezeWozDeelobject(taxation.Id, w.Nummerwozdeelobject, wozdeelproperty);
            freezeDeelobject.Deelgroup = GetDeelgroup(wozdeelproperty, taxation.Model);
            taxation.FreezeWozDeelobjects.Add(freezeDeelobject);
        });
    }

    private async static Task<ObjectGroupDefinition> GetObjectGroupDefinition(DataContext dbContext, FreezeWozobjectProperty property) =>
        await dbContext.ObjectGroups.Where(o => o.CodeWozObject == property.Soortobjectcode).Include(o => o.ObjectGroupDefinition).Select(o => o.ObjectGroupDefinition).FirstOrDefaultAsync();

    private async static Task<WaardeGebied> GetWaardeGebied(DataContext dbContext, FreezeWozobjectProperty property) =>
        await dbContext.GebiedGroups.Where(g => g.WaardeGebied == property.Waardegebied).Include(g => g.WaardeGebiedObject).Select(o => o.WaardeGebiedObject).FirstOrDefaultAsync();

    private static MarketSegment GetMarketSegment(Model model, WaardeGebied waardegebied, ObjectGroupDefinition objectGroup)
        => model.MarketSegments.Where(m => m.ObjectGroupDefinitionId == objectGroup.Id).Where(w => w.WaardeGebiedId == waardegebied.Id).FirstOrDefault();

    private static Deelgroup GetDeelgroup(Wozdeelobjectproperty property, Model model) => model.DeelGroups.FirstOrDefault(d => d.CodeWozDeelObject == property.Codewozdeelobject);
}