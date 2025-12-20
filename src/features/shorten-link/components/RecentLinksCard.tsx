"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShortenLinkCardList from "./ShortenLinkCardList";
import { useGetShortenLinks } from "@/api/shorten/get-shorten";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SortOption = "recently" | "most-click";

type LinkCardProps = {
  search?: string;
  sort?: SortOption;
  limit?: number;
};

const RecentLinksCard = ({ limit, search, sort }: LinkCardProps) => {
  const path = usePathname();
  const onDashboard = path === "/dashboard";

  const finalLimit = onDashboard ? 3 : limit;

  const { data: links, isLoading: fetchLinksLoading } = useGetShortenLinks({
    sort,
    search,
    limit: finalLimit,
  });

  const title = onDashboard ? "Recent Links" : "All Links";
  const description = onDashboard
    ? "Your most recently created short links"
    : `${links?.length} total links`;

  return (
    <Card className="flex-1 flex flex-col overflow-auto">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {onDashboard && (
          <Button variant="outline" className="bg-white">
            <Link href="/dashboard/my-links">View All</Link>
          </Button>
        )}
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <ShortenLinkCardList
          links={links || []}
          isLoading={fetchLinksLoading}
        />
      </CardContent>
    </Card>
  );
};

export default RecentLinksCard;
