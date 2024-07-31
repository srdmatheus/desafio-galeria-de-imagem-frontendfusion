import { create } from "zustand";
import { ImageModel } from "../models/images";

type Store = {
  favorites: ImageModel[];
  addFavorite: (newFavorite: ImageModel) => void;
  removeFavorite: (id: string) => void;
};

export const useFavoriteStore = create<Store>((set) => ({
  favorites: [],
  addFavorite: (newFavorite) =>
    set((state) => ({ favorites: [...state.favorites, newFavorite] })),
  removeFavorite: (id: string) =>
    set((state) => ({
      favorites: state.favorites.filter((image) => image.id !== id)
    }))
}));
