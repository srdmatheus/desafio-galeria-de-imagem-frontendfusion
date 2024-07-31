import { ImageList } from "../../components/image-list";
import { useFavoriteStore } from "../../store/favorites-store";

export const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <main className="container mx-auto">
      <h1 className="pb-6 pt-10 text-2xl font-bold tracking-tight">
        Favoritos
      </h1>
      <div>
        {favorites.length ? (
          <ImageList images={favorites} />
        ) : (
          <p>Você não adicionou nenhuma imagem favorita.</p>
        )}
      </div>
    </main>
  );
};
