import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RoutesApp } from "../routes";

const queryClient = new QueryClient();

export const Providers = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoutesApp />
      </QueryClientProvider>
    </>
  );
};
