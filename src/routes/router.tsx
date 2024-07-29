import { createBrowserRouter, RouteObject } from "react-router-dom";
import { HomePage } from "../pages/home";
import { FavoritesPage } from "../pages/favorites";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/favoritos",
    element: <FavoritesPage />
  }
];

export const router = createBrowserRouter(routes);
