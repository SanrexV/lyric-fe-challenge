"use client";

import { useState } from "react";
import {
  LuBell,
  LuMenu,
  LuMessageCircle,
  LuSettings,
  LuX,
} from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

import { useLayoutContext } from "@lyric-app/context/layoutContext";

import Button from "@lyric-app/components/button/button";
import SearchBox from "@lyric-app/components/searchBox/searchBox";

const GENRES_LIST = ["All", "Country", "Rock", "Pop"];

export default function Navbar() {
  const { setSearchBoxValue, setFiltervalue, filterValue } = useLayoutContext();
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(filterValue);

  const handleOnSearch = (query: string) => {
    setSearchBoxValue(query);
  };

  const handleOnClickFilter = (genre: string) => {
    setActiveFilter(genre);
    setFiltervalue(genre);
  };

  const renderGenreList = () =>
    GENRES_LIST.map((genre) => (
      <Button
        key={genre}
        label={genre}
        isActive={activeFilter === genre}
        onClick={() => handleOnClickFilter(genre)}
      />
    ));

  return (
    <nav className="transition-all duration-1000 bg-neutral-950 shadow-md rounded-lg sticky top-0 w-full z-50">
      <div className="transition-all duration-1000 flex justify-start items-center">
        <Link
          href="/"
          className="relative w-[90px] md:w-[159px] aspect-[16/9] text-2xl font-bold text-white"
        >
          <Image
            className="object-cover"
            alt="lyric logo"
            fill
            src="/lyric_lg_rgb_mnt_wht.png"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden mx-5 md:flex space-x-2">{renderGenreList()}</div>

        <SearchBox onSearch={handleOnSearch} />

        <div className="hidden text-neutral-300 ml-auto mr-8 md:flex space-x-6">
          <LuBell className="cursor-pointer hover:text-teal-400" size={30} />
          <LuSettings
            className="cursor-pointer hover:text-teal-400"
            size={30}
          />
          <LuMessageCircle
            className="cursor-pointer hover:text-teal-400"
            size={30}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-900 mt-2 shadow-sm">
          <div className="flex md-hidden justify-center py-2 mx-5 space-x-2">
            {renderGenreList()}
          </div>
        </div>
      )}
    </nav>
  );
}
