import { ImageModel } from "../../models/images";
import { FavoriteButton } from "../favorite-button";

type ImageDetailsProps = {
  data: ImageModel;
};

export const ImageDetails = ({ data }: ImageDetailsProps) => {
  const { author, download_url, width, height, url } = data;

  return (
    <div className="flex h-full">
      <div className="h-full w-fit overflow-hidden">
        <img
          src={download_url}
          alt=""
          className="h-full min-w-[600px] object-contain"
        />
      </div>
      <div className="min-w-80 px-2 pt-10 text-gray-600">
        <p className="pb-1 text-xs uppercase">Autor:</p>
        <p className="text-sm tracking-tight">{author}</p>

        <hr className="my-4" />

        <p className="pb-1 text-xs uppercase">Dimensões: </p>
        <p className="text-sm tracking-tight">Largura: {width}px</p>
        <p className="text-sm tracking-tight">Altura: {height}px</p>

        <hr className="my-4" />

        <p className="pb-1 text-xs uppercase">Links</p>
        <a
          href={url}
          target="_blank"
          className="inline-block text-sm tracking-tight text-violet-600 underline hover:opacity-80"
        >
          Origem
        </a>

        <hr className="my-4" />
        <p className="pb-1 text-xs uppercase">Ações</p>

        <FavoriteButton data={data} className="w-20" />
      </div>
    </div>
  );
};
