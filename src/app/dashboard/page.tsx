"use client";

import DashboardAnalytics from "@/features/analytics/components/DashboardAnalytics";
import CreateShortLinkCard from "@/features/shorten-link/components/CreateShortLinkCard";
import RecentLinksCard from "@/features/shorten-link/components/RecentLinksCard";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !isPending) {
      router.replace("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <section className="flex-1 p-2 flex flex-col gap-4 overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back! Here&apos;s an overview of your links</p>
      </div>
      <CreateShortLinkCard />
      <DashboardAnalytics />
      <RecentLinksCard sort="recently" limit={3} />
    </section>
  );
};

export default Page;
