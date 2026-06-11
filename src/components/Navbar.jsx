import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Krishna Tours
        </a>

    <ul className="navbar-nav mx-auto gap-4">
        
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Our Fleet</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#"> Tour Packages</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
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