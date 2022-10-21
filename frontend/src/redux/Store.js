import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Score";
import MainStateReducer from "./MainState";
import HiScoreReducer from "./HiScoreSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    mainState: MainStateReducer,
    HiScore: HiScoreReducer,
  },
});
