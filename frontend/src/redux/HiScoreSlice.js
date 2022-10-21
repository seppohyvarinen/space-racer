import { createSlice } from "@reduxjs/toolkit";

export const hiScoreSlice = createSlice({
  name: "scoretable",
  initialState: {
    scoretable: [],
  },
  reducers: {
    setScoreTable: (state, action) => {
      state.scoretable = action.payload;
    },
  },
});

export const { setScoreTable } = hiScoreSlice.actions;

export default hiScoreSlice.reducer;
