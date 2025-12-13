import { axiosInstance } from "@/lib/axios"
import { MutationConfig, queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// api call
export const deleteShortenLink = async (shortCode: string) => {
  const response = await axiosInstance.delete(`/links/${shortCode}`);
  return response.data;
}

// custom-hooks params type
type UseDeleteShortenLinkParams = {
  mutationConfig?: MutationConfig<typeof deleteShortenLink>;
} 

// custom-hooks
export const useDeleteShortenLink = (params?: UseDeleteShortenLinkParams) => {
  return useMutation({
    ...params?.mutationConfig,
    mutationFn: deleteShortenLink,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({
        queryKey: ["links"],
      })
      params?.mutationConfig?.onSuccess?.(data, variables, onMutateResult, context);
      toast.success("Short link deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete short link");
    }
  })
}