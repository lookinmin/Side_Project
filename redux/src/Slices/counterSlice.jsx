import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const counterSlice = createSlice({
  // redux-toolkit slice
  name: "Toolkitcounter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      // action 값이 up 이면 action 실행
      state.value = state.value + action.payload; // toolkit에선 payload라는 매개변수로 약속되어있다.
    },
    down: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

// ------------------------ Toolkit Thunk로 비동기 처리하기

export const asyncUpFetch = createAsyncThunk(
  "counterSlice/asyncUpFetch", // 함수의 타입, 구분지어질 이름
  async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
      });

      return res.data.abilities[0].ability.name;
    } catch (err) {
      throw err;
    }

    // const res = await fetch(
    //   // axios로 바꿈
    //   "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
    // );
    // const data = await res.json();
    // return data.value;
  }
);

export const thunkCounterSlice = createSlice({
  name: "thunkCounterSlice",
  initialState: {
    value: 0,
    status: "WELCOME",
  },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    clean: (state, action) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "LOADING";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = action.payload;
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "ERROR";
    });
  },
});
