import { useNavigate } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <div className="vehicleCard">
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
          <span>{vehicle.seats} Seats</span>
          <span>{vehicle.luggage} Bags</span>
          <span>{vehicle.ac ? "AC" : "Non AC"}</span>
        </div>

        <button
          className="detailsBtn"
          onClick={() => navigate(`/vehicle/${vehicle.id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;