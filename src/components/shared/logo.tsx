import { LinkIcon } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <LinkIcon className="w-5 h-5 text-primary" />
      <span className="text-lg font-bold">Shortify</span>
    </div>
  );
};

export default Logo;
