import React from "react";
import styled from "styled-components";
import { toolkitStore } from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../Slices/counterSlice";
import { asyncUpFetch } from "../Slices/counterSlice";
import { thunkCounterSlice } from "../Slices/counterSlice";
import { thunkCounterStore } from "../store";

const ToolCounter = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.counter.value;
  });

  const status = useSelector((state) => {
    return state.counter.status;
  });

  return (
    <StyledDiv>
      <StyledRow>
        <button
          onClick={() => {
            dispatch(counterSlice.actions.up(2));
            // dispatch({ type: "Toolkitcounter/up", step: 2 });
          }}
        >
          PLUS
        </button>
        {num}
        <button
          onClick={() => {
            dispatch(counterSlice.actions.down(1));
          }}
        >
          MINUS
        </button>
      </StyledRow>

      <hr style={{ width: "100%" }} />
    </StyledDiv>
  );
};

const ThunkCounter = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.thunkCounter.value;
  });

  const status = useSelector((state) => {
    return state.thunkCounter.status;
  });

  return (
    <StyledRow>
      <button
        onClick={() => {
          dispatch(thunkCounterSlice.actions.up(3));
        }}
      >
        UP
      </button>
      <button
        onClick={() => {
          dispatch(thunkCounterSlice.actions.clean());
        }}
      >
        CLEAN
      </button>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        Async Fetch
      </button>

      <p>
        {num} | {status}
      </p>
    </StyledRow>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;

// createAsyncThunk는 비동기 작업을 처리하는 action을 만들어준다.

// thunk의 비동기 작업은 3가지의 상태가 있다.
// pending -> fulfilled / rejected
// 각 상태별로 reducer가 필요하다.

// 동기적인 작업(버튼 클릭 등) 은 reducers를 사용 -> action 작업을 reducer가 자동으로 만듬
// 비동기적인 작업 (fetch(axios)를 통한 json data 처리) 은 extraReducers를 사용 -> 자동 안됨

export const ToolkitCounter = () => {
  return (
    <Wrapper>
      <Provider store={toolkitStore}>
        <p>Redux-Toolkit</p>
        <p>Redux-toolkit / Redux-toolkit-Thunk를 활용한 Counter를 만들어보자</p>
        <ToolCounter />
      </Provider>

      <Provider store={thunkCounterStore}>
        <ThunkCounter />
      </Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3em;
`;
