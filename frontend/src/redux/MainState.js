import { createSlice } from "@reduxjs/toolkit";

export const mainStateSlice = createSlice({
  name: "main",
  initialState: {
    appState: 0,
  },
  reducers: {
    mainMenu: (state) => {
      state.appState = 0;
    },
    gameScreen: (state) => {
      state.appState = 1;
    },
    gameOver: (state) => {
      state.appState = 2;
    },
    hiScores: (state) => {
      state.appState = 3;
    },
  },
});

// Action creators are generated for each case reducer function
export const { mainMenu, gameScreen, gameOver, hiScores } =
  mainStateSlice.actions;

export default mainStateSlice.reducer;
