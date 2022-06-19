import { useState } from "react";
import styled from "styled-components";
import {
  useGetAllRepos,
  useGetAllUsers,
  useGetReposByName,
  useGetUserByName,
} from "./hooks/github.hooks";
import useDebounce from "./hooks/useDebounce";

const Wrapper = styled.section`
  height: 100vh;
`;
console.log(process.env.REACT_APP_GITHUB_TOKEN);
function App() {
  const [name, setName] = useState("");
  const debouncedValue = useDebounce<string>(name, 500);
  const { data: allUsers } = useGetAllUsers(debouncedValue);
  const { data: allRepos } = useGetAllRepos(debouncedValue);
  const { data: users } = useGetUserByName(debouncedValue);
  const { data: repos } = useGetReposByName(debouncedValue);

  return (
    <Wrapper>
      <h1>TEST</h1>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      {users && users.map((el: any) => el.login)}
      <br />
      {repos && repos.map((el: any) => el.login)}
    </Wrapper>
  );
}

export default App;
