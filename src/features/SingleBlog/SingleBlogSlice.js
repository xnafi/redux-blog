import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBlog } from "./SingleBlogApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const blog = await GetBlog(blogId);
  return blog;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
