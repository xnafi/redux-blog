import React, { useEffect } from "react";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/AllBlogsSlice/AllBlogsSlice";
import Loading from "./Loading";

export default function AllBlogs() {
  const { blogs, isError, isLoading, error } = useSelector(
    (state) => state.blogs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(blogs);
  // what to do
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">some error happened {error}</div>;
  if (!isLoading && !isError && blogs?.length > 0)
    content = blogs.map((blog) => <SingleCard key={blog.id} blog={blog} />);
  return (
    <div className="post-container" id="lws-postContainer">
      {content}
    </div>
  );
}
