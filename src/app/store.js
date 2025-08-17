import { configureStore } from "@reduxjs/toolkit";
import blogSliceReducer from "../features/AllBlogsSlice/AllBlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSliceReducer,
  },
});
