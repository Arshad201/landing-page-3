import "./Work.css";
import uiImage from "../../assets/images/ui.jpg";
import portfolio1 from "../../assets/images/portfolio1.jpg";
import portfolio2 from "../../assets/images/portfolio2.jpg";

const Work = () => {
  return (
    <section className='work common-container'>
      <div className="work-wrapper">
        <div className="heading-text-container">
            <h2 className="heading-version-1">Discover Our Work</h2>
            <p className="paragraph-version-01">Web designer is responsible for creating the design and layout of a website</p>
        </div>
        <div className="red-component-wrapper">
            <div className="red-component">
                <div className="text-content">
                    <span className="item-version-01">User Interface</span>
                    <h3 className="heading-version-2">Creative Agency & Portfolio</h3>
                    <p className="item-version-01">Web designers plan, create and code internet sites and web pages, text with sounds.</p>
                </div>
                <div className="image-wrapper">
                    <img src={uiImage} alt="work" />
                </div>
            </div>
        </div>
        <div className="protfolio-image-container">
            <div>
                <img src={portfolio1} alt="" />
            </div>
            <div>
                <img src={portfolio2} alt="" />
            </div>
        </div>
        <div className="num-card-container">
            <div className="num-card">
                <div className="num-wrapper">
                    <span className="number  heading-version-1">4.200</span>
                    <span className="unit  heading-version-2">%</span>
                </div>
                <span className="num-text paragraph-version-01">Revenue</span>
            </div>
            <div className="num-card">
                <div className="num-wrapper">
                    <span className="number  heading-version-1">73</span>
                    <span className="unit  heading-version-2">+</span>
                </div>
                <span className="num-text paragraph-version-01">Projects</span>
            </div>
            <div className="num-card">
                <div className="num-wrapper">
                    <span className="number  heading-version-1">99.5</span>
                    <span className="unit  heading-version-2">+</span>
                </div>
                <span className="num-text paragraph-version-01">Uptime</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work
