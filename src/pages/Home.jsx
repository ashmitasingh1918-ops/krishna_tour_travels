import React from 'react';
import {
  MdVerifiedUser, MdSupportAgent, MdCleaningServices, MdPriceCheck,
  MdPeople, MdAcUnit, MdCalendarToday, MdArrowForward,
  MdAccessTime, MdCheckCircleOutline
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

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content-wrapper">

          <div className="hero-left">
            <h1 className="display-title">
              Your Premier Travel Partner<br />in <span className="text-highlight">North India</span>
            </h1>
            <p className="body-large">
              Experience spiritual journeys and luxury travels across Varanasi, Ayodhya, and Prayagraj with our elite fleet and expert chauffeurs.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-secondary-solid">Book Your Journey</button>
              <Link to="/fleet" className="btn btn-primary-glass">
                Explore Fleet
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="avatar" />
                <div className="avatar-count">+15k</div>
              </div>
              <p className="trust-text">
                Trusted by <strong>15,000+</strong> happy pilgrims &amp; travelers
              </p>
            </div>
          </div>

          <div className="hero-right">
            <Link to="/contact#inquiry-form" className="btn btn-inquire">
              Inquire Now <MdArrowForward style={{ marginLeft: "8px" }} />
            </Link>
            <p className="inquire-subtext">CUSTOM LUXURY QUOTES</p>
          </div>

        </div>
      </section>

      {/* Our Promise Section */}
      <section className="section promise-section container">
        <div className="section-header-centered">
          <span className="section-pretitle">OUR PROMISE</span>
          <h2 className="section-title">Excellence in Every Journey</h2>
        </div>

        <div className="promise-grid">
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdVerifiedUser className="promise-icon" />
            </div>
            <h3 className="promise-title">Verified Drivers</h3>
            <p className="promise-desc">Background-checked, professional chauffeurs with deep route knowledge.</p>
          </div>
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdSupportAgent className="promise-icon" />
            </div>
            <h3 className="promise-title">24/7 Support</h3>
            <p className="promise-desc">Dedicated concierge team available around the clock for any assistance.</p>
          </div>
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdCleaningServices className="promise-icon" />
            </div>
            <h3 className="promise-title">Clean Vehicles</h3>
            <p className="promise-desc">Immaculate, sanitized interiors with premium amenities for every ride.</p>
          </div>
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdPriceCheck className="promise-icon" />
            </div>
            <h3 className="promise-title">Transparent Pricing</h3>
            <p className="promise-desc">No hidden costs. Upfront quotes with detailed expense breakdowns.</p>
          </div>
        </div>
      </section>

      {/* Our Elite Fleet Section */}
      <section className="section container" style={{ paddingTop: '0' }}>
        <div className="section-header-split">
          <div>
            <span className="section-pretitle">OUR ELITE FLEET</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Luxury on Wheels</h2>
          </div>
          <Link to="/fleet" className="view-all-link">
            View All Fleet <MdArrowForward />
          </Link>
        </div>

        <div className="row g-4 mt-2">
          {fleetData.slice(0, 3).map((vehicle) => (
            <div className="col-12 col-md-6 col-lg-4" key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </section>

      {/* Curated Experiences Section */}
      <section className="section container" style={{ paddingTop: '40px' }}>
        <div className="section-header-split">
          <div>
            <span className="section-pretitle">CURATED EXPERIENCES</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Tour Packages</h2>
          </div>
          <Link to="/packages" className="view-all-link">
            All Packages <MdArrowForward />
          </Link>
        </div>

        <div className="row g-4 mt-2">
          {/* Tour Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="package-card">
              <img
                src={delhiTour}
                alt="Delhi Tour"
                className="img-fluid w-100"
              />
              <div className="package-content">
                <h5>Delhi Local City Tour</h5>
                <p>1 Night / 2 Days</p>
                <h6>₹2,500</h6>
                <p className="short-desc" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Experience the rich heritage and culture with our exclusive local city tour tailored just for you.</p>
                <Link to="/packages/delhi-local" className="btn btn-warning">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Tour Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="package-card">
              <img
                src={delhi}
                alt="Delhi-Agra-Delhi"
                className="img-fluid w-100"
              />
              <div className="package-content">
                <h5>Delhi-Agra-Delhi</h5>
                <p>2 Nights / 3 Days</p>
                <h6>₹6,500</h6>
                <p className="short-desc" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>A perfect short getaway to witness the majestic Taj Mahal and the historical wonders of Agra.</p>
                <Link to="/packages/delhi-agra-delhi-2n" className="btn btn-warning">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Tour Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="package-card">
              <img
                src={triangle}
                alt="Golden Triangle Tour"
                className="img-fluid w-100"
              />
              <div className="package-content">
                <h5>Golden Triangle Tour</h5>
                <p>6 Nights / 7 Days</p>
                <h6>₹24,900</h6>
                <p className="short-desc" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Explore the vibrant culture of India by visiting the iconic cities of Delhi, Agra, and Jaipur.</p>
                <Link to="/packages/golden-triangle" className="btn btn-warning">
                  View Details
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
