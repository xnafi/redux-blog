import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toggleSavedBlog } from "./UpdateStatusAndLikeApi";

const initialState = {
  blogs: {},
  isLoading: false,
  isError: false,
  error: "",
};
// Async thunk to toggle saved status
export const updateSavedStatus = createAsyncThunk(
  "blogs/updateSavedStatus",
  async ({ blogId, isSaved }) => {
    const updatedBlog = await toggleSavedBlog(blogId, isSaved);
    return updatedBlog;
  }
);

const updateBlogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateSavedStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSavedStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(updateSavedStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default updateBlogSlice.reducer;
