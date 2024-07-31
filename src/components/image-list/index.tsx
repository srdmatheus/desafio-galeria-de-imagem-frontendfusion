import { ImageModel } from "../../models/images";
import { ImageCard } from "../image-card";

export const ImageList = ({ images }: { images: ImageModel[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images?.map((image) => <ImageCard key={image.id} data={image} />)}
    </div>
  );
};
