"use client";
import { useCreateShortenLink } from "@/api/shorten/create-shorten";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const ShortenLinkInput = () => {
  const [url, setUrl] = useState<string>("");

  const { mutate: createShortLinkMutation, isPending: createShortLinkLoading } =
    useCreateShortenLink({
      mutationConfig: {
        onSuccess: () => {
          toast.success("Short link created successfully!");
        },
      },
    });

  const handleCreateShortLink = () => {
    createShortLinkMutation({ url });
    setUrl("");
  };

  return (
    <div className="flex gap-2">
      <Input
        className="h-10 shadow-none"
        placeholder="https://example.com/your-long-url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        className="px-8 h-10"
        onClick={handleCreateShortLink}
        disabled={createShortLinkLoading}>
        Shorten
      </Button>
    </div>
  );
};

export default ShortenLinkInput;
