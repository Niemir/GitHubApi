import styled from "styled-components";
import Header from "./components/Header";
import {
  useGetAllRepos,
  useGetAllUsers,
  useGetReposByName,
  useGetUserByName,
} from "./hooks/github.hooks";
import useDebounce from "./hooks/useDebounce";
const Wrapper = styled.section``;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
