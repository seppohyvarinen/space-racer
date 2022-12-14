import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    health: 3,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },

    reset: (state) => {
      state.count = 0;
    },

    takeHit: (state) => {
      state.health--;
    },

    currentHealth: (state) => {
      return state.health;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  reset,
  takeHit,
  currentHealth,
} = counterSlice.actions;

export default counterSlice.reducer;
