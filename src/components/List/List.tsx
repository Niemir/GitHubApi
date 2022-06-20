import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useGetAllRepos, useGetAllUsers } from "../../hooks/github.hooks";
import ListElement from "../ListElement/ListElement";

const Wrapper = styled.section`
  /* padding: 16px; */
`;
const Container = styled.div`
  padding: 16px;
  max-width: 934px;
  margin: 0 auto;
`;
const List = () => {
  const { data: allUsers } = useGetAllUsers();
  const { data: allRepos } = useGetAllRepos();

  console.log("list ", allUsers);
  return (
    <Wrapper>
      <Container>
        <ul>
          {allRepos &&
            allRepos.map((user: any) => (
              <ListElement key={user.id} data={user} />
            ))}
        </ul>
        <ul>
          {allUsers &&
            allUsers.map((user: any) => (
              <ListElement key={user.id} data={user} />
            ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default List;
