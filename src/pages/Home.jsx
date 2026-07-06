import React, { useState, useEffect } from 'react';
import {
  MdVerifiedUser, MdSupportAgent, MdCleaningServices, MdPriceCheck,
  MdPeople, MdAcUnit, MdCalendarToday, MdArrowForward,
  MdAccessTime, MdCheckCircleOutline, MdShield, MdWeekend, MdVerified
} from 'react-icons/md';
import './Home.css';
import './Packages.css';
import './Fleet.css';
import { Link } from "react-router-dom";
import fleetData from "./Fleet_api";
import VehicleCard from "./VehicleCard";
import delhiTour from "../assets/images/delhi_tour.png";
import delhi from "../assets/images/delhi.png";
import triangle from "../assets/images/triangle.png";
import logo from "../assets/images/ltp.png";

// Helper components for gold flourishes and dividers
const GoldFlourish = ({ isLeft }) => (
  <svg 
    className={`heading-flourish ${isLeft ? 'flourish-left' : 'flourish-right'}`}
    viewBox="0 0 80 20" 
    width="80" 
    height="20"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    {isLeft ? (
      <path 
        d="M 80 10 C 60 10, 45 18, 30 12 C 15 6, 10 15, 2 10" 
        stroke="#c2941b" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />
    ) : (
      <path 
        d="M 0 10 C 20 10, 35 18, 50 12 C 65 6, 70 15, 78 10" 
        stroke="#c2941b" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />
    )}
    <circle cx={isLeft ? "76" : "4"} cy="10" r="3" fill="#c2941b" />
    <circle cx={isLeft ? "66" : "14"} cy="10" r="2" fill="#c2941b" />
  </svg>
);

const GoldDivider = () => (
  <div className="gold-divider-wrapper" style={{ margin: '4px auto 12px auto', textAlign: 'center' }}>
    <svg viewBox="0 0 100 20" width="100" height="20" style={{ display: 'block', margin: '0 auto' }}>
      <path d="M 0 10 L 40 10 M 60 10 L 100 10" stroke="#c2941b" strokeWidth="1" strokeLinecap="round" />
      <polygon points="50,4 56,10 50,16 44,10" fill="#c2941b" />
      <circle cx="40" cy="10" r="2" fill="#c2941b" />
      <circle cx="60" cy="10" r="2" fill="#c2941b" />
    </svg>
  </div>
);

const Home = () => {
  const slides = [
    '/newsite/images/newhome.jpeg',
    '/newsite/images/home2.jpeg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fleetPage, setFleetPage] = useState(0);
  const [isFleetAnimating, setIsFleetAnimating] = useState(false);

  // Calculate total fleet pages (3 vehicles per page)
  const vehiclesPerPage = 3;
  const totalFleetPages = Math.ceil(fleetData.length / vehiclesPerPage);
  const currentFleetVehicles = fleetData.slice(
    fleetPage * vehiclesPerPage,
    (fleetPage + 1) * vehiclesPerPage
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Fleet carousel handlers
  const handleNextFleet = () => {
    if (!isFleetAnimating && fleetPage < totalFleetPages - 1) {
      setIsFleetAnimating(true);
      setTimeout(() => {
        setFleetPage((prev) => prev + 1);
        setIsFleetAnimating(false);
      }, 600); // Match CSS transition duration
    }
  };

  const handlePreviousFleet = () => {
    if (!isFleetAnimating && fleetPage > 0) {
      setIsFleetAnimating(true);
      setTimeout(() => {
        setFleetPage((prev) => prev - 1);
        setIsFleetAnimating(false);
      }, 600); // Match CSS transition duration
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Slideshow */}
        <div className="hero-slideshow">
          <div
            className="hero-slides-track"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide})`,
                  width: `${100 / slides.length}%`
                }}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="container hero-content-wrapper">
          <div className="hero-left-col">

          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="section promise-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-pretitle promise-pretitle">OUR PROMISE</span>
            <h2 className="section-title promise-section-title">
              <GoldFlourish isLeft={true} />
              Excellence in Every Journey
              <GoldFlourish isLeft={false} />
            </h2>
            <p className="promise-subtitle">We don't just take you places, we create experiences</p>
            <GoldDivider />
          </div>

          <div className="promise-grid">
            {/* Card 1 */}
            <div className="promise-card">
              <div className="card-accent top-left"></div>
              <div className="card-accent top-right"></div>
              <div className="card-accent bottom-left"></div>
              <div className="card-accent bottom-right"></div>
              <div className="promise-icon-wrapper">
                <MdShield className="promise-icon" />
              </div>
              <h3 className="promise-title">Verified Drivers</h3>
              <p className="promise-desc">Background-checked, professional chauffeurs with deep route knowledge.</p>
            </div>

            {/* Card 2 */}
            <div className="promise-card">
              <div className="card-accent top-left"></div>
              <div className="card-accent top-right"></div>
              <div className="card-accent bottom-left"></div>
              <div className="card-accent bottom-right"></div>
              <div className="promise-icon-wrapper">
                <MdSupportAgent className="promise-icon" />
              </div>
              <h3 className="promise-title">24/7 Support</h3>
              <p className="promise-desc">Dedicated concierge team available around the clock for any assistance.</p>
            </div>

            {/* Card 3 */}
            <div className="promise-card">
              <div className="card-accent top-left"></div>
              <div className="card-accent top-right"></div>
              <div className="card-accent bottom-left"></div>
              <div className="card-accent bottom-right"></div>
              <div className="promise-icon-wrapper">
                <MdCleaningServices className="promise-icon" />
              </div>
              <h3 className="promise-title">Clean Vehicles</h3>
              <p className="promise-desc">Immaculate, sanitized interiors with premium amenities for every ride.</p>
            </div>

            {/* Card 4 */}
            <div className="promise-card">
              <div className="card-accent top-left"></div>
              <div className="card-accent top-right"></div>
              <div className="card-accent bottom-left"></div>
              <div className="card-accent bottom-right"></div>
              <div className="promise-icon-wrapper">
                <span className="promise-rupee-icon">₹</span>
              </div>
              <h3 className="promise-title">Transparent Pricing</h3>
              <p className="promise-desc">No hidden costs. Upfront quotes with detailed expense breakdowns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Elite Fleet Section */}
      <section className="section container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="fleet-header-wrapper">
          <div className="fleet-header-left">
            <span className="section-pretitle">OUR ELITE FLEET</span>
            <GoldDivider />
            <h2 className="fleet-header-title">
              <span className="title-luxury">Luxury</span> <span className="title-wheels">on Wheels</span>
            </h2>
            <p className="fleet-header-desc">Premium cars. Perfect comfort. Memorable journeys.</p>
          </div>
          <div className="fleet-nav-controls">
            {fleetPage > 0 && (
              <button 
                className="nav-btn nav-btn-prev" 
                onClick={handlePreviousFleet}
                disabled={isFleetAnimating}
                title="Show Previous Fleet"
              >
                ← Previous
              </button>
            )}
            {fleetPage < totalFleetPages - 1 ? (
              <button 
                className="nav-btn nav-btn-next" 
                onClick={handleNextFleet}
                disabled={isFleetAnimating}
                title="Show Next Fleet"
              >
                Next → <MdArrowForward />
              </button>
            ) : (
              <Link to="/fleet" className="view-all-link fleet-view-link">
                View All Fleet <MdArrowForward />
              </Link>
            )}
          </div>
        </div>

        <div className={`fleet-carousel-wrapper ${isFleetAnimating ? 'animating' : ''}`}>
          <div className="row g-4 mt-5 fleet-carousel-track">
            {currentFleetVehicles.map((vehicle) => (
              <div className="col-12 col-md-6 col-lg-4 fleet-carousel-item" key={vehicle.id}>
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences Section */}
      <section className="section container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="packages-header-wrapper">
          <div className="packages-header-left">
            <span className="section-pretitle">CURATED EXPERIENCES</span>
            <GoldDivider />
            <h2 className="packages-header-title">
              <span className="title-featured">Featured</span> <span className="title-packages">Tour Packages</span>
            </h2>
            <p className="packages-header-desc">Handpicked journeys to explore the best of India's heritage, culture and breathtaking destinations.</p>
          </div>
          <Link to="/packages" className="view-all-link packages-view-link">
            All Packages <MdArrowForward />
          </Link>
        </div>

        <div className="row g-4 mt-5">
          {/* Tour Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="package-card-improved">
              <div className="package-image-wrapper">
                <div className="package-duration-badge">1N / 2D</div>
                <img src={delhiTour} alt="Delhi Tour" className="img-fluid w-100" />
              </div>
              <div className="package-card-content-improved">
                <h5 className="package-title-improved">Delhi Local City Tour</h5>
                <p className="package-duration-improved">📍 1 Night / 2 Days</p>
                <p className="package-desc-improved">Experience the rich heritage and culture with our exclusive local city tour tailored just for you.</p>
                <Link to="/packages/delhi-local" className="package-btn-improved">
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
                <img src={delhi} alt="Delhi-Agra-Delhi" className="img-fluid w-100" />
              </div>
              <div className="package-card-content-improved">
                <h5 className="package-title-improved">Delhi-Agra-Delhi</h5>
                <p className="package-duration-improved">📍 2 Nights / 3 Days</p>
                <p className="package-desc-improved">A perfect short getaway to witness the majestic Taj Mahal and the historical wonders of Agra.</p>
                <Link to="/packages/delhi-agra-delhi-2n" className="package-btn-improved">
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
                <img src={triangle} alt="Golden Triangle Tour" className="img-fluid w-100" />
              </div>
              <div className="package-card-content-improved">
                <h5 className="package-title-improved">Golden Triangle Tour</h5>
                <p className="package-duration-improved">📍 6 Nights / 7 Days</p>
                <p className="package-desc-improved">Explore the vibrant culture of India by visiting the iconic cities of Delhi, Agra, and Jaipur.</p>
                <Link to="/packages/golden-triangle" className="package-btn-improved">
                  View Details <MdArrowForward style={{ width: '18px', height: '18px' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
