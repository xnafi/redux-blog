import BlogDetailCard from "./BlogDetailCard";
import BlogRelated from "./BlogRelated";

export default function BlogDetails() {
  return (
    <section className="post-page-container">
      {/* blog details */}
      <BlogDetailCard />
      {/* related  post */}
      <BlogRelated />
    </section>
  );
}
