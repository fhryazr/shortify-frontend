import { formatDate } from "@/lib/utils";
import { ShortenLink } from "../types/type";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, TrendingUpIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { EditLinkModal } from "./EditLinkModal";
import { DeleteLinkModal } from "./DeleteLinkModal";
import Link from "next/link";
import QrCodeModal from "./QrCodeModal";
import { useIsMobile } from "@/hooks/use-mobile";
import MoreActionButton from "./MoreActionButton";

const ShortenLinkCard = ({ link }: { link: ShortenLink }) => {
  const isMobile = useIsMobile();

  return (
    <Card className="shadow-none py-4">
      <CardContent className="space-y-2 px-4">
        <div>
          <h3 className="text-muted-foreground text-xs">Original URL</h3>
          <p className="text-base">{link.url}</p>
        </div>
        <div>
          <h3 className="text-muted-foreground text-xs">Short URL</h3>
          <p className="text-primary text-base">{`${process.env.NEXT_PUBLIC_BASE_URL}/${link.shortCode}`}</p>
        </div>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <p>Created: {formatDate(link?.createdAt)}</p>
          <p>Updated: {formatDate(link?.updatedAt)}</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUpIcon className="size-4" /> {link?.accessCount} clicks
          </p>
          {isMobile ? (
            <div className="space-x-2">
              <Button variant={"ghost"} size={"icon"}>
                <Copy />
              </Button>
              <MoreActionButton link={link} />
            </div>
          ) : (
            <div className="flex gap-1">
              <Button variant={"ghost"} size={"icon"}>
                <Copy />
              </Button>
              <QrCodeModal shortCode={link.shortCode} />
              <Link
                href={`http://localhost:3000/${link.shortCode}`}
                target="_blank"
                rel="noopener noreferrer">
                <Button variant={"ghost"} size={"icon"}>
                  <ExternalLink />
                </Button>
              </Link>
              <EditLinkModal
                id={link.id}
                shortCode={link.shortCode}
                url={link.url}
              />
              <DeleteLinkModal
                id={link.id}
                shortCode={link.shortCode}
                url={link.url}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ShortenLinkCard;
