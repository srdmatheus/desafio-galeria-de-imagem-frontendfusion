import { useEffect } from "react";

import { ImageModel } from "../models/images";
import { useFavoriteStore } from "../store/favorites-store";

const FAVORITES_KEY = "@fusion:favorites";

export const useFavoritesPersistence = () => {
  const { favorites, addFavorite } = useFavoriteStore();

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (storedFavorites) {
      try {
        const parsedFavorites: ImageModel[] = JSON.parse(storedFavorites);
        parsedFavorites.forEach((image) => addFavorite(image));
      } catch (error) {
        console.error(error);
      }
    }
  }, [addFavorite]);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);
};
