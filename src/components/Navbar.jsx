import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">

        <Link className="navbar-brand" href="/">
          Krishna Tours
        </Link>

    <ul className="navbar-nav mx-auto gap-4">
        
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

        <button className="btn btn-warning">
          Book Now
        </button>

      </div>
    </nav>
  );
}

export default Navbar;