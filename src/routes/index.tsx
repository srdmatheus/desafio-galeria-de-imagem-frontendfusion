import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { FavoritesPage } from "../pages/favorites";
import { AppLayout } from "../layouts/app";

export const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="favoritos" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
