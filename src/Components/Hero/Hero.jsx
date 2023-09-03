import "./Hero.css";

import heroImg from "../../assets/images/hero.png";
import btnIcon from "../../assets/icons/btnArrow.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
            <h5 className="hero-subtitle">Ninad Creative Agency</h5>
            <h1 className="hero-heading">Creative <span>Mind</span> With Creative People</h1>
            <p className="hero-text">It is a long established fact that a reader will be distracted by the readable content of a page when at its layout.</p>
            <a href="/" className="hero-btn">
                <span>
                    Read-More
                </span>
                <img src={btnIcon} alt="readmoreicon" />
            </a>
        </div>
        <div className="hero-img-wrapper">
            <img src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
