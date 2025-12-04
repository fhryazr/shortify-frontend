import DashboardAnalytics from "@/features/analytics/components/DashboardAnalytics";
import CreateShortLinkCard from "@/features/shorten-link/components/CreateShortLinkCard";
import RecentLinksCard from "@/features/shorten-link/components/RecentLinksCard";

const Page = () => {
  return (
    <section className="px-2 py-4 space-y-4 overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back! Here&apos;s an overview of your links</p>
      </div>
      <CreateShortLinkCard />
      <DashboardAnalytics />
      <RecentLinksCard />
    </section>
  );
};

export default Page;
