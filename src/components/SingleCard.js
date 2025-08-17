import React from "react";
import { Link } from "react-router-dom";

export default function SingleCard({ blog }) {
  const { image, title, likes, tags, id } = blog || {};
  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">2023-05-01</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <a href="post.html" className="lws-postTitle">
          {title}
        </a>
        <div className="lws-tags">
          {tags.map((tag, index) => {
            return <span key={index}>#{tag}</span>;
          })}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
}
