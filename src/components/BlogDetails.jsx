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
  console.log(blogId);

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  // what to do
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">some error happened {error}</div>;
  if (!isLoading && !isError && blog?.id) {
    content = <BlogDetailCard blog={blog} />;
  }

  return (
    <section className="post-page-container">
      {content}
      <BlogRelated currentId={blog.id} tags={blog.tags} />
    </section>
  );
}
