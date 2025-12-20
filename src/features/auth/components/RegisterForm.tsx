"use client";

import FormField from "./FormField";
import { LockIcon, MailIcon, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { Spinner } from "@/components/ui/spinner";

const RegisterForm = () => {
  const { form, isLoading, handleSubmit } = useRegisterForm();

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
      <Button
        type="submit"
        form="register-form"
        className="w-full"
        disabled={isLoading}>
        Create Account {isLoading ? <Spinner /> : null}
      </Button>
    </form>
  );
};

export default RegisterForm;
