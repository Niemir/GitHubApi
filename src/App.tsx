import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import User from "./pages/User";
import List from "./pages/List";
const Wrapper = styled.section``;

const Container = styled.div`
  padding: 16px;
  max-width: 934px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Routes>
          <Route path="/user/:userLogin" element={<User />} />
          <Route path="/" element={<List />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;
