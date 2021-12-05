import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
const postSlide = createSlice({
  name: "SliceName",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

const { actions, reducer } = postSlide;
export const { getPosts } = actions;
export default reducer;
