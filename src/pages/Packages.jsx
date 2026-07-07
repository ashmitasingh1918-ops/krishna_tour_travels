import "./Packages.css";
import delhiTour from "../assets/images/delhi_tour.png";
import agra from "../assets/images/agra.png";
import delhi from "../assets/images/delhi.png";
import triangle from "../assets/images/triangle.png";
import jaipur from "../assets/images/jaipur.png";
import hari from "../assets/images/hari.png";
import tour from "../assets/images/tour.png";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
function Packages() {
  return (
    <>
  {/* Hero Section */}
  {/* Hero Section */}
<section
  className="packages-hero"
  style={{
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.35),
      rgba(0,0,0,0.35)
    ), url(${tour})`,
  }}
>
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-md-6 hero-content">
        <h1>Explore Our Tour Packages</h1>
        <p>
          Experience the soul of India through meticulously curated journeys
          starting from the historic heart of Delhi. Luxury pilgrimages
          designed with ancient tradition and modern precision.
        </p>
      </div>
    </div>
  </div>
</section>
  {/* Packages Section */}
<section className="packages-section py-5">
  <div className="container">
    <div className="section-header mb-5">
      <h2>Our Tour Packages</h2>
      <p>
        Discover India's most loved destinations with our carefully crafted tour experiences.
      </p>
    </div>

    <div className="row g-4">
      {/* Tour Card 1 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="package-card-improved">
          <div className="package-image-wrapper">
            <div className="package-duration-badge">1N / 2D</div>
            <img
              src={delhiTour}
              alt="Delhi Tour"
              className="img-fluid w-100"
            />
          </div>
          <div className="package-card-content-improved">
            <h5 className="package-title-improved">Delhi Local City Tour</h5>
            <p className="package-duration-improved">📍 1 Night / 2 Days</p>
            <p className="package-desc-improved">Experience the rich heritage and culture with our exclusive local city tour.</p>
            <Link
              to="/packages/delhi-local"
              className="package-btn-improved"
            >
              View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tour Card 2 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="package-card-improved">
          <div className="package-image-wrapper">
            <div className="package-duration-badge">2N / 3D</div>
            <img
              src={delhi}
              alt="Delhi-Agra-Delhi"
              className="img-fluid w-100"
            />
          </div>
          <div className="package-card-content-improved">
            <h5 className="package-title-improved">Delhi-Agra-Delhi</h5>
            <p className="package-duration-improved">📍 2 Nights / 3 Days</p>
            <p className="package-desc-improved">A perfect short getaway to witness the majestic Taj Mahal and historical wonders of Agra.</p>
            <Link
              to="/packages/delhi-agra-delhi-2n"
              className="package-btn-improved"
            >
              View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tour Card 3 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="package-card-improved">
          <div className="package-image-wrapper">
            <div className="package-duration-badge">6N / 7D</div>
            <img
              src={triangle}
              alt="Golden Triangle Tour"
              className="img-fluid w-100"
            />
          </div>
          <div className="package-card-content-improved">
            <h5 className="package-title-improved">Golden Triangle Tour</h5>
            <p className="package-duration-improved">📍 6 Nights / 7 Days</p>
            <p className="package-desc-improved">Explore the vibrant culture of India by visiting the iconic cities of Delhi, Agra, and Jaipur.</p>
            <Link
              to="/packages/golden-triangle"
              className="package-btn-improved"
            >
              View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
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
      {/* Tour Card 4 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="package-card-improved">
          <div className="package-image-wrapper">
            <div className="package-duration-badge">3N / 4D</div>
            <img
              src={jaipur}
              alt="Delhi-Agra-Jaipur-Delhi"
              className="img-fluid w-100"
            />
          </div>
          <div className="package-card-content-improved">
            <h5 className="package-title-improved">Delhi-Agra-Jaipur-Delhi</h5>
            <p className="package-duration-improved">📍 3 Nights / 4 Days</p>
            <p className="package-desc-improved">Comprehensive golden triangle experience with extended exploration of Jaipur's pink city charm.</p>
            <Link
              to="/packages/delhi-agra-jaipur-delhi"
              className="package-btn-improved"
            >
              View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tour Card 5 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="package-card-improved">
          <div className="package-image-wrapper">
            <div className="package-duration-badge">1N / 2D</div>
            <img
              src={agra}
              alt="Delhi-Agra"
              className="img-fluid w-100"
            />
          </div>
          <div className="package-card-content-improved">
            <h5 className="package-title-improved">Delhi-Agra-Delhi</h5>
            <p className="package-duration-improved">📍 1 Night / 2 Days</p>
            <p className="package-desc-improved">Quick escape to marvel at the Taj Mahal and the architectural splendor of Agra fort.</p>
            <Link
              to="/packages/delhi-agra-delhi-1n"
              className="package-btn-improved"
            >
              View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tour Card 6 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="package-card-improved">
          <div className="package-image-wrapper">
            <div className="package-duration-badge">1N / 2D</div>
            <img
              src={hari}
              alt="Delhi-Haridwar-Rishikesh"
              className="img-fluid w-100"
            />
          </div>
          <div className="package-card-content-improved">
            <h5 className="package-title-improved">Delhi-Haridwar-Rishikesh-Delhi</h5>
            <p className="package-duration-improved">📍 1 Night / 2 Days</p>
            <p className="package-desc-improved">Spiritual journey to holy destinations with river rafting and yoga experiences in Rishikesh.</p>
            <Link
              to="/packages/delhi-haridwar-rishikesh"
              className="package-btn-improved"
            >
              View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Why Book With Us */}
{/* Why Book With Us */}
<section className="why-book-section py-5">

  <div className="container">

    <div className="section-header text-center mb-5">

      <span className="section-tag">WHY CHOOSE KRISHNA TOUR INDIA</span>

      <div className="section-divider">
        <span></span>
        <i className="bi bi-flower1"></i>
        <span></span>
      </div>

      <h2>Why Book With Us</h2>

      <p>
        Elite service standards designed for travelers who value
        tradition, comfort, and reliability.
      </p>

    </div>

    <div className="row g-4">

      {/* Card 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="why-card text-center">

          <div className="icon-circle">
            <i className="bi bi-patch-check"></i>
          </div>

          <div className="mini-divider"></div>

          <h4>Local Expertise</h4>

          <p>
            Our experienced local guides bring every destination to life
            with authentic stories and deep cultural knowledge.
          </p>

        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="why-card text-center">

          <div className="icon-circle">
            <i className="bi bi-car-front"></i>
          </div>

          <div className="mini-divider"></div>

          <h4>Premium Fleet</h4>

          <p>
            Travel in impeccably maintained sedans, SUVs and luxury
            vehicles driven by courteous professional chauffeurs.
          </p>

        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-4 col-md-6 mx-md-auto">
        <div className="why-card text-center">

          <div className="icon-circle">
            <i className="bi bi-headset"></i>
          </div>

          <div className="mini-divider"></div>

          <h4>24/7 Support</h4>

          <p>
            Our dedicated travel assistance team is available around the
            clock to ensure a seamless journey from start to finish.
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