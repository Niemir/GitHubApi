import React, { useContext } from "react";
import styled from "styled-components";
import { useGetAllRepos, useGetAllUsers } from "../hooks/github.hooks";
import ListElement from "../components/ListElement/ListElement";
import { SearchContext } from "../context/appContext";

const StyledCounter = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSize.xl};
  margin: 34px 0 20px;
`;

const List = () => {
  const { search } = useContext(SearchContext);

  const {
    data: usersResponse,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetAllUsers(search);
  const {
    data: reposResponse,
    isLoading: reposLoading,
    isError: reposError,
  } = useGetAllRepos(search);

  if (usersLoading || reposLoading) {
    return <div>Loading...</div>;
  }

  if (!usersResponse || !reposResponse || usersError || reposError) {
    return <div>Error with fetching data</div>;
  }

  const modifedUsers = usersResponse.items.map((user) => ({
    ...user,
    type: "user",
  }));

  const modifedRepos = reposResponse.items.map((repo) => ({
    ...repo,
    type: "repo",
  }));

  const sortedData = [...modifedUsers, ...modifedRepos].sort(
    (a, b) => a.id - b.id
  );

  const getTotalResultsNumber = () =>
    (usersResponse.total_count + reposResponse.total_count).toLocaleString(
      "en-US"
    );

  return (
    <section>
      <StyledCounter>{getTotalResultsNumber()} results</StyledCounter>
      <ul>
        {sortedData &&
          sortedData.map((data: any) => (
            <ListElement key={data.id} data={data} type={data.type} />
          ))}
      </ul>
    </section>
  );
};

export default List;
