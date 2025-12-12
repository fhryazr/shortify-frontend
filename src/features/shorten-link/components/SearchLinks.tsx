"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterIcon, SearchIcon } from "lucide-react";
import { SortOption } from "./RecentLinksCard";

type SearchLinksProps = {
  onChange: (value: string) => void;
  filter: SortOption;
  setFilter: (filter: SortOption) => void;
};

const SearchLinks = ({ onChange, setFilter, filter }: SearchLinksProps) => {
  const handleFilterChange = (value: string) => {
    setFilter(value as SortOption);
  };

  return (
    <div className="flex gap-2">
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          onChange={(e) => onChange(e.target.value)}
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <FilterIcon /> Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-fit bg-background py-2 shadow-lg border border-border rounded-lg mt-2"
          align="end">
          <DropdownMenuRadioGroup
            value={filter}
            onValueChange={handleFilterChange}>
            <DropdownMenuRadioItem value="recently">
              Most Recent
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="most-clicks">
              Most Clicks
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchLinks;
