import axiosInstance from "../../utils/axios";

export const GetBlog = async (blogId) => {
  const response = await axiosInstance.get(`/blogs/${blogId}`);
  return response.data;
};

// update saved status
export const UpdateSavedStatus = async ({ blogId, isSaved }) => {
  const response = await axiosInstance.patch(`/blogs/${blogId}`, {
    isSaved,
  });
  return response.data;
};
