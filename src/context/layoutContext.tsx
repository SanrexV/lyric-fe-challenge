"use client";

import React, { createContext, useContext, useState } from "react";

type LayoutContextType = {
  searchBoxValue: string;
  setSearchBoxValue: (value: string) => void;
  filterValue: string;
  setFiltervalue: (value: string) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within LayoutProvider");
  }
  return context;
};

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [filterValue, setFiltervalue] = useState("All");

  return (
    <LayoutContext.Provider
      value={{ searchBoxValue, setSearchBoxValue, filterValue, setFiltervalue }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
