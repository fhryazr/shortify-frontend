import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShortenLinkCardList from "./ShortenLinkCardList";
import { ShortenLink } from "../types/type";

const data: ShortenLink[] = [
  {
    id: 1,
    shortLink: "short.ly/abc123",
    originalLink: "https://example.com/very/long/url/1",
    shortCode: "abc123",
    createdAt: "2024-06-01T12:00:00Z",
    updatedAt: "2024-06-01T12:00:00Z",
  },
  {
    id: 2,
    shortLink: "short.ly/def456",
    shortCode: "def456",
    originalLink: "https://example.com/very/long/url/2",
    createdAt: "2024-06-01T12:00:00Z",
    updatedAt: "2024-06-01T12:00:00Z",
  },
  {
    id: 3,
    shortLink: "short.ly/ghi789",
    shortCode: "ghi789",
    originalLink: "https://example.com/very/long/url/3",
    createdAt: "2024-06-01T12:00:00Z",
    updatedAt: "2024-06-01T12:00:00Z",
  },
];

const RecentLinksCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Links</CardTitle>
        <CardDescription>
          Your most recently created short links
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShortenLinkCardList links={data} />
      </CardContent>
    </Card>
  );
};

export default RecentLinksCard;
