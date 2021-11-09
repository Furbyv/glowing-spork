namespace gRPCServer.Converters;
public static class WozObjectImageConverter
{
    public static WozObjectImageReply ImageToImageReply(Image image)
    {
        using var str = new MemoryStream(image.Imagedata);
        var bytestring = ByteString.FromStream(str);
        return new WozObjectImageReply { ImageData = bytestring, IsMain = image.Main };
    }

    public static Image UploadImageRequestToImage(UploadImageRequest request) => new Image()
    {
        Main = request.IsMain,
        Wozobjectnummer = request.Wozobjectnummer,
        Imagedata = request.ImageData.ToByteArray()
    };
}
