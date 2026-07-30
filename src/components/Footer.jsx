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
                RZ-7/232 J-Block west, sagarpur, near Sakuntla hospital, new delhi 110046 (India)
              </p>
            </div>

            <div className="footer-social-links mt-3">
              <a href="https://www.facebook.com/share/1bgpof5NUT/" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://wa.me/8800770603?text=Hello%20Krishna%20Tour%20India,%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><i className="bi bi-whatsapp"></i></a>
              <a href="https://www.instagram.com/krishna_tour_india?igsh=MWRjNDk1eG9seXJ4cg==" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://www.tripadvisor.in/Attraction_Review-g304551-d33496890-Reviews-Krishna_Tour_India-New_Delhi_National_Capital_Territory_of_Delhi.html" target="_blank" rel="noopener noreferrer" className="social-icon tripadvisor">
                <svg viewBox="0 0 64 64" width="20" height="20" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M39.1 13.516a50.1 50.1 0 0 1 5.3 1.209 32.624 32.624 0 0 1 8.492 3.929 1.435 1.435 0 0 0 .7.2h10.189v.1a4.39 4.39 0 0 0-.4.705 16.853 16.853 0 0 0-2.5 5.239.477.477 0 0 0 .1.6 15.734 15.734 0 0 1 2.5 13.3 15.315 15.315 0 0 1-7.094 9.772 15.97 15.97 0 0 1-8.487 2.422 15.691 15.691 0 0 1-3.8-.5 16.211 16.211 0 0 1-7.893-4.634 9.057 9.057 0 0 1-.9-1.007c-1.1 1.713-2.3 3.425-3.4 5.138-1.2-1.713-2.3-3.425-3.4-5.037-.1 0-.1 0-.1.1l-.1.1a15.544 15.544 0 0 1-9.891 5.641 14.656 14.656 0 0 1-6.594-.4 15.314 15.314 0 0 1-7.793-4.936 15.784 15.784 0 0 1-3.8-8.16 13.951 13.951 0 0 1 .3-6.347 13.547 13.547 0 0 1 2.4-5.339.76.76 0 0 0 .1-.5 21.114 21.114 0 0 0-2.2-4.836 7.687 7.687 0 0 0-.8-1.108v-.1h9.9c.1 0 .3-.1.4-.1a34.036 34.036 0 0 1 7.194-3.526 50.8 50.8 0 0 1 5.6-1.511 33.995 33.995 0 0 1 5.6-.705 41.028 41.028 0 0 1 10.377.291zm-4 21.458a12.789 12.789 0 1 0 12.6-12.895 12.8 12.8 0 0 0-12.593 12.895zM15.924 22.079a12.846 12.846 0 1 0 12.788 12.895 12.706 12.706 0 0 0-12.788-12.895zm.7-3.324a15.746 15.746 0 0 1 10.091 4.231 16.211 16.211 0 0 1 5.2 9.772A16.351 16.351 0 0 1 37 23.087a15.491 15.491 0 0 1 10-4.231 36.237 36.237 0 0 0-14.187-3.022 38.507 38.507 0 0 0-16.19 2.921z" />
                </svg>
              </a>
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
              <li><Link to="/blog"><i className="bi bi-chevron-right gold-chevron"></i> Blog</Link></li>
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
                <span> +91 8800770603 </span>
              </div>
              <div className="contact-row">
                <div className="icon-circle-blue">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <span>+91 9717393115</span>
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
                <span>Krishnatourindia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="footer-bottom-divider"></div>
              <p className="copyright-text mb-0">
                &copy; {new Date().getFullYear()} <span className="fw-bold">KRISHNA TOUR INDIA</span>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;