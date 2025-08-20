import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBlog, UpdateSavedStatus } from "./SingleBlogApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// fetch single blog
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const blog = await GetBlog(blogId);
  return blog;
});

// update isSaved status
export const updateSavedStatus = createAsyncThunk(
  "blog/updateSavedStatus",
  async ({ blogId, isSaved, likes }) => {
    const blog = await UpdateSavedStatus({ blogId, isSaved, likes });
    return blog;
  }
);

const updateSavedStatusSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // update saved status
      .addCase(updateSavedStatus.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
      .addCase(updateSavedStatus.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default updateSavedStatusSlice.reducer;
