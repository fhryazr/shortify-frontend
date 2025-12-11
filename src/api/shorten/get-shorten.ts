import { ShortenLink } from "@/features/shorten-link/types/type";
import { axiosInstance } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

// api call
export const getShortenLinks = async (sort?: string) => {
  const response = await axiosInstance.get<ShortenLink[]>('/links', {
    params: { sort },
  });
  return response.data;
};

// query keys
export const getShortenLinksQueryKey = (sort?: string) => ["links", sort];

// query options
export const getShortenLinksQueryOptions = (sort?: string) => {
  return queryOptions({
    queryKey: getShortenLinksQueryKey(sort),
    queryFn: () => getShortenLinks(sort),
  });
};

type UseGetShortenLinksParams = {
  sort?: string;
  queryConfig?: QueryConfig<typeof getShortenLinksQueryOptions>;
}

// custom-hooks
export const useGetShortenLinks = (params?: UseGetShortenLinksParams) => {
  return useQuery({
    ...getShortenLinksQueryOptions(params?.sort),
    ...params?.queryConfig,
  });
};
