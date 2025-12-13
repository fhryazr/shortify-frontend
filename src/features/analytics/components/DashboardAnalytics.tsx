"use client";

import { BarChart3, TrendingUp } from "lucide-react";
import AnalyticsCard from "./AnalyticsCard";
import { useGetAnalyticsOverview } from "@/api/analytics/get-analytics";

const DashboardAnalytics = () => {
  const { data, isLoading, isError } = useGetAnalyticsOverview();

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="h-24 rounded-xl bg-muted animate-pulse" />
        <div className="h-24 rounded-xl bg-muted animate-pulse" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="text-sm text-destructive">
        Failed to load analytics overview.
      </div>
    );
  }

  const cards = [
    { id: 1, title: "Total Clicks", value: data.totalClicks, icon: TrendingUp },
    { id: 2, title: "Total Links", value: data.totalLinks, icon: BarChart3 },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {cards.map((item) => (
        <AnalyticsCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default DashboardAnalytics;
