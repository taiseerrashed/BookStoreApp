import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className='footer-links-wrapper'>
        <div className='footer-links-item'>
            <h3 className='footer-links-item-title'>Usefull Links</h3>
            <ul className='footer-links'>
                <li><Link to="/" className='footer-link'>Home</Link></li>
                <li><Link to="/authors" className='footer-link'>Authors</Link></li>
                <li><Link to="/about" className='footer-link'>About Us</Link></li>
                <li><Link to="/contact" className='footer-link'>Contact Us</Link></li>
                <li><Link to="/register" className='footer-link'>Register</Link></li>
            </ul>
        </div>
        <div className='footer-links-item'>
            <h3 className='footer-links-item-title'>Contact Information</h3>
            <div className='footer-address-wrapper'>
                <div className='footer-address-item'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>Egypt - ElSharkia - Belbeis</span>
                </div>
                <div className='footer-address-item'>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="taiseerrashed@gmail.com" target="_blank">taiseerrashed@gmail.com </a>
                </div>
                <div className='footer-address-item'>
                    <i className="bi bi-telephone-fill"></i>
                    <span>01115603479</span>
                </div>
            </div>
        </div>
        <div className='footer-links-item'>
            <h3 className='footer-links-item-title'>About Us</h3>
            <p className='footer-description'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, optio minima quia laborum corrupti! Lorem ipsum 
                dolor, sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, optio minima quia laborum corrupti! Lorem ipsum 
                dolor, sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
  );
};

export default FooterLinks;