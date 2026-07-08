import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/ltp.png";
import { MdCalendarToday } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

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
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item nav-item-dropdown">
              <Link className="nav-link" to="/fleet">
                Our Fleet <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className="dropdown-menu-custom">
                <li className="has-submenu">
                  <Link to="/fleet?category=sedan">Classic Sedans <span className="side-arrow">›</span></Link>
                  <ul className="dropdown-submenu">
                    <li><Link to="/vehicle/2">Maruti Swift Dzire</Link></li>
                    <li><Link to="/vehicle/1">Maruti Ciaz</Link></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/fleet?category=suv">SUV's & MUV's <span className="side-arrow">›</span></Link>
                  <ul className="dropdown-submenu">
                    <li><Link to="/vehicle/5">Toyota Innova Crysta</Link></li>
                    <li><Link to="/vehicle/4">Toyota Innova Hycross</Link></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/fleet?category=mvp">MVP <span className="side-arrow">›</span></Link>
                  <ul className="dropdown-submenu">
                    <li><Link to="/vehicle/3">Kia Carens</Link></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/fleet?category=van">Mini Vans & Coaches <span className="side-arrow">›</span></Link>
                  <ul className="dropdown-submenu">
                    <li><Link to="/vehicle/6">Tempo Traveller (12S)</Link></li>
                    <li><Link to="/vehicle/7">Force Urbania (17S)</Link></li>
                  </ul>
                </li>
                <li className="divider"></li>
                <li><Link to="/fleet">All Vehicles</Link></li>
              </ul>
            </li>

            <li className="nav-item nav-item-dropdown">
              <Link className="nav-link" to="/packages">
                Tour Packages <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className="dropdown-menu-custom">
                <li><Link to="/packages/delhi-local">Delhi Local City Tour</Link></li>
                <li><Link to="/packages/delhi-agra-delhi-2n">Delhi-Agra-Delhi Tour</Link></li>
                <li><Link to="/packages/golden-triangle">Golden Triangle Tour</Link></li>
                <li><Link to="/packages/delhi-haridwar-rishikesh">Haridwar & Rishikesh</Link></li>
              
                <li className="divider"></li>
                <li><Link to="/packages">All Tour Packages</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

            <li className="nav-item nav-btn-item">
              <Link className="nav-btn-book" to="/contact#contactForm">
                <MdCalendarToday className="nav-btn-icon" /> Book Your Journey
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;