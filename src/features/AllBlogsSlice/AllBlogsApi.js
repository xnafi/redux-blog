import axiosInstance from "../../utils/axios";

export const GetBlogs = async (tags) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags?.map((tag) => `tags_like=${tag}`).join("&");
  }
  const response = await axiosInstance.get(`/blogs/?${queryString}`);
  return response.data;
};
