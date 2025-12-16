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
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import LoginForm from "./LoginForm";
import SocialMediaAuthButton from "./SocialMediaAuthButton";

const LoginCard = () => {
  return (
    <Card className="w-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Sign In to your account
        </CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" type="submit" form="login-form">
          Sign In
        </Button>
        <div className="flex items-center w-full gap-2 my-4 text-muted-foreground">
          <Separator className="flex-1" />
          <p className="text-xs">Or continue with</p>
          <Separator className="flex-1" />
        </div>
        <SocialMediaAuthButton />
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

export default LoginCard;
