import React, { createContext, ReactNode, useState } from "react";

export interface ISearchContext {
  search: string;
  setSearch: (searchValue: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: () => null,
});

const SearchProvider: any = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
