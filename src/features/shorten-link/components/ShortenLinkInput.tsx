import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ShortenLinkInput = () => {
  return (
    <div className="flex gap-2">
      <Input
        className="h-10 shadow-none"
        placeholder="https://example.com/your-long-url"
      />
      <Button className="px-8 h-10">Shorten</Button>
    </div>
  );
};

export default ShortenLinkInput;
