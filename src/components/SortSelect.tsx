"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Name: A to Z" },
];

export function SortSelect() {
  const [sort, setSort] = useState("featured");

  return (
    <div className="relative">
      <label htmlFor="sort" className="sr-only">
        Sort products
      </label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="appearance-none rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-3 pr-9 text-sm text-zinc-200 transition hover:border-zinc-600 focus:border-indigo-400 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-zinc-500"
        aria-hidden
      />
    </div>
  );
}
