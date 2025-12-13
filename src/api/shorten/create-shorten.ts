import { axiosInstance } from "@/lib/axios"
import { MutationConfig, queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";

export type ShortenRequest = {
  url: string,
}

export const createShortenLink = async (url: ShortenRequest) => {
  const response = await axiosInstance.post("/links", url)
  return response.data;
}

type UseCreateShortenLinkParams = {
  mutationConfig?: MutationConfig<typeof createShortenLink>;
}

export const useCreateShortenLink = (params: UseCreateShortenLinkParams) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: createShortenLink,
    onSuccess: (data, Variable, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      params.mutationConfig?.onSuccess?.(
        data,
        Variable,
        onMutateResult,
        context
      )
    }
  })

}

