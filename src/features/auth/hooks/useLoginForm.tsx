import { useForm } from "@tanstack/react-form";
import { loginZodSchema } from "../schema/login.shcema";
import { authClient, getErrorMessage } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginZodSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        setIsLoading(true);
        const { data: authResponseData, error } = await authClient.signIn.email(
          {
            email: value.email,
            password: value.password,
          }
        );

        if (error?.code) {
          toast.error(
            getErrorMessage(error.code, "en") ||
              "An error occurred during login"
          );
          return;
        }

        if (authResponseData?.token) {
          localStorage.setItem("authToken", authResponseData.token);
        }

        return toast.success("Login successful!");
      } catch (error) {
        toast.error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return { form, isLoading };
};
