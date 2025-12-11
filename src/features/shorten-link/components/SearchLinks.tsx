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
import { useState } from "react";

const SearchLinks = () => {
  const [filter, setFilter] = useState("recently");

  return (
    <div className="flex gap-2">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
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
          <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
            <DropdownMenuRadioItem value="recently">
              Most Recent
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="most-click">
              Most Clicks
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="alphabetical">
              Alpahabetical
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchLinks;
