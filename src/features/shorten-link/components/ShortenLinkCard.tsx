import { formatDate } from "@/lib/utils";
import { ShortenLink } from "../types/type";
import { Card, CardContent } from "@/components/ui/card";

const ShortenLinkCard = ({ link }: { link: ShortenLink }) => {
  return (
    <Card className="shadow-none">
      <CardContent className="space-y-2">
        <div>
          <h3 className="text-muted-foreground text-xs">Original URL</h3>
          <p className="text-base">{link.originalLink}</p>
        </div>
        <div>
          <h3 className="text-muted-foreground text-xs">Short URL</h3>
          <p className="text-primary text-base">{link.shortLink}</p>
        </div>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <p>Created: {formatDate(link?.createdAt)}</p>
          <p>Updated: {formatDate(link?.updatedAt)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShortenLinkCard;
