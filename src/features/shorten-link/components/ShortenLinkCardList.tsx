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
    <div className="space-y-2 h-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : links && links.length > 0 ? (
        links.map((link) => <ShortenLinkCard key={link.id} link={link} />)
      ) : (
        <div className="h-full flex justify-center items-center">
          <p className="text-center">No links available.</p>
        </div>
      )}
    </div>
  );
};

export default ShortenLinkCardList;
