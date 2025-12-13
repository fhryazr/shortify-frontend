import { axiosInstance } from "@/lib/axios";
import { queryOptions, useQuery } from "@tanstack/react-query";

type RedirectResponse = {
  url: string;
  shortCode: string;
};

type RedirectParams = {
  shortCode: string;
};

// API call
export const getRedirectUrl = async ({ shortCode }: RedirectParams) => {
  const response = await axiosInstance.get<RedirectResponse>(`/${shortCode}`);
  return response.data;
};

// Query options
export const getRedirectUrlQueryOptions = ({ shortCode }: RedirectParams) => {
  return queryOptions({
    queryKey: ["redirect", shortCode],
    queryFn: () => getRedirectUrl({ shortCode }),
    staleTime: 0, // Always fresh
    retry: false, // Jangan retry jika 404
    enabled: !!shortCode,
  });
};

// Hook
export const useGetRedirectUrl = (params: RedirectParams) => {
  return useQuery(getRedirectUrlQueryOptions(params));
};