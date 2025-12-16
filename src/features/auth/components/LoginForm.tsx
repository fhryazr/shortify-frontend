import { useForm } from "@tanstack/react-form";
import { loginZodSchema } from "../schema/login.shcema";
import { toast } from "sonner";
import FormField from "./FormField";
import { LockIcon, MailIcon } from "lucide-react";

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
    // alert(`Email: ${email}\nPassword: ${password}`);
    // Handle form submission logic here
  };

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginZodSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success("Login successful!");
      console.log(value);
    },
  });

  return (
    <form id="login-form" onSubmit={handleSubmit} className="space-y-4">
      <form.Field
        name="email"
        children={(field) => (
          <FormField
            field={field}
            label="Email address"
            type="email"
            value={field.state.value}
            placeholder="Enter your email"
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
            onChange={(e) => field.handleChange(e.target.value)}
            icon={<LockIcon />}
          />
        )}
      />
    </form>
  );
};

export default LoginForm;
