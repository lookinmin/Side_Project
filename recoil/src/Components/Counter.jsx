import { useState } from "react";
import styled from "styled-components";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../atom";

const CountDiv = (/* { count, onUp } */) => {
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

export const Counter = () => {
  return (
    <div>
      <CountDiv />
      <DisplayCount />
    </div>
  );
};

const StyledDiv = styled.div`
  border: 3px solid gray;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
`;
