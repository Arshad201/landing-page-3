import "./Services.css";
import runningIcon from "../../assets/icons/running.svg";
import archeryIcon from "../../assets/icons/archery.svg";
import moneyIcon from "../../assets/icons/moneyCoins.svg";

const Services = () => {
  return (
    <section className='services common-container'>
      <div className="services-wrapper common-wrapper">
        <div className="heading-text-container">
            <h2 className="heading-version-1">Explore Service</h2>
            <p className="paragraph-version-01">The sky was cloudless and of a deep dark blue spectacle before us was indeed sublime.</p>
        </div>
        <div className="services-grid">
            <div className="service-card">
                <div>
                </div>
                <img src={runningIcon} alt="product-management" />
                <h3 className="service-title">Product Management</h3>
                <p className="service-desc">Stay on top of your task lists and stay in touch with what's happening</p>
            </div>
            <div className="service-card">
                <div>
                </div>
                <img src={archeryIcon} alt="product-management" />
                <h3 className="service-title">Design & Creatives</h3>
                <p className="service-desc">Stay on top of your task lists and stay in touch with what's happening</p>
            </div>
            <div className="service-card">
                <div>
                </div>
                <img src={moneyIcon} alt="product-management" />
                <h3 className="service-title">Marketing & Communication</h3>
                <p className="service-desc">Stay on top of your task lists and stay in touch with what's happening</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
