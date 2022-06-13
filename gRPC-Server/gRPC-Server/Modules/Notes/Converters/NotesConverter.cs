namespace gRPCServer.Modules.Notes.Converters;
public static class NotesConverter
{
    public static Models.Notes ToModel(NoteRecord record, DataContext context)
    {
        var model = context.Notes.FirstOrDefault(n => n.Id == record.Id) ?? new Models.Notes();
        model.Wozobjectnummer = record.Wozobjectnummer;
        model.UserId = record.Userid;
        model.Note = record.NoteText;
        return model;
    }

    public static NoteRecord ToRecord(Models.Notes model)
    {
        var record = new NoteRecord();
        record.Id = model.Id;
        record.User = model.User.Fullname;
        record.Userid = model.UserId;
        record.Wozobjectnummer = model.Wozobjectnummer;
        record.NoteText = model.Note;
        return record;
    }
}

