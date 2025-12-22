"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

const LoginCard = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace("/dashboard");
    }
  }, [session, router]);

  return (
    <Card className="w-80 lg:w-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Sign In to your account
        </CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Create account
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
