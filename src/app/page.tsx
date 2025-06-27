"use client";

import { useEffect, useState } from "react";
import type { Band } from "@lyric-app/types/band";

import { useLayoutContext } from "@lyric-app/context/layoutContext";

import AlbumGrid from "@lyric-app/components/albumGrid/albumGrid";

export default function Home() {
  const [bandsList, setBandsList] = useState<Band[]>([]);
  const { searchBoxValue, filterValue } = useLayoutContext();

  const fetchBands = async (bandName: string = "", genre: string = "") => {
    const res = await fetch(`/api/bands?bandName=${bandName}&genre=${genre}`);
    const bandsData = await res.json();
    setBandsList(bandsData);
  };

  // Fetch complete bands list
  useEffect(() => {
    fetchBands();
  }, []);

  useEffect(() => {
    fetchBands(searchBoxValue, filterValue);
  }, [searchBoxValue, filterValue]);

  return (
    <div className="w-full transition-all duration-1000">
      <AlbumGrid bandsList={bandsList} />
    </div>
  );
}
