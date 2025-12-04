import { BarChart3, TrendingUp } from "lucide-react";
import React from "react";
import AnalyticsCard from "./AnalyticsCard";

const data = [
  { id: 1, title: "Total Clicks", value: 1200, icon: TrendingUp },
  { id: 2, title: "Total Links", value: 800, icon: BarChart3 },
];

const DashboardAnalytics = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {data.map((item) => (
        <AnalyticsCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default DashboardAnalytics;
