"use client";

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

type QueryProvidersProps = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: QueryProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
