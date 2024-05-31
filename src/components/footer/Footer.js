import React from 'react';
import "./Footer.css";
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="footer">
        <FooterSocial />

        <FooterLinks />
    </footer>
  );
};

export default Footer;