"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type ProtectedProps = {
  children: ReactNode;
  redirectTo?: string;
};

const Protected = ({ children, redirectTo = "/login" }: ProtectedProps) => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !isPending) {
      router.replace(redirectTo);
    }
  }, [session, isPending, router, redirectTo]);

  if (!session) {
    return null;
  }

  return <>{children}</>;
};

export default Protected;
