import axiosInstance from "../../utils/axios";

// PATCH request to update isSaved status
export const toggleSavedBlog = async (blogId, isSaved) => {
  const response = await axiosInstance.patch(`/blogs/${blogId}`, {
    isSaved: !isSaved,
  });
  return response.data;
};
