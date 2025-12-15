import { useUpdateShortenLink } from "@/api/shorten/update-shorten";
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
import { useState } from "react";

type EditLinkModalProps = {
  id: string;
  shortCode: string;
  url: string;
};

export function EditLinkModal({ id, shortCode, url }: EditLinkModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [newURL, setNewURL] = useState<string>(url);

  const { mutate: updateShortLinkMutation, isPending: updateShortLinkLoading } =
    useUpdateShortenLink({
      mutationConfig: {
        onSuccess: () => {
          setOpen(false);
        },
      },
    });

  const handleUpdateShortLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateShortLinkMutation({ id, url: newURL });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant={"ghost"} size={"icon"}>
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <form onSubmit={handleUpdateShortLink}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Edit /> Edit URL
            </DialogTitle>
            <DialogDescription>
              Change the destination URL for{" "}
              <span className="text-primary font-medium">
                {process.env.NEXT_PUBLIC_BASE_URL}/{shortCode}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-8">
            <div className="grid gap-3">
              <Label htmlFor="url">New Destination URL</Label>
              <Input
                id="url"
                name="url"
                defaultValue={url}
                onChange={(e) => setNewURL(e.target.value)}
              />
            </div>
            <div className="text-muted-foreground bg-muted px-4 py-2 rounded-lg">
              <p className="text-xs">Current URL :</p>
              <p className="text-sm">{url}</p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={updateShortLinkLoading}>
              {updateShortLinkLoading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
