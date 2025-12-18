"use client";

import { toast } from "sonner";
import { registerZodSchema } from "../schema/register.schema";
import { useForm } from "@tanstack/react-form";
import FormField from "./FormField";
import { LockIcon, MailIcon, User2Icon } from "lucide-react";

const RegisterForm = () => {
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
      toast.success("Registration successful!");
      console.log(value);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <form id="register-form" onSubmit={handleSubmit} className="space-y-2">
      <form.Field
        name="fullname"
        children={(field) => (
          <FormField
            field={field}
            label="Full Name"
            type="text"
            value={field.state.value}
            placeholder="Enter your full name"
            description=""
            onChange={(e) => field.handleChange(e.target.value)}
            icon={<User2Icon />}
          />
        )}
      />
      <form.Field
        name="email"
        children={(field) => (
          <FormField
            field={field}
            label="Email"
            type="email"
            value={field.state.value}
            placeholder="Enter your email"
            description=""
            onChange={(e) => field.handleChange(e.target.value)}
            icon={<MailIcon />}
          />
        )}
      />
      <form.Field
        name="password"
        children={(field) => (
          <FormField
            field={field}
            label="Password"
            type="password"
            value={field.state.value}
            placeholder="Enter your password"
            description=""
            onChange={(e) => field.handleChange(e.target.value)}
            icon={<LockIcon />}
          />
        )}
      />
    </form>
  );
};

export default RegisterForm;
