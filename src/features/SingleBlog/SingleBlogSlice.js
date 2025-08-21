import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBlog, toggleSavedBlog } from "./SingleBlogApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// fetch a single blog
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const blog = await GetBlog(blogId);
  return blog;
});

// update saved/like status
export const updateSavedStatus = createAsyncThunk(
  "blog/updateSavedStatus",
  async ({ blogId, isSaved, likes }) => {
    const updatedBlog = await toggleSavedBlog(blogId, isSaved, likes);
    return updatedBlog;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch single blog
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
      })

      // update blog (save/like)
      .addCase(updateSavedStatus.pending, (state, action) => {
        state.isError = false;
        const { blogId, isSaved, likes } = action.meta.arg;
        if (state.blog.id === blogId) {
          state.blog.isSaved = isSaved;
          state.blog.likes = likes;
        }
      })
      .addCase(updateSavedStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(updateSavedStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
