import { ImageModel } from "../models/images";
import { useFavoriteStore } from "../store/favorites-store";

export const useImageFavorite = (image: ImageModel) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();

  const isFavorite = favorites.some((favorite) => favorite.id === image.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  return { isFavorite, toggleFavorite };
};
