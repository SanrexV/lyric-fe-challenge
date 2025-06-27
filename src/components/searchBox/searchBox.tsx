import React, { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

type SearchBoxProps = {
  onSearch?: (query: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (onSearch) {
      onSearch(query);
    }
  }, [onSearch, query]);

  return (
    <div className="p-2 md:p-4">
      <div
        className="flex w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-neutral-900 focus-within:ring focus-within:ring-neutral-300"
        tabIndex={0}
      >
        <button className="px-4 py-2">
          <LuSearch color="#404040" className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find some music..."
          className="w-full px-4 py-2 text-neutral-300 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBox;
