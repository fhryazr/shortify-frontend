import { formatDate } from "@/lib/utils";
import { ShortenLink } from "../types/type";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Copy, Edit, ExternalLink, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ShortenLinkCard = ({ link }: { link: ShortenLink }) => {
  return (
    <Card className="shadow-none py-4">
      <CardContent className="space-y-2 px-4">
        <div>
          <h3 className="text-muted-foreground text-xs">Original URL</h3>
          <p className="text-base">{link.url}</p>
        </div>
        <div>
          <h3 className="text-muted-foreground text-xs">Short URL</h3>
          <p className="text-primary text-base">{`short.ly/${link.shortCode}`}</p>
        </div>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <p>Created: {formatDate(link?.createdAt)}</p>
          <p>Updated: {formatDate(link?.updatedAt)}</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <Button variant="outline">
            <BarChart3 /> Stats
          </Button>
          <div className="flex gap-1">
            <Button variant={"ghost"} size={"icon"}>
              <Copy />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <ExternalLink />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <Edit />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-destructive">
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShortenLinkCard;
