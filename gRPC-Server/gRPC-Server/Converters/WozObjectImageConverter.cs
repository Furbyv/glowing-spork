using ImageMagick;

namespace gRPCServer.Converters;
public static class WozObjectImageConverter
{
    public static ByteString ImageToByteString(Image image)
    {
        using var str = new MemoryStream(image.Imagedata);
        return ByteString.FromStream(str);
    }

    public static WozObjectImageReply ImageToImageReply(Image image)
    {
        return new WozObjectImageReply { ImageData = ImageToByteString(image), IsMain = image.Main };
    }

    public static Image UploadImageRequestToImage(UploadImageRequest request)
    {
        using (MagickImage image = new MagickImage(request.ImageData.ToByteArray()))
        {
            image.Format = MagickFormat.Jpeg;
            image.Quality = 75;
            image.Quality = 10;

            return new Image()
            {
                Main = request.IsMain,
                Wozobjectnummer = request.Wozobjectnummer,
                //Compress image
                Imagedata = image.ToByteArray()
            };
        };
    }
}
