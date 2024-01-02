import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./Slices/counterSlice";
import { thunkCounterSlice } from "./Slices/counterSlice";

export const toolkitStore = configureStore({
  reducer: {
    counter: counterSlice.reducer, // counterSlice의 reducers를 가져옴
  },
});

export const thunkCounterStore = configureStore({
  reducer: {
    thunkCounter: thunkCounterSlice.reducer,
  },
});

// --------------------------------------- react-redux

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }

  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number += action.step;
  }

  return newState;
};

export const Counterstore = createStore(reducer);
