"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { LockIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { useForm } from "@tanstack/react-form";
import { loginZodSchema } from "../schema/login.shcema";
import { toast } from "sonner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
    alert(`Email: ${email}\nPassword: ${password}`);
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
    <Card className="w-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Sign In to your account
        </CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form id="login-form" onSubmit={handleSubmit}>
          <FieldGroup>
            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                    <InputGroup className="rounded-lg h-10 mb-4">
                      <InputGroupInput
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <InputGroupAddon>
                        <MailIcon />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </FieldGroup>
          <FieldGroup>
            <form.Field name="password">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <InputGroup className="rounded-lg h-10">
                      <InputGroupInput
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputGroupAddon>
                        <LockIcon />
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" type="submit">
          Sign In
        </Button>
        <div className="flex items-center w-full gap-2 my-4 text-muted-foreground">
          <Separator className="flex-1" />
          <p className="text-xs">Or continue with</p>
          <Separator className="flex-1" />
        </div>
        <div className="flex flex-row w-full gap-2 mb-8">
          <Button variant="outline" className="flex-1">
            <SiGoogle /> Google
          </Button>
          <Button variant="outline" className="flex-1">
            <SiGithub /> Github
          </Button>
        </div>
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Create account
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
