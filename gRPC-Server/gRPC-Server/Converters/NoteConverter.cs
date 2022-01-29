namespace gRPCServer.Converters;
public static class NoteConverter
{
    public static Notes ToModel(NoteRecord record, DataContext context)
    {
        var model = context.Notes.FirstOrDefault(n => n.Id == record.Id) ?? new Notes();
        model.Wozobjectnummer = record.Wozobjectnummer;
        model.UserId = record.Userid;
        model.Note = record.NoteText;
        return model;
    }

    public static NoteRecord ToRecord(Notes model)
    {
        var record = new NoteRecord();
        record.Id =model.Id;
        record.User = model.User.Fullname;
        record.Userid = model.UserId;
        record.Wozobjectnummer = model.Wozobjectnummer;
        record.NoteText = model.Note;
        return record;  
    }
}

