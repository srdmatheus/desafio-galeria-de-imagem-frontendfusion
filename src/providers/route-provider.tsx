import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
