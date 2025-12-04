import React from "react";
import { AnalyticsData } from "../types/type";
import { Card, CardContent } from "@/components/ui/card";

const AnalyticsCard = ({ data }: { data: AnalyticsData }) => {
  return (
    <Card>
      <CardContent className="flex gap-2 items-center">
        <div className="bg-primary p-2 rounded-lg text-white">
          <data.icon />
        </div>
        <div>
          <h3 className="text-muted-foreground text-sm">{data.title}</h3>
          <p className="text-xl font-bold">{data.value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
