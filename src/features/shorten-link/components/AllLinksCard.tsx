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

const AllLinksCard = () => {
  const { data: links, isLoading: fetchLinksLoading } = useGetShortenLinks();
  return (
    <Card>
      <CardHeader className="flex flex-col gap-0">
        <CardTitle className="text-xl">All Links</CardTitle>
        <CardDescription>{links?.length} total links</CardDescription>
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

export default AllLinksCard;
