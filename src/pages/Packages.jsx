import "./Packages.css";
import delhiTour from "../assets/images/delhi_tour.png";
import agra from "../assets/images/agra.png";
import delhi from "../assets/images/delhi.png";
import triangle from "../assets/images/triangle.png";
import jaipur from "../assets/images/jaipur.png";
import hari from "../assets/images/hari.png";
import { Link } from "react-router-dom";
function Packages() {
  return (
    <>
  {/* Hero Section */}
  <section className="packages-hero">

  <div className="hero-overlay">

    <div className="container h-100">

      <div className="row h-100 align-items-center">

        <div className="col-md-6 hero-content">

          <h1>Explore Our Tour Packages </h1>

          <p>
            Experience the soul of India through meticulously curated journeys starting from the historic heart of Delhi. Luxury pilgrimages designed with ancient tradition and modern precision.
          </p>

        </div>

      </div>

    </div>

  </div>
  </section>
  {/* Packages Section */}
<section className="packages-section py-5">

  <div className="container">

    <div className="text-center mb-5">
      <h2>Our Tour Packages</h2>
      <p>
        Discover India's most loved destinations with our carefully crafted tour experiences.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-md-4">
        <div className="package-card">

          <img
            src={delhiTour}
            alt="Delhi Tour"
            className="img-fluid"
          />

          <div className="package-content">
            <h5>Delhi Local City Tour</h5>

            <p>1 Night / 2 Days</p>

            <h6>₹2,500</h6>

            <Link
  to="/packages/delhi-local"
  className="btn btn-warning"
>
  View Details
</Link>
          </div>

        </div>
      </div>

      <div className="col-md-4">
        <div className="package-card">

          <img
            src={delhi}
            alt="Agra Tour"
            className="img-fluid"
          />

          <div className="package-content">
            <h5>Delhi-Agra-Delhi</h5>

            <p>2 Nights / 3 Days</p>

            <h6>₹6,500</h6>

            <Link
  to="/packages/delhi-agra-delhi-2n"
  className="btn btn-warning"
>
  View Details
</Link>
          </div>

        </div>
      </div>

      <div className="col-md-4">
        <div className="package-card">

          <img
            src={triangle}
            alt="Golden Triangle"
            className="img-fluid"
          />

          <div className="package-content">
            <h5>Golden Triangle Tour</h5>

            <p>6 Nights / 7 Days</p>

            <h6>₹24,900</h6>

            <Link
  to="/packages/golden-triangle"
  className="btn btn-warning"
>
  View Details
</Link>
          </div>

        </div>
      </div>

    </div>

  </div>



</section>

<section className="packages-section py-5">

  <div className="container">

    <div className="row g-4">

      <div className="col-md-4">
        <div className="package-card">

          <img
            src={jaipur}
            alt="Delhi Tour"
            className="img-fluid"
          />

          <div className="package-content">
            <h5>Delhi-Agra-Jaipur-Delhi</h5>

            <p>3 Nights / 4 Days</p>

            <h6>₹2,500</h6>

           <Link
  to="/packages/delhi-agra-jaipur-delhi"
  className="btn btn-warning"
>
  View Details
</Link>
          </div>

        </div>
      </div>

      <div className="col-md-4">
        <div className="package-card">

          <img
            src={agra}
            alt="Agra Tour"
            className="img-fluid"
          />

          <div className="package-content">
            <h5>Delhi-Agra-Delhi</h5>

            <p>1 Night / 2 Days</p>

            <h6>₹6,500</h6>

            <Link
  to="/packages/delhi-agra-delhi-1n"
  className="btn btn-warning"
>
  View Details
</Link>
          </div>

        </div>
      </div>

      <div className="col-md-4">
        <div className="package-card">

          <img
            src={hari}
            alt="Golden Triangle"
            className="img-fluid"
          />

          <div className="package-content">
            <h5>Delhi-Haridwar-Rishikesh-Delhi</h5>

            <p>1 Night / 2 Days</p>

            <h6>₹24,900</h6>

            <Link
  to="/packages/delhi-haridwar-rishikesh"
  className="btn btn-warning"
>
  View Details
</Link>
          </div>

        </div>
      </div>

    </div>

  </div>



</section>
{/* Why Book With Us */}
<section className="why-book-section py-5">

  <div className="container">

    <div className="text-center mb-5">

      <h2>Why Book With Us</h2>

      <p>
        Elite service standards designed for travelers who value tradition,
        comfort, and reliability.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-md-4">
        <div className="why-card text-center">

          <div className="icon-circle">
            <i className="bi bi-patch-check"></i>
          </div>

          <h4>Local Expertise</h4>

          <p>
            Our guides are historians and locals who know the pulse of every
            ancient monument.
          </p>

        </div>
      </div>

      <div className="col-md-4">
        <div className="why-card text-center">

          <div className="icon-circle">
            <i className="bi bi-car-front"></i>
          </div>

          <h4>Premium Fleet</h4>

          <p>
            Travel in sanitised, high-end sedans and SUVs with professional
            uniformed chauffeurs.
          </p>

        </div>
      </div>

      <div className="col-md-4">
        <div className="why-card text-center">

          <div className="icon-circle">
            <i className="bi bi-headset"></i>
          </div>

          <h4>24/7 Support</h4>

          <p>
            Dedicated concierge team available round the clock for your safety
            and convenience.
          </p>

        </div>
      </div>

    </div>

  </div>

</section>

  

</>
  );
}

export default Packages;