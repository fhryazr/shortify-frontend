import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";

type EditLinkModalProps = {
  shortCode: string;
  url: string;
};

export function EditLinkModal({ shortCode, url }: EditLinkModalProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Edit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Edit /> Edit URL
            </DialogTitle>
            <DialogDescription>
              Change the destination URL for{" "}
              <span className="text-primary font-medium">
                short.ly/{shortCode}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="url">New Destination URL</Label>
                <Input id="url" name="url" defaultValue={url} />
              </div>
              <div className="text-muted-foreground bg-muted px-4 py-2 rounded-lg">
                <p className="text-xs">Current URL :</p>
                <p className="text-sm">{url}</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
