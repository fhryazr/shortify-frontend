"use client";

import RecentLinksCard, {
  SortOption,
} from "@/features/shorten-link/components/RecentLinksCard";
import SearchLinks from "@/features/shorten-link/components/SearchLinks";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const MyLinksPage = () => {
  const [search, setSearch] = useState<string>();
  const [filter, setFilter] = useState<SortOption>();
  const [debouncedSearch] = useDebounce(search, 500);
  const searchParams = debouncedSearch?.trim() || undefined;

  return (
    <section className="flex-1 flex flex-col gap-4 px-2 py-4 overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">My Links</h1>
        <p>Manage and track all your shortened links in one place</p>
      </div>
      <SearchLinks
        onChange={setSearch}
        filter={filter || "recently"}
        setFilter={setFilter}
      />
      <RecentLinksCard search={searchParams} sort={filter} />
    </section>
  );
};

export default MyLinksPage;
