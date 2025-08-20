import axiosInstance from "../../utils/axios";

export const UpdateSavedStatus = async ({ blogId, isSaved,likes }) => {
  const response = await axiosInstance.patch(`/blogs/${blogId}`, {
      isSaved,
      likes
  });
  return response.data;
};
