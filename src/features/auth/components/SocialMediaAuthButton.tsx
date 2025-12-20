import { Button } from "@/components/ui/button";
import { SiGithub, SiGoogle } from "react-icons/si";

const SocialMediaAuthButton = () => {
  return (
    <div className="flex flex-row w-full gap-2">
      <Button variant="outline" className="flex-1">
        <SiGoogle /> Google
      </Button>
      <Button variant="outline" className="flex-1">
        <SiGithub /> Github
      </Button>
    </div>
  );
};

export default SocialMediaAuthButton;
