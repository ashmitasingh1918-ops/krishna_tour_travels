import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">

      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          
          <img
            src={logo}
            alt="Krishna Tours Logo"
            className="logo-img"
          />

          <span className="brand-text">
            KRISHNA TOURS
          </span>

        </Link>

        <ul className="navbar-nav ms-auto gap-4">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/fleet">Our Fleet</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/packages">Tour Packages</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;