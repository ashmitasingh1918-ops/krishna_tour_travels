import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h5>KRISHNA TOURS</h5>
            <p>
              Premium car rental and travel services across India.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>

            <Link to="/">Home</Link><br />
            <Link to="/about">About Us</Link><br />
            <Link to="/fleet">Our Fleet</Link><br />
            <Link to="/packages">Tour Packages</Link><br />
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="col-md-3">
            <h5>Services</h5>

            <p>Car Rental</p>
            <p>Airport Transfer</p>
            <p>Corporate Travel</p>
            <p>Tour Packages</p>
          </div>

          <div className="col-md-3">
            <h5>Contact</h5>

            <p>+91 XXXXX XXXXX</p>
            <p>info@krishnatours.com</p>
            <p>India</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 Krishna Tours. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;