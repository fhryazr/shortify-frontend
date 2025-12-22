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
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

const RegisterCard = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace("/dashboard");
    }
  }, [session, router]);

  return (
    <Card className="w-80 md:w-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
        <CardDescription>
          Start shortening and tracking your links today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        <div className="text-sm text-center w-full">
          Already have and account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
