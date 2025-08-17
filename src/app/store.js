import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/AllBlogsSlice/AllBlogsSlice";
import relatedBlogReducer from "../features/RelatedBlogs/RelatedBlogsSlice";
import blogReducer from "../features/SingleBlog/SingleBlogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogReducer,
  },
});
