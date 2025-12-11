import { ShortenLink } from "@/features/shorten-link/types/type";
import { axiosInstance } from "@/lib/axios";
import { queryOptions, useQuery } from "@tanstack/react-query";

// api call
export const getShortenLinks = async (sort?: string) => {
  const response = await axiosInstance.get<ShortenLink[]>(`/links${sort ? `?sort=${sort}` : ""}`);
  return response.data;
};

// query keys
export const getShortenLinksQueryKey = (sort?: string) => ["links", sort ?? ""];

// query options
export const getShortenLinksQueryOptions = (sort?: string) => {
  return queryOptions({
    queryKey: getShortenLinksQueryKey(sort),
    queryFn: () => getShortenLinks(sort),
  });
};

// custom-hooks
export const useGetShortenLinks = (sort?: string) => {
  return useQuery({
    ...getShortenLinksQueryOptions(sort),
  });
};
