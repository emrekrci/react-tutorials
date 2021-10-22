import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});


//normal usage for redux.

//export const INCREMENT = "increment";
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
