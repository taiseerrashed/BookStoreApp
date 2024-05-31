const FooterSocial = () => {
  return (
    <div className='footer-social-media'>
        <div className='footer-social-media-text'>
            <h3>Follow me on social media</h3>
        </div>
        <div className='footer-social-media-icons'>
            <div className='footer-social-media-icon'>
                <a href="https://www.linkedin.com/in/taiseer-salah-9b0a3221a/" target=" _blank">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            <div className='footer-social-media-icon'>
                <a href="https://github.com/taiseerrashed" target=" _blank">
                    <i className="bi bi-github"></i>
                </a>
            </div>
            <div className='footer-social-media-icon'>
                <a href="#"><i className="bi bi-facebook"></i></a>
            </div>
            <div className='footer-social-media-icon'>
                <a href="#"><i className="bi bi-telegram"></i></a>
            </div>
            <div className='footer-social-media-icon'>
                <a href="#"><i className="bi bi-whatsapp"></i></a>
            </div>
        </div>
    </div>
  );
};

export default FooterSocial;