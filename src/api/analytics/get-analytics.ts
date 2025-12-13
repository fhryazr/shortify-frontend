import { axiosInstance } from "@/lib/axios"
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getAnalyticsOverview = async () => {
  const response = await axiosInstance.get("/analytics/overview");
  return response.data;
}

export const getAnalyticsOverviewQueryKey = () => ["analytics", "overview"];

export const getAnalyticsOverviewQueryOptions = () => {
  return queryOptions({
    queryKey: getAnalyticsOverviewQueryKey(),
    queryFn: getAnalyticsOverview,
  });
}

type UseGetAnalyticsOverviewParams = {
  queryConfig?: QueryConfig<typeof getAnalyticsOverviewQueryOptions>;
}

export const useGetAnalyticsOverview = (params?: UseGetAnalyticsOverviewParams) => {
  return useQuery({
    ...getAnalyticsOverviewQueryOptions(),
    ...params?.queryConfig,
  });
}