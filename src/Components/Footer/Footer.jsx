import "./Footer.css";
import fbIcon from '../../assets/icons/fb.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instaIcon from '../../assets/icons/insta.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-widgets">
        <div className="logo">
            <a href="/">
                <h2 className="heading-version-2">WD</h2>
            </a>
        </div>
        <div className="widget">
            <h3 className="item-version-01">Menu</h3>
            <a href="/" className="item-version-01">About</a>
            <a href="/" className="item-version-01">Portfolio</a>
            <a href="/" className="item-version-01">Blog</a>
            <a href="/" className="item-version-01">Contact</a>
        </div>
        <div className="widget">
            <h3 className="item-version-01">Service</h3>
            <a href="/" className="item-version-01">User Experience</a>
            <a href="/" className="item-version-01">User Interface</a>
            <a href="/" className="item-version-01">Logotype</a>
            <a href="/" className="item-version-01">See More</a>
        </div>
        <div className="social-icons">
            <a href='/' className="social-icon-wrapper">
                <img src={fbIcon} alt="" />
            </a>
            <a href='/' className="social-icon-wrapper">
                <img src={twitterIcon} alt="" />
            </a>
            <a href='/' className="social-icon-wrapper">
                <img src={instaIcon} alt="" />
            </a>
        </div>
      </div>
      <div className="bottom-footer">
        <span className="item-version-01">Copyright © 2020 Laaqiq. All Rights Reserved.</span>
        <div className="bottom-footer-link">
            <a href="/" className="item-version-01">Terms of Use</a>
            <a href="/" className="item-version-01">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
