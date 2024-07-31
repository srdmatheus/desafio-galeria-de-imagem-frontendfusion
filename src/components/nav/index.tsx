import { Link } from "react-router-dom";
import { useFavoriteStore } from "../../store/favorites-store";

export const Nav = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  const totalFavorites = favorites.length;

  return (
    <nav>
      <ul className="flex items-center gap-8">
        <li className="font-semibold text-violet-700 hover:text-violet-800 hover:underline">
          <Link to="/">Início</Link>
        </li>
        <li className="font-semibold text-violet-700 hover:text-violet-800 hover:underline">
          <Link to="/favoritos">Favoritos ({totalFavorites})</Link>
        </li>
      </ul>
    </nav>
  );
};
