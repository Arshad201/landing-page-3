import "./Blogs.css";
import blogImage1 from "../../assets/images/blog-img1.jpg";
import blogImage2 from "../../assets/images/blog-img2.jpg";
import blogImage3 from "../../assets/images/blog-img3.jpg";

const Blogs = () => {
  return (
    <section className='blog common-container'>
      <div className="blogs-wrapper">
        <h2 className="heading-version-2">Latest From Blog</h2>
        <div className="blogs-container">
            <div className="blog-card">
                <img src={blogImage1} alt="" />
                <div>
                    <h3 className="blog-title">Build prototypes with thousands of components.</h3>
                    <p className="blog-desc item-version-01">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
                    <a href="/" className="learn-more-link">Read more</a>
                </div>
            </div>
            <div className="blog-card">
                <img src={blogImage2} alt="" />
                <div>
                    <h3 className="blog-title">Build prototypes with thousands of components.</h3>
                    <p className="blog-desc item-version-01">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
                    <a href="/" className="learn-more-link">Read more</a>
                </div>
            </div>
            <div className="blog-card">
                <img src={blogImage3} alt="" />
                <div>
                    <h3 className="blog-title">Build prototypes with thousands of components.</h3>
                    <p className="blog-desc item-version-01">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
                    <a href="/" className="learn-more-link">Read more</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs