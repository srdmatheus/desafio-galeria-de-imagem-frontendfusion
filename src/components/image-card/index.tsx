import { ImageModel } from "../../models/images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "../dialog";
import { ImageDetails } from "./image-details";
import { Image } from "../image";
import { FavoriteButton } from "../favorite-button";

type ImageCardProps = {
  data: ImageModel;
};

export const ImageCard = ({ data }: ImageCardProps) => {
  const { download_url, author, width, height } = data;

  const aspectRatio = height / width;

  return (
    <div className="group relative w-full overflow-hidden rounded-lg border shadow-md">
      <div
        className="relative w-full"
        style={{ paddingBottom: `${aspectRatio * 100}%` }}
      >
        <div className="absolute inset-0">
          <FavoriteButton
            data={data}
            className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute bottom-2 left-2 z-10 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            {author}
          </span>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Dialog>
            <DialogTrigger className="block h-full w-full">
              <Image
                src={download_url}
                className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogDescription className="sr-only">
                Imagem capturada pelo(a) autor(a) {author}
              </DialogDescription>
              <DialogTitle className="sr-only">
                Imagem em tela expandida
              </DialogTitle>

              <ImageDetails data={data} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
