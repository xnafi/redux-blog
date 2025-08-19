import axiosInstance from "../../utils/axios";

export const GetBlog = async (id) => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  return response.data;
};
