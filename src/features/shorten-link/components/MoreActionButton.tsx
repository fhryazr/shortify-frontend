import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLink, MoreHorizontalIcon } from "lucide-react";
import { EditLinkModal } from "./EditLinkModal";
import QrCodeModal from "./QrCodeModal";
import Link from "next/link";
import { ShortenLink } from "../types/type";
import { DeleteLinkModal } from "./DeleteLinkModal";

const MoreActionButton = ({ link }: { link: ShortenLink }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label="Open menu" size="icon-sm">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <QrCodeModal shortCode="" />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="animate-in slide-in-from-left-3 duration-200"
            asChild>
            <Button
              variant={"ghost"}
              size={"default"}
              className="w-full justify-start rounded-md text-gray-800"
              asChild>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${link?.shortCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full">
                <ExternalLink className="text-gray-800" /> Open
              </Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <EditLinkModal id="" shortCode="" url="" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteLinkModal id="" shortCode="" url="" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreActionButton;
