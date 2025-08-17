import React, { useEffect } from "react";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/AllBlogsSlice/AllBlogsSlice";

export default function AllBlogs() {
  const { blogs, isError, isLoading, error } = useSelector(
    (state) => state.blogs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(blogs);
  return (
    <div>
      <SingleCard />
    </div>
  );
}
