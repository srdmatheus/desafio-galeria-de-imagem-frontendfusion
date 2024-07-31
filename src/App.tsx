import { useFavoritesPersistence } from "./hooks/use-favorites-persistence";
import { Providers } from "./providers";

export const App = () => {
  useFavoritesPersistence();

  return <Providers />;
};
