import { ShortenLink } from "@/features/shorten-link/types/type";
import { axiosInstance } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface GetShortenLinksParams {
  sort?: string;
  limit?: number;
  search?: string;
}

// api call
export const getShortenLinks = async ({ limit, search, sort }: GetShortenLinksParams) => {
  const response = await axiosInstance.get<ShortenLink[]>('/links', {
    params: { sort, limit, search },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
    }
  });
  return response.data;
};

// query keys
export const getShortenLinksQueryKey = ({ sort, limit, search }: GetShortenLinksParams) => ["links", sort, limit, search];

// query options
export const getShortenLinksQueryOptions = ({ sort, limit, search }: GetShortenLinksParams = {}) => {
  return queryOptions({
    queryKey: getShortenLinksQueryKey({ sort, limit, search }),
    queryFn: () => getShortenLinks({ sort, limit, search }),
  });
};

interface UseGetShortenLinksParams extends GetShortenLinksParams {
  queryConfig?: QueryConfig<typeof getShortenLinksQueryOptions>;
}

// custom-hooks
export const useGetShortenLinks = (params?: UseGetShortenLinksParams) => {
  return useQuery({
    ...getShortenLinksQueryOptions(params),
    ...params?.queryConfig,
  });
};
