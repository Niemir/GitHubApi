import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/appContext";
import useDebounce from "../hooks/useDebounce";

const StyledInput = styled.input`
  max-width: 242px;
  width: 100%;
  height: 37px;
  padding-left: 17px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  background: transparent;
  color: ${(props) => props.theme.colors.border};
  font-size: ${(props) => props.theme.fontSize.m};
  &:placeholder {
    color: ${(props) => props.theme.colors.border};
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const debouncedValue = useDebounce<string>(name, 500);
  const { setSearch } = useContext(SearchContext);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <StyledInput
        placeholder="Search"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Search;
