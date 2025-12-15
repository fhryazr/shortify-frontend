import {
  deleteShortenLink,
  useDeleteShortenLink,
} from "@/api/shorten/delete-shorten";
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
import { Trash2 } from "lucide-react";
import { useState } from "react";

type DeleteLinkModalProps = {
  id: string;
  shortCode: string;
  url: string;
};

export function DeleteLinkModal({ shortCode }: DeleteLinkModalProps) {
  const [open, setOpen] = useState<boolean>(false);

  const {
    mutate: deleteShortenLinkMutation,
    isPending: deleteShortenLinkLoading,
  } = useDeleteShortenLink({
    mutationConfig: {
      onSuccess: () => {
        setOpen(false);
      },
    },
  });

  const handleUpdateShortLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteShortenLinkMutation(shortCode);
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
            <DialogDescription className="space-y-2">
              <span className="font-bold text-base block">
                Are you sure you want to delete
                <span className="text-primary font-bold">
                  {" "}
                  {process.env.NEXT_PUBLIC_BASE_URL}/{shortCode}
                </span>
                ?
              </span>
              <span className="block">
                This action cannot be undone and the link will stop working
                immediately.
              </span>
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
              disabled={deleteShortenLinkLoading}>
              {deleteShortenLinkLoading ? "Saving..." : "Delete"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
