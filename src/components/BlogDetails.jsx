import { useDispatch, useSelector } from "react-redux";
import BlogDetailCard from "./BlogDetailCard";
import BlogRelated from "./BlogRelated";
import { useEffect } from "react";
import { fetchBlog } from "../features/SingleBlog/SingleBlogSlice";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);
  // what to do
  console.log(blog);
  if (isLoading) <Loading />;
  if (!isLoading && isError) <Loading />;
  if (!isLoading && isError)
    <div className="col-span-12">some error happened {error}</div>;

  return (
    <section className="post-page-container">
      {/* blog details */}
      <BlogDetailCard blog={blog} />
      {/* related  post */}
      <BlogRelated />
    </section>
  );
}
