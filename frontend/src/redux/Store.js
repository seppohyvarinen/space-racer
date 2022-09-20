import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Score";
import MainStateReducer from "./MainState";

export default configureStore({
  reducer: {
    counter: counterReducer,
    mainState: MainStateReducer,
  },
});
