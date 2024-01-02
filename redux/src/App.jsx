import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Components/Home";
import { Counter } from "./Components/Counter";
import { ToolkitCounter } from "./Components/ToolkitCounter";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/counter")}>Counter</p>
      <p onClick={() => navigate("/toolkit")}>Toolkit-Counter</p>
    </StyledHeader>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/toolkit" element={<ToolkitCounter />} />
      </Routes>
    </>
  );
}

export default App;

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #575757;
  padding: 1em 3em;
  gap: 30px;
  justify-content: start;
  align-items: center;

  & > p {
    cursor: pointer;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;
