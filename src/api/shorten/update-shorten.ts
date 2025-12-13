import { axiosInstance } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type UpdateShortenLinkParams = {
  id: string;
  url: string;
};

// api call
export const updateShortenLink = async ({ id, url }: UpdateShortenLinkParams) => {
  const response = await axiosInstance.patch(`/links/${id}`, { url });
  return response.data;
};

// custom-hooks params type
type UseUpdateShortenLinkParams = {
  mutationConfig?: MutationConfig<typeof updateShortenLink>;
};

// custom-hooks
export const useUpdateShortenLink = (params?: UseUpdateShortenLinkParams) => {
  return useMutation({
    ...params?.mutationConfig,
    mutationFn: updateShortenLink,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({
        queryKey: ["links"],
      });
      params?.mutationConfig?.onSuccess?.(data, variables, onMutateResult, context);
      toast.success("Short link updated successfully!");
    },
    onError: () => {
      toast.error("Failed to update short link");
    },
  });
};

