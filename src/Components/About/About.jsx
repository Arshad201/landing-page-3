import "./About.css";
import aboutImage from "../../assets/images/aboutImage.jpg";
import redCardArrow from "../../assets/icons/redCardArrow.svg";

const About = () => {
  return (
    <section className='about common-container'>
      <div className="about-wrapper">
        <div className="about-image-wrapper">
            <img src={aboutImage} alt="about" />
            <div className="red-card">
              <div>
                <h4 className="red-card-title">68%</h4>
                <div className="iconCircle">
                  <img src={redCardArrow} alt="" />
                </div>
              </div>
                <p className="red-card-desc">Extra growth for <br/>your company.</p>
            </div>
        </div>
        <div className="about-content">
          <span className="item-version-01">About</span>
          <h2 className="heading-version-1">Creating, Communicating & Delivering</h2>
          <p className="item-version-01">Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p>
          <a href="/" className="item-version-01">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About
