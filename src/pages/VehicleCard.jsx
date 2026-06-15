import React from "react";
import fleetApi from "./Fleet_api";
const VehicleCard = ({ vehiclesData }) => {
  return (
    <section className="vehicleCards">
      {vehiclesData.map((vehicle) => (
        <div className="vehicleCard" key={vehicle.id}>
          <img src={vehicle.image} alt={vehicle.name} />

          <div className="cardContent">
            <div className="cardHeader">
              <div>
                <h3>{vehicle.name}</h3>
                <small>{vehicle.category}</small>
              </div>

              <div className="price">
                ₹{vehicle.price}
              </div>
            </div>

            <div className="vehicleInfo">
              <span>👥 {vehicle.seats} Seats</span>
              <span>❄️ AC</span>
              <span>🧳 {vehicle.luggage} Bags</span>
            </div>

            <button className="detailsBtn">
              Details
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VehicleCard;