"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShortenLinkCardList from "./ShortenLinkCardList";
import { useGetShortenLinks } from "@/api/shorten/getShorten";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecentLinksCard = () => {
  const { data: links, isLoading: fetchLinksLoading } =
    useGetShortenLinks("recently");

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>Recent Links</CardTitle>
          <CardDescription>
            Your most recently created short links
          </CardDescription>
        </div>
        <Button variant="outline" className="bg-white">
          <Link href="/dashboard/my-links">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <ShortenLinkCardList
          links={links || []}
          isLoading={fetchLinksLoading}
        />
      </CardContent>
    </Card>
  );
};

export default RecentLinksCard;
