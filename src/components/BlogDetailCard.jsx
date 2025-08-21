import { useDispatch, useSelector } from "react-redux";
import { updateSavedStatus } from "../features/SingleBlog/SingleBlogSlice";

export default function BlogDetailCard({ blog: initialBlog }) {
  const { image, title, likes, tags, isSaved, description, id } =
    initialBlog || {};
  const dispatch = useDispatch();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog // ✅ correct slice name
  );

 const handleToggleSave = () => {
   dispatch(
     updateSavedStatus({
       blogId: id,
       isSaved: !blog.isSaved, 
       likes: blog.likes,
     })
   );
 };
 const handleLike = () => {
   dispatch(
     updateSavedStatus({
       blogId: id,
       isSaved: blog.isSaved, // keep saved as is
       likes: blog.likes + 1, // increment likes
     })
   );
 };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error}</p>;

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag, index) => (
            <span key={index}> #{tag}</span>
          ))}
        </div>
        <div className="btn-group">
          <button
            onClick={handleLike}
            className="like-btn"
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          <button
            onClick={handleToggleSave}
            className={`save-btn ${isSaved ? "active" : ""}`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isSaved ? "Unsave" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
