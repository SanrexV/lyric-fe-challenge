import React, { useState, FormEvent } from "react";
import { LuSearch } from "react-icons/lu";

type SearchBoxProps = {
  onSearch?: (query: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="p-2 md:p-4">
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-neutral-900"
      >
        <button
          type="submit"
          className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-100"
        >
          <LuSearch color="#404040" className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
};

export default SearchBox;
