import { configureStore } from "@reduxjs/toolkit";
import postSlide from "./slide/postSlide";
const store = configureStore({
  reducer: {
    posts: postSlide,
  },
  devTools: false,
});

export default store;
