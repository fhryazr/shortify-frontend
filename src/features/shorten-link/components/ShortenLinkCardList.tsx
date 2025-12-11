import { ShortenLink } from "../types/type";
import ShortenLinkCard from "./ShortenLinkCard";

type ShortenLinkCardListProps = {
  links: ShortenLink[];
  isLoading?: boolean;
};

const ShortenLinkCardList = ({
  links,
  isLoading,
}: ShortenLinkCardListProps) => {
  return (
    <div className="space-y-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : links && links.length > 0 ? (
        links.map((link) => <ShortenLinkCard key={link.id} link={link} />)
      ) : (
        <p>No links available.</p>
      )}
    </div>
  );
};

export default ShortenLinkCardList;
