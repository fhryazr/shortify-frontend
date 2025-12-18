import { Button } from "@/components/ui/button";
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

const RegisterCard = () => {
  return (
    <Card className="w-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
        <CardDescription>
          Start shortening and tracking your links today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button type="submit" form="register-form" className="w-full">
          Create Account
        </Button>
        <div className="text-sm">
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
