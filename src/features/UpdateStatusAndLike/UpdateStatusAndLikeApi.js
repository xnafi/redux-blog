import axiosInstance from "../../utils/axios";

// PATCH request to update isSaved status
export const toggleSavedBlog = async (blogId, isSaved,likes) => {
  const response = await axiosInstance.patch(`/blogs/${blogId}`, {
    isSaved,
    likes,
  });
  return response.data;
};
