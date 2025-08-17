import axiosInstance from "../../utils/axios";

export const GetBlogs = async (sort) => {
  const response = await axiosInstance.get(`/blogs`);
  return response.data;
};
