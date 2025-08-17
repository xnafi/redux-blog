
import BlogDetailCard from './BlogDetailCard';
import BlogRelated from './BlogRelated';

export default function BlogDetails() {
  return (
    <section className="post-page-container">
      <BlogDetailCard/>
      {/* <!-- detailed post ends --> */}
      {/* <!-- related posts --> */}
      <BlogRelated />
      {/* <!-- related posts ends --> */}
    </section>
  );
}
