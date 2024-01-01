import { Counter } from "./Components/Counter";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { useNavigate } from "react-router-dom";
import { Todo } from "./Components/Todo";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <NaviDiv>
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/counter")}>Counter</p>
      <p onClick={() => navigate("/todo")}>To-do List</p>
    </NaviDiv>
  );
};

function App() {
  // const [count, setCount] = useState(10);
  // props drilling 발생
  // props를 사용하지 않는 부모 component가 굳이 props를 넘겨받아야하는 불필요성 발생
  // props의 변동이 있을 때, re-render가 되기 때문에, 불필요한 re-render가 발생한다는 단점이 있음

  return (
    <RouteDiv>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </RouteDiv>
  );
}

export default App;

const NaviDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  gap: 2em;

  border-bottom: 1px solid lightgray;
  padding: 0 2em;

  & > p {
    font-weight: 600;
    font-size: 1.1em;
    cursor: pointer;

    &:hover {
      color: skyblue;
      text-decoration: underline;
    }
  }
`;

const RouteDiv = styled.div`
  padding: 3rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  background-color: #262626;
`;
