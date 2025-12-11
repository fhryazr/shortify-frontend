import AllLinksCard from "@/features/shorten-link/components/AllLinksCard";
import SearchLinks from "@/features/shorten-link/components/SearchLinks";

const MyLinksPage = () => {
  return (
    <section className="px-2 py-4 space-y-4 overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">My Links</h1>
        <p>Manage and track all your shortened links in one place</p>
      </div>
      <SearchLinks />
      <AllLinksCard />
    </section>
  );
};

export default MyLinksPage;
