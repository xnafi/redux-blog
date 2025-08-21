import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../features/RelatedBlogs/RelatedBlogsSlice";
import { Link } from "react-router-dom";

export default function BlogRelated({ tags, currentId }) {
  console.log("blog related", currentId);
  const dispatch = useDispatch();

  const { relatedBlogs } = useSelector((state) => state.relatedBlogs);
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentId }));
  }, [dispatch, currentId, tags]);
  console.log("hello blog", relatedBlogs);
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts {relatedBlogs.length}
      </h4>
      {relatedBlogs.length > 0 ? relatedBlogs.map((blog, index) => (
        <div className="space-y-4 related-post-container" key={index}>
          {/* <!-- related post  --> */}
          <div className="card">
            <Link to={`/blogs/${blog.id}`}>
              <img src={blog?.image} className="card-image" alt="" />
            </Link>
            <div className="p-4">
              <Link
                to={`/blogs/${blog.id}`}
                className="text-lg post-title lws-RelatedPostTitle"
              >
                {blog.title}
              </Link>
              <div className="mb-0 tags">
                <span>#python,</span> <span>#tech,</span> <span>#git</span>
              </div>
              <p>{blog.createdAt}</p>
            </div>
          </div>
          {/* <!-- related post ends --> */}
        </div>
      )) : <span> no related blog found</span>}
    </aside>
  );
}
