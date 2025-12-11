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

// const data: ShortenLink[] = [
//   {
//     id: 1,
//     shortLink: "short.ly/abc123",
//     originalLink: "https://example.com/very/long/url/1",
//     shortCode: "abc123",
//     createdAt: "2024-06-01T12:00:00Z",
//     updatedAt: "2024-06-01T12:00:00Z",
//   },
//   {
//     id: 2,
//     shortLink: "short.ly/def456",
//     shortCode: "def456",
//     originalLink: "https://example.com/very/long/url/2",
//     createdAt: "2024-06-01T12:00:00Z",
//     updatedAt: "2024-06-01T12:00:00Z",
//   },
//   {
//     id: 3,
//     shortLink: "short.ly/ghi789",
//     shortCode: "ghi789",
//     originalLink: "https://example.com/very/long/url/3",
//     createdAt: "2024-06-01T12:00:00Z",
//     updatedAt: "2024-06-01T12:00:00Z",
//   },
// ];

const RecentLinksCard = () => {
  const { data: links, isLoading: fetchLinksLoading } = useGetShortenLinks();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Links</CardTitle>
        <CardDescription>
          Your most recently created short links
        </CardDescription>
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
