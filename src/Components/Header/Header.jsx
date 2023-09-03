import "./Header.css";
import Logo from "../../assets/images/logo.svg";
import { useState } from "react";


const Header = () => {

    const [view, setView] = useState(false);

  return (
    <header>
      <div className="header-wrapper">
        <a href="/" className="logo-wrapper">
            <img src={Logo} alt="logo" />
        </a>
        <nav className={`nav-links-wrapper ${view ? "open-menu" : "close-menu"}`}>
            <a href="/" className="nav-link">Home</a>
            <a href="/" className="nav-link">About Us</a>
            <a href="/" className="nav-link">Services</a>
            <a href="/" className="nav-link">Project</a>
            <a href="/" className="nav-link">Contact Us</a>
        </nav>
        <a href="/" className="header-btn">Get Started</a>
        <div className={`nav-mobile-menu ${view && 'close-menu-icon'}`} onClick={()=>setView(!view)}>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
