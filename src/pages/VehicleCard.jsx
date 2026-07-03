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


        </div>

        <div className="vehicleInfo">
          <span>{vehicle.seats} Seats</span>
          <span>{vehicle.luggage} Bags</span>
          <span>{vehicle.ac ? "AC" : "Non AC"}</span>
        </div>
<div className="cardBtns">
  <button
    className="detailsBtn"
    onClick={() => navigate(`/vehicle/${vehicle.id}`)}
  >
    Details
  </button>

  <button
    className="tariffBtn"
    onClick={() => navigate(`/tariff/${vehicle.id}`)}
  >
    Tariff
  </button>
</div>
        
      </div>
    </div>
  );
};

export default VehicleCard;