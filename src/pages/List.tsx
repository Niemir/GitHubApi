import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useGetAllRepos, useGetAllUsers } from "../hooks/github.hooks";
import ListElement from "../components/ListElement/ListElement";

const StyledCounter = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSize.xl};
  margin: 34px 0 20px;
`;

const List = () => {
  const {
    data: usersResponse,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetAllUsers();
  const {
    data: reposResponse,
    isLoading: reposLoading,
    isError: reposError,
  } = useGetAllRepos();

  if (usersLoading || reposLoading) {
    return <div>Loading...</div>;
  }
  if (!usersResponse || !reposResponse) {
    return <div>Error</div>;
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
  console.log("sortedData ", sortedData);

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
