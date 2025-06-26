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
import Button from "@lyric-app/components/button/button";
import SearchBox from "@lyric-app/components/searchBox/searchBox";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="transition-all duration-1000 bg-neutral-950 shadow-md rounded-lg sticky top-0 w-full z-50">
      <div className="transition-all duration-1000 flex justify-start items-center">
        <Link
          href="/"
          className="relative w-[159px] aspect-[16/9] text-2xl font-bold text-white"
        >
          <Image
            className="object-cover"
            alt="lyric logo"
            fill
            src="/lyric_lg_rgb_mnt_wht.png"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden mx-5 md:flex space-x-2">
          <Button label="All" isActive />
          <Button label="Country" />
          <Button label="Rock" />
          <Button label="Pop" />
        </div>

        <SearchBox onSearch={() => console.log("onSearch")} />

        <div className="ml-auto mr-8 md:flex space-x-6">
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
        <div className="md:hidden bg-white border-t mt-2 shadow-sm">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/content"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Content
          </Link>
        </div>
      )}
    </nav>
  );
}
