import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-exact">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Column 1: Address & Logo */}
          <div className="col-lg-3 footer-col first-col">
            <h5 className="footer-title">KRISHNA TOUR INDIA</h5>
            <div className="title-sep"></div>

            <div className="contact-info-row d-flex align-items-start mb-2">
              <i className="bi bi-geo-alt-fill me-3 title-magenta"></i>
              <p className="address-text">
                Rz-7/232 J-Block west sagarpur new delhi 110046 near Sakuntla hospital
              </p>
            </div>

            <div className="footer-social-links mt-3">
              <a href="#" className="social-icon facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://wa.me/8920462315?text=Hello%20Krishna%20Tour%20India,%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="social-icon instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon twitter"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>


          {/* Column 2: Quick Links */}
          <div className="col-lg-3 footer-col border-left">
            <h5 className="footer-title">QUICK LINKS</h5>
            <div className="title-sep diamond"></div>

            <ul className="footer-links-list">
              <li><Link to="/"><i className="bi bi-chevron-right gold-chevron"></i> Home</Link></li>
              <li><Link to="/about"><i className="bi bi-chevron-right gold-chevron"></i> About Us</Link></li>
              <li><Link to="/fleet"><i className="bi bi-chevron-right gold-chevron"></i> Our Fleet</Link></li>
              <li><Link to="/contact"><i className="bi bi-chevron-right gold-chevron"></i> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-lg-3 footer-col border-left">
            <h5 className="footer-title">SERVICES</h5>
            <div className="title-sep diamond"></div>

            <div className="service-items-list">
              <div className="service-row">
                <i className="bi bi-car-front-fill gold-icon"></i>
                <span>Car Rental</span>
              </div>
              <div className="service-row">
                <i className="bi bi-airplane-fill gold-icon"></i>
                <span>Airport Transfer</span>
              </div>
              <div className="service-row">
                <i className="bi bi-briefcase-fill gold-icon"></i>
                <span>Corporate Travel</span>
              </div>
              <div className="service-row">
                <i className="bi bi-luggage-fill gold-icon"></i>
                <span>Tour Packages</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="col-lg-3 footer-col border-left last-col">
            <h5 className="footer-title">CONTACT</h5>
            <div className="title-sep diamond"></div>

            <div className="contact-details-list">
              <div className="contact-row">
                <div className="icon-circle-blue">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <span>+91 8800770603</span>
              </div>
              <div className="contact-row">
                <div className="icon-circle-blue">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <span>+91 8920462315</span>
              </div>
              <div className="contact-row">
                <div className="icon-circle-blue">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <span>info@krishnatourindia.com</span>
              </div>
              <div className="contact-row">
                <div className="icon-circle-blue">
                  <i className="bi bi-globe"></i>
                </div>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;