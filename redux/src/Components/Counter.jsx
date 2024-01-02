import React from "react";
import styled from "styled-components";
import { Counterstore } from "../store";
import { useSelector, useDispatch, Provider } from "react-redux";

function Left1() {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2() {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3() {
  const number = useSelector((state) => state.number);

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS", step: 2 });
        }}
      ></input>
    </div>
  );
}

export const Counter = () => {
  return (
    <StyledWrapper>
      <div>
        <h2>ROOT : </h2>
        <Styledgrid>
          <Provider store={Counterstore}>
            <Left1 />
            <Right1 />
          </Provider>
        </Styledgrid>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 3em;

  & div {
    border: 1px solid lightgray;
    margin: 15px;
    padding: 1em;
  }
`;

const Styledgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2vw;
`;
