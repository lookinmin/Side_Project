import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styled from "styled-components";
import { Example } from "./pages/Example";
import { Todo } from "./pages/Todo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledRow>
      <p onClick={() => navigate("/")}>HOME</p>
      <p onClick={() => navigate("/ex")}>EXAMPLE - TODO</p>
      <p onClick={() => navigate("/todo")}>TODO with axios</p>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  padding: 1em 3em;
  border-bottom: 1px solid lightgray;

  & > p {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/ex" element={<Example />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
