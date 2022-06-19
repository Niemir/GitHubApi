import styled from "styled-components";
import Header from "./components/Header";
import List from "./components/List/List";
const Wrapper = styled.section``;

function App() {
  return (
    <Wrapper>
      <Header />
      <List />
    </Wrapper>
  );
}

export default App;
