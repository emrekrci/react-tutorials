import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };

//redux toolkit usage.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //we can manipulate the state now with redux toolkit.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;