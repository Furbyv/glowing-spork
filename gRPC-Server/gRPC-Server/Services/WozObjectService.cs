﻿namespace gRPCServer;

public class WozObjectService : WozObjects.WozObjectsBase
{
    private readonly ILogger<WozObjectService> _logger;
    readonly DataContext _dbContext;
    public WozObjectService(ILogger<WozObjectService> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
    }

    public async override Task<WozObjectsReply> GetWozObject(WozObjectRequestById request, ServerCallContext context)
    {
        var wozobjects = await _dbContext.Wozobjectproperties.Include(w => w.WozObject).Where(w => w.Wozobjectnummer.ToString()
        .Contains(request.Wozobjectnummer.ToString())).Where(p => DateTime.UtcNow >= p.Startdate && DateTime.UtcNow <= p.Enddate)
        .Select(w => WozObjectConverter.WozobjectpropertyToWozObjectsReply(w)).ToListAsync(context.CancellationToken);

        var reply = new WozObjectsReply();
        reply.Wozobjects.Add(wozobjects);

        return reply;
    }

    public async override Task<WozObjectsReply> GetWozObjects(WozObjectRequestByIds request, ServerCallContext context)
    {
        var wozobjects =await  _dbContext.Wozobjectproperties.Include(w => w.WozObject).Where(w => request.Wozobjectnummers.Contains(w.Wozobjectnummer)).Where(p => DateTime.UtcNow >= p.Startdate && DateTime.UtcNow <= p.Enddate)
        .Select(w => WozObjectConverter.WozobjectpropertyToWozObjectsReply(w)).ToListAsync(context.CancellationToken);

        var reply = new WozObjectsReply();
        reply.Wozobjects.Add(wozobjects);

        return reply;
    }

    public override async Task GetFullWozObject(WozObjectRequestById request, IServerStreamWriter<FullWozObjectReply> responseStream, ServerCallContext context)
    {
        var wozobject = _dbContext.Wozobjectproperties.Include(w => w.WozObject).Where(w => w.Wozobjectnummer == request.Wozobjectnummer)
            .Where(p => DateTime.UtcNow >= p.Startdate && DateTime.UtcNow <= p.Enddate).FirstOrDefault();

        var reply = WozObjectConverter.WozobjectpropertyToFullWozObjectsReply(wozobject);
        await responseStream.WriteAsync(reply);

        while (!context.CancellationToken.IsCancellationRequested)
        {
            {
                _dbContext.Entry(wozobject).Reload();
                var reloadedReply = WozObjectConverter.WozobjectpropertyToFullWozObjectsReply(wozobject);
                if (!reply.Equals(reloadedReply))
                {
                    await responseStream.WriteAsync(reloadedReply);
                }
            }
            Thread.Sleep(10000);
        }
        return;
    }

    public override Task<FullWozObjectSaveReply> SaveFullWozObject(FullWozObjectReply request, ServerCallContext context)
    {
        WozObjectConverter.FullWozObjectsReplyToWozobjectproperty(request, _dbContext);
        _dbContext.SaveChanges();
        var reply = new FullWozObjectSaveReply();
        reply.IsSuccess = true;
        return Task.FromResult(reply);
    }

    public override async Task GetWozObjectImages(WozObjectImageRequest request, IServerStreamWriter<WozObjectImageReply> responseStream, ServerCallContext context)
    {
        var images = _dbContext.Images.Where(w => w.Wozobjectnummer == request.Wozobjectnummer)
            .Where(w => request.OnlyMain ? w.Main == true : (w.Main == true || w.Main == false))
            .Select(i => WozObjectImageConverter.ImageToImageReply(i)).ToList();

        foreach (var image in images)
        {
            await responseStream.WriteAsync(image);
        }
        return;
    }

    public override async Task<UploadImageReply> UploadWozObjectImage(UploadImageRequest request, ServerCallContext context)
    {
        var image = WozObjectImageConverter.UploadImageRequestToImage(request);
        await _dbContext.AddAsync(image);
        return new UploadImageReply { Succes = (await _dbContext.SaveChangesAsync()) > 0 };
    }
}

