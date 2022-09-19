import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Score";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
