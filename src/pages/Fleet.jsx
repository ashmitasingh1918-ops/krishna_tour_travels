import React, { useState } from "react";
import fleetApi from "./Fleet_api";
import "./Fleet.css";
import VehicleCard from "./VehicleCard";
import fleetData from "./Fleet_api";
import { 
  MdArrowForward, 
  MdSupportAgent, 
  MdVerifiedUser, 
  MdCleaningServices, 
  MdPriceCheck,
  MdLocationOn,
  MdStar,
  MdPeople,
  MdDirectionsCar,
  MdPhoneInTalk,
  MdGridView,
  MdKingBed,
  MdGroups,
  MdBusinessCenter,
  MdAirportShuttle
} from "react-icons/md";
import { Link } from "react-router-dom";

// Gold Divider Component
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


const Fleet = () => {
  const [vehiclesData, setVehiclesData] = useState(fleetApi);

  const filterItem = (type) => {
    if (type === "") {
      setVehiclesData(fleetApi);
      return;
    }

    const updatedList = fleetApi.filter((curElem) => {
      return curElem.type === type;
    });

    setVehiclesData(updatedList);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="fleetPage">
        <div className="fleetSection">

        </div>
      </section>

      {/* Main Fleet Section with Sidebars */}
      <section className="fleet-layout-section">
        
        {/* Header and Filter Buttons - Full Width */}
        <div className="fleet-header-wrapper">
          <div className="fleet-filter-header-left">
            <span className="section-pretitle">OUR FLEET</span>
            <h2 className="fleet-filter-title">
              <span className="title-elite">Drive Your</span> <span className="title-selection">Journey Your Way</span>
            </h2>
            <p className="fleet-filter-desc">A wide range of well-maintained vehicles to suit every travel need and budget.</p>
          </div>

          <div className="filterBtns">
            <button className="active" onClick={() => filterItem("")}>
              <MdGridView className="filter-icon" /> All Vehicles
            </button>
            <button className="active" onClick={() => filterItem("SUV’S")}>
              <MdKingBed className="filter-icon" /> SUV'S
            </button>
            <button className="active" onClick={() => filterItem("MVP")}>
              <MdGroups className="filter-icon" /> MVP

            </button>
            <button className="active" onClick={() => filterItem("CLASSIC SEDAN’S")}>
              <MdBusinessCenter className="filter-icon" /> CLASSIC SEDAN’S
            </button>
            <button className="active" onClick={() => filterItem("MINI VANS’S")}>
              <MdAirportShuttle className="filter-icon" /> MINI VANS’S
            </button>
          </div>
        </div>

        <div className="fleet-container">
          {/* Left Sidebar (Now aligned with cards) */}
          <aside className="fleet-sidebar fleet-sidebar-left">
            <div className="sidebar-card">
              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdCleaningServices />
                </div>
                <div className="sidebar-text">
                  <h5>100% Sanitized Vehicles</h5>
                  <p>Regularly cleaned and sanitized for your safety.</p>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdLocationOn />
                </div>
                <div className="sidebar-text">
                  <h5>Pan India Service</h5>
                  <p>Available in 100+ cities across India.</p>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdSupportAgent />
                </div>
                <div className="sidebar-text">
                  <h5>24x7 Support</h5>
                  <p>Our team is always here to help you.</p>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdPriceCheck />
                </div>
                <div className="sidebar-text">
                  <h5>Best Price Guarantee</h5>
                  <p>Get the best rates with no hidden charges.</p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdStar />
                </div>
                <div className="sidebar-text">
                  <h5>4.9/5 Google Rating</h5>
                  <div className="stars">★★★★★</div>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdDirectionsCar />
                </div>
                <div className="sidebar-text">
                  <h5>15+ Vehicle Types</h5>
                  <p>To choose from across categories.</p>
                </div>
              </div>

              <div className="sidebar-item">
                <div className="sidebar-icon-box">
                  <MdPeople />
                </div>
                <div className="sidebar-text">
                  <h5>10,000+ Happy Customers</h5>
                  <p>Trusted by thousands across North India.</p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="sidebar-contact-card">
                <div className="contact-icon-row">
                   <div className="contact-icon-circle">
                      <MdPhoneInTalk />
                   </div>
                   <div className="contact-info-text">
                      <p>Need Help?</p>
                      <span>We're just a call away</span>
                   </div>
                </div>
                <div className="sidebar-contact-numbers">
                  <h4>+91 88007 70603</h4>
                  <h4>+91 89204 62315</h4>
                </div>
              </div>

            </div>
          </aside>

          {/* Vehicle Cards Grid */}
          <div className="vehicleCards">
            {vehiclesData.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package Advantages */}
      <section className="packageAdv">
        <div className="adv-header-wrapper">
          <div className="adv-header-content">
            <span className="section-pretitle">WHY CHOOSE US</span>
            <GoldDivider />
            <h2 className="adv-title">
              <span className="adv-title-krishna">The Krishna Tour</span> <span className="adv-title-advantage">Advantage</span>
            </h2>
            <p className="adv-header-desc">Elite standards that define our heritage of hospitality.</p>
          </div>
        </div>

        <div className="advGrid">
          <div className="advCard">
            <div className="adv-card-icon-wrapper">
              <MdSupportAgent className="adv-card-icon" />
            </div>
            <h4 className="adv-card-title">24/7 Support</h4>
            <p className="adv-card-desc">Round-the-clock concierge service.</p>
          </div>

          <div className="advCard">
            <div className="adv-card-icon-wrapper">
              <MdVerifiedUser className="adv-card-icon" />
            </div>
            <h4 className="adv-card-title">Verified Drivers</h4>
            <p className="adv-card-desc">Professional and experienced drivers.</p>
          </div>

          <div className="advCard">
            <div className="adv-card-icon-wrapper">
              <MdCleaningServices className="adv-card-icon" />
            </div>
            <h4 className="adv-card-title">Clean Vehicles</h4>
            <p className="adv-card-desc">Daily sanitized premium vehicles.</p>
          </div>

          <div className="advCard">
            <div className="adv-card-icon-wrapper">
              <MdPriceCheck className="adv-card-icon" />
            </div>
            <h4 className="adv-card-title">Transparent Pricing</h4>
            <p className="adv-card-desc">No hidden costs.</p>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="customPackage">
        <h2>Need a Custom Package?</h2>

        <p>
          Whether it's a spiritual pilgrimage or family reunion, we provide
          tailored transport solutions across North India.
        </p>

        <div className="ctaBtns">
          <Link className="quoteBtn" to="/contact#contactForm">
            Get a Free Quote
          </Link>

          <a 
            className="whatsappBtn"
            href="https://wa.me/918800770603?text=Hi!%20I%27m%20interested%20in%20booking%20a%20custom%20tour%20package."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Fleet;