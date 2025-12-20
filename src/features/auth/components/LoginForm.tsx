import FormField from "./FormField";
import { LockIcon, MailIcon } from "lucide-react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import SocialMediaAuthButton from "./SocialMediaAuthButton";
import { Separator } from "@/components/ui/separator";

const LoginForm = () => {
  const { form, isLoading } = useLoginForm();

  return (
    <form
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-2">
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
      <Button
        className="w-full"
        type="submit"
        form="login-form"
        disabled={isLoading}>
        Sign In {isLoading ? <Spinner /> : null}
      </Button>
      {/* <div className="flex items-center w-full gap-2 my-4 text-muted-foreground">
        <Separator className="flex-1" />
        <p className="text-xs">Or continue with</p>
        <Separator className="flex-1" />
      </div> */}
      {/* <SocialMediaAuthButton /> */}
    </form>
  );
};

export default LoginForm;
