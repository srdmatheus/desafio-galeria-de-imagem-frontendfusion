import { Heart } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";
import { ImageModel } from "../../models/images";
import { ComponentProps } from "react";
import { useImageFavorite } from "../../hooks/use-image-favorite";

type FavoriteButton = ComponentProps<"button"> & {
  data: ImageModel;
};

export const FavoriteButton = ({
  data,
  className,
  ...props
}: FavoriteButton) => {
  const { isFavorite, toggleFavorite } = useImageFavorite(data);

  return (
    <button
      onClick={toggleFavorite}
      className={cn(
        "z-10 flex h-8 w-11 items-center justify-center rounded-lg bg-gray-200 text-gray-400 shadow transition-all hover:text-gray-800",
        className
      )}
      {...props}
      title="Adicionar ou remover favorito"
    >
      <span className="sr-only">Adicionar ou remover favorito</span>
      <Heart
        size={16}
        weight="fill"
        className={cn("transition-all", isFavorite && "text-violet-600")}
      />
    </button>
  );
};
