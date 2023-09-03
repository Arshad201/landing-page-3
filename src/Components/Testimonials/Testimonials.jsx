import "./Testimonial.css";
import userImg from '../../assets/images/user.jpg';

const Testimonials = () => {
  return (
    <section className='testimonial common-container'>
      <div className="testimonial-wrapper">
        <div className="heading-text-container">
            <h2 className="heading-version-1">Our Testimonials</h2>
            <p className="paragraph-version-01">Read some awesome feedback from our students all over the world. We are giving the best to our students</p>
        </div>
        <div className="testimonial-cantainer">
           <div className="testimonial-card">
                <p className="item-version-01">Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                <div className="testimonial-footer">
                    <div>
                        <img src={userImg} alt="" />
                    </div>
                    <div>
                        <h3 className="testimonial-title">BILLY ROOT</h3>
                        <p className="testimonial-desc">Torest</p>
                    </div>
                </div>
           </div>
           <div className="testimonial-card">
                <p className="item-version-01">Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                <div className="testimonial-footer">
                    <div>
                        <img src={userImg} alt="" />
                    </div>
                    <div>
                        <h3 className="testimonial-title">BILLY ROOT</h3>
                        <p className="testimonial-desc">Torest</p>
                    </div>
                </div>
           </div>
           <div className="testimonial-card">
                <p className="item-version-01">Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                <div className="testimonial-footer">
                    <div>
                        <img src={userImg} alt="" />
                    </div>
                    <div>
                        <h3 className="testimonial-title">BILLY ROOT</h3>
                        <p className="testimonial-desc">Torest</p>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
