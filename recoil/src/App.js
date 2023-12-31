import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { countState } from "./atom";

const Counter = (/* { count, onUp } */) => {
  // atom - countState 읽어오기
  const [count, setCount] = useRecoilState(countState);

  return (
    <StyledDiv>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      {count}
    </StyledDiv>
  );
};

const DisplayCount = (/* { count } */) => {
  const count = useRecoilValue(countState); // 읽기만 가능한 useRecoil

  return <StyledDiv>{count}</StyledDiv>;
};

function App() {
  // const [count, setCount] = useState(10);
  // props drilling 발생
  // props를 사용하지 않는 부모 component가 굳이 props를 넘겨받아야하는 불필요성 발생
  // props의 변동이 있을 때, re-render가 되기 때문에, 불필요한 re-render가 발생한다는 단점이 있음

  return (
    <div>
      <Counter />
      <DisplayCount />
    </div>
  );
}

export default App;

const StyledDiv = styled.div`
  border: 3px solid gray;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
`;
