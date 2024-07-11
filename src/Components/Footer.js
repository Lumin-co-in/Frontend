import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer>
      <div className="footer-top">
        <div className="left-col">
          <p className="logo-footer">Lumin</p>
        </div>
        <div className="middle-col" id="contactus">
          <p className="footer-text">Follow us</p>
          <div className="smcontainer">
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="social-media-link cta-btn"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="social-media-link cta-btn"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="social-media-link cta-btn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="footer-text1">OR</p>
          <p className="footer-text">
            Mail us at{" "}
            <a className="mail" href="mailto:lumin9279@gmail.com">lumin9279@gmail.com</a>
          </p>
        </div>
      </div>
      <nav className="footer-nav">
        <a href="/" className="nav-link">
          Careers
        </a>
        <a href="/" className="nav-link">
          Terms of Service
        </a>
        <a href="/" className="nav-link">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
