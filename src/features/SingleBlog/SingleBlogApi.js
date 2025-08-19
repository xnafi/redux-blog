import axiosInstance from "../../utils/axios";

export const GetBlog = async (blogId) => {
  const response = await axiosInstance.get(`/blogs/${blogId}`);
  return response.data;
};
