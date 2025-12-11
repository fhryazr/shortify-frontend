import { ShortenLink } from "@/features/shorten-link/types/type";
import { axiosInstance } from "@/lib/axios";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getShortenLinks = async () => {
  const response = await axiosInstance.get<ShortenLink[]>("/links");
  return response.data
}

export const getShortenLinksQueryKey = () => ["links"];

export const getShortenLinksQueryOptions = () => {
  return queryOptions({
    queryKey: getShortenLinksQueryKey(),
    queryFn: getShortenLinks,
  });
}

// custom-hooks
export const useGetShortenLinks = () => {
  return useQuery({
    ...getShortenLinksQueryOptions(),
  })
}
