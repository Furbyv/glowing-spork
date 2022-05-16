namespace gRPCServer.Logic.Valuation;
public static class TaxationBuilder
{
    public static Taxation BuildNewTaxation(Wozobject wozObject, Model model) {
        var taxation = new Taxation(wozObject.Wozobjectnummer, model);
        SetFreezeObjectProperty(taxation, wozObject);
        SetFreezeDeelObjects(taxation, wozObject);
        return taxation;
    }

    private static void SetFreezeObjectProperty(Taxation taxation, Wozobject wozObject) 
    {
        var propertydate = taxation.Model.TimePeriod.PropertyDate;
        var wozobjectproperty = wozObject.Wozobjectproperties.FirstOrDefault(p => p.Startdate >= propertydate && p.Enddate <= propertydate);
        taxation.FreezeWozobjectProperty = new FreezeWozobjectProperty(taxation.Id, wozobjectproperty);
    }

    private static void SetFreezeDeelObjects(Taxation taxation, Wozobject wozObject)
    {
        var propertydate = taxation.Model.TimePeriod.PropertyDate;
        var wozDelen = wozObject.Wozdeelobjects.Where(w => w.Startdate >= propertydate && w.Enddate <= propertydate).ToList();
        wozDelen.ForEach(w =>
        {
            var wozdeelproperty = w.Wozdeelobjectproperties.FirstOrDefault(p => p.Startdate >= propertydate && p.Enddate <= propertydate);
            taxation.FreezeWozDeelobjects = new List<FreezeWozDeelobject>();
            var freezeDeelobject = new FreezeWozDeelobject(taxation.Id, w.Nummerwozdeelobject, wozdeelproperty);
            freezeDeelobject.Deelgroup = GetDeelgroup(wozdeelproperty, taxation.Model);
            taxation.FreezeWozDeelobjects.Add(freezeDeelobject);
        });
    }

    private static Deelgroup GetDeelgroup(Wozdeelobjectproperty property, Model model) => model.DeelGroups.FirstOrDefault(d => d.CodeWozDeelObject == property.Codewozdeelobject);
}
