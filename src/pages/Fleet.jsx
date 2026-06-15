import React, { useState } from "react";
import fleetApi from "./Fleet_api";
import "./Fleet.css";
import VehicleCard from "./VehicleCard";
import fleetData from "./Fleet_api";

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
          <span>OUR PREMIUM COLLECTION</span>
          <h1>Travel in Divine Comfort</h1>
          <p>
            From executive sedans to luxury group travelers, experience North
            India's spiritual journey with unmatched prestige.
          </p>
        </div>
      </section>

      {/* Vehicle Filter */}
     <section className="vehicleFilter">
  <div className="filterContent">
    <h2>Elite Fleet Selection</h2>
    <p>Pristine vehicles for every pilgrimage and corporate need.</p>
  </div>

  <div className="filterBtns">
    <button className="active" onClick={() => filterItem("")}>
      All Vehicles
    </button>

    <button className="active" onClick={() => filterItem("Luxury")}>
      Luxury
    </button>

    <button className="active" onClick={() => filterItem("GroupTravel")}>
      Group Travel
    </button>

    <button className="active" onClick={() => filterItem("Executive")}>
      Executive
    </button>
  </div>
</section>

      {/* Vehicle Cards */}
      <VehicleCard vehiclesData={vehiclesData} />

      {/* Package Advantages */}
      <section className="packageAdv">
        <h2>The Krishna Tour Advantage</h2>
        <p>
          Elite standards that define our heritage of hospitality.
        </p>

        <div className="advGrid">
          <div className="advCard">
            <h4>24/7 Support</h4>
            <p>Round-the-clock concierge service.</p>
          </div>

          <div className="advCard">
            <h4>Verified Drivers</h4>
            <p>Professional and experienced drivers.</p>
          </div>

          <div className="advCard">
            <h4>Clean Vehicles</h4>
            <p>Daily sanitized premium vehicles.</p>
          </div>

          <div className="advCard">
            <h4>Transparent Pricing</h4>
            <p>No hidden costs.</p>
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