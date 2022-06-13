using gRPCServer.Modules.Notes.Converters;

namespace gRPCServer.Modules.Notes;

public class NotesEndpoint : Protos.Notes.NotesBase
{
    private readonly ILogger<NotesEndpoint> _logger;
    readonly DataContext _dbContext;
    public NotesEndpoint(ILogger<NotesEndpoint> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public async override Task<AddOrEditNotesReply> AddNotes(AddNotesRequest request, ServerCallContext context)
    {
        var model = NotesConverter.ToModel(request.Note, _dbContext);
        await _dbContext.AddAsync(model, context.CancellationToken);
        var success = await _dbContext.SaveChangesAsync(context.CancellationToken);
        var reply = new AddOrEditNotesReply();
        reply.Succes = success > 0;
        return reply;
    }

    public async override Task<AddOrEditNotesReply> EditNote(EditNoteRequest request, ServerCallContext context)
    {
        var model = NotesConverter.ToModel(request.EditNote, _dbContext);
        var success = await _dbContext.SaveChangesAsync(context.CancellationToken);
        var reply = new AddOrEditNotesReply();
        reply.Succes = success > 0;
        return reply;
    }

    public async override Task<NoteReply> GetNotes(GetNotesRequest request, ServerCallContext context)
    {
        var notes = await _dbContext.Notes.Include(n => n.User).Where(n => n.Wozobjectnummer == request.Wozobjectnummer).Select(n => NotesConverter.ToRecord(n)).ToArrayAsync(
            context.CancellationToken);
        var reply = new NoteReply();
        reply.Notes.AddRange(notes);
        return reply;
    }
}

