import axiosInstance from "../../utils/axios";

// get single blog
export const GetBlog = async (blogId) => {
  const response = await axiosInstance.get(`/blogs/${blogId}`);
  return response.data;
};

// patch blog (toggle saved & update likes)
export const toggleSavedBlog = async (blogId, isSaved, likes) => {
  const response = await axiosInstance.patch(`/blogs/${blogId}`, {
    isSaved,
    likes,
  });
  return response.data;
};
