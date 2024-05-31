import React from 'react';
import "./Contact.css";

const Contact = () => {
    
  return (
    <section className="contact">
        <div className="contact-wrapper">
            <div className="contact-item">
                <div className="contact-item-info">
                    <i className="bi bi-person-circle"></i>
                    <h4>Name</h4>
                    <p>Taiseer Salah</p>
                </div>
            </div>
            <div className="contact-item">
                <div className="contact-item-info">
                    <i className="bi bi-telephone-fill"></i>
                    <h4>Phone</h4>
                    <p>+20-111-560-3479</p>
                </div>
            </div>
            <div className="contact-item">
                <div className="contact-item-info">
                    <i className="bi bi-envelope-fill"></i>
                    <h4>Email</h4>
                    <p>taiseerrashed@gmail.com</p>
                </div>
            </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <h3 className="contact-form-title">Contact Us Form</h3>
            <div className="contact-input-wrapper">
                <input type="text" placeholder="Name *" />
                <input type="text" placeholder="Subject *" />
                <input type="email" placeholder="Email *" />
            </div>
            <textarea className="contact-textarea" rows="5" placeholder="Your Message *"></textarea>
            <button className="contact-btn">Send</button>
        </form>
    </section>
  );
};

export default Contact;