import { createSlice } from "@reduxjs/toolkit";

export const hiScoreSlice = createSlice({
  name: "scoretable",
  initialState: {
    scoretable: [],
  },
  reducers: {
    setScoreTable: (state, action) => {
      state.scoretable = [...action.payload];
    },
    getHiScores: (state) => {
      return state.scoretable;
    },
  },
});

export const { setScoreTable, getHiScores } = hiScoreSlice.actions;

export default hiScoreSlice.reducer;
