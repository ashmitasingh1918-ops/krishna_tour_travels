import React, { useState } from "react";
import fleetApi from "./Fleet_api";
import "./Fleet.css";
import VehicleCard from "./VehicleCard";
import fleetData from "./Fleet_api";
import { MdArrowForward, MdSupportAgent, MdVerifiedUser, MdCleaningServices, MdPriceCheck } from "react-icons/md";
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

      {/* Vehicle Filter */}
      <section className="fleet-filter-section">
        <div className="fleet-filter-header-wrapper">
          <div className="fleet-filter-header-left">
            <span className="section-pretitle">ELITE COLLECTION</span>
            <GoldDivider />
            <h2 className="fleet-filter-title">
              <span className="title-elite">Elite Fleet</span> <span className="title-selection">Selection</span>
            </h2>
            <p className="fleet-filter-desc">Pristine vehicles for every pilgrimage and corporate need.</p>
          </div>
        </div>

        <div className="filterBtns">
          <button className="active" onClick={() => filterItem("")}>
            ALL VEHICLE'S
          </button>

          <button className="active" onClick={() => filterItem("SUV’S")}>
            SUV’S
          </button>

          <button className="active" onClick={() => filterItem("MVP")}>
            MVP
          </button>

          <button className="active" onClick={() => filterItem("CLASSIC SEDAN’S")}>
            CLASSIC SEDAN’S
          </button>
          <button className="active" onClick={() => filterItem("MINI VANS’S")}>
            MINI VANS’S
          </button>
        </div>
      </section>

      {/* Vehicle Cards */}
    <div className="vehicleCards">
  {vehiclesData.map((vehicle) => (
    <VehicleCard
      key={vehicle.id}
      vehicle={vehicle}
    />
  ))}
</div>

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
          <button className="quoteBtn">
            Get a Free Quote
          </button>

          <button className="whatsappBtn">
            WhatsApp Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Fleet;