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
import { Trash2 } from "lucide-react";
import { useState } from "react";

type DeleteLinkModalProps = {
  id: string;
  shortCode: string;
  url: string;
};

export function DeleteLinkModal({ id, shortCode, url }: DeleteLinkModalProps) {
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
        <Button
          onClick={() => setOpen(true)}
          variant={"ghost"}
          size={"icon"}
          className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px] bg-white">
        <form onSubmit={handleUpdateShortLink} className="space-y-8">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <Trash2 /> Delete URL
            </DialogTitle>
            <DialogDescription>
              <p className="font-bold text-base">
                Are you sure want to delete{" "}
                <span className="text-primary font-bold">
                  short.ly/{shortCode}
                </span>
                {" "}?
              </p>
              This action cannot be undone and the link will stop working
              immediatly.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              variant={"destructive"}
              disabled={updateShortLinkLoading}>
              {updateShortLinkLoading ? "Saving..." : "Delete"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
