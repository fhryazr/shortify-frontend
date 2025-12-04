import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import ShortenLinkInput from "./ShortenLinkInput";

const CreateShortLinkCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center font-bold text-xl">
          <Plus /> Create Short Link
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Paste a long URL to shorten it instantly
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShortenLinkInput />
      </CardContent>
    </Card>
  );
};

export default CreateShortLinkCard;
