import { useForm } from "@tanstack/react-form";
import { authClient, getErrorMessage } from "@/lib/auth-client";
import { toast } from "sonner";
import { FormEvent, useState } from "react";
import { registerZodSchema } from "../schema/register.schema";

export const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
  };

  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: registerZodSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        setIsLoading(true);
        const { data: authResponseData, error } = await authClient.signUp.email(
          {
            name: value.fullname,
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

        return toast.success("Register successfully!");
      } catch (error) {
        toast.error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return { form, isLoading, handleSubmit };
};
