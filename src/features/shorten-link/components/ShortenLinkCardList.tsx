import { ShortenLink } from "../types/type";
import ShortenLinkCard from "./ShortenLinkCard";

type ShortenLinkCardListProps = {
  links: ShortenLink[];
};

const ShortenLinkCardList = ({ links }: ShortenLinkCardListProps) => {
  return (
    <div className="space-y-2">
      {links.map((link) => (
        <ShortenLinkCard key={link.id} link={link} />
      ))}
    </div>
  );
};

export default ShortenLinkCardList;
