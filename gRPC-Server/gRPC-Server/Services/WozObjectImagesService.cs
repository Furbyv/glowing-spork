namespace gRPCServer.Services;
public class WozObjectImagesService : WozObjects.WozObjectsBase
{
    private readonly ILogger<WozObjectImagesService> _logger;
    readonly DataContext _dbContext;
    public WozObjectImagesService(ILogger<WozObjectImagesService> logger, DataContext dbContext)
    {
        _dbContext = dbContext;
        _logger = logger;
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