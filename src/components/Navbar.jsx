import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/final2.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">

      <div className="container-fluid">

        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >
          <img
            src={logo}
            alt="Krishna Tours Logo"
            className="logo-img"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/fleet">
                Our Fleet
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/packages">
                Tour Packages
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;