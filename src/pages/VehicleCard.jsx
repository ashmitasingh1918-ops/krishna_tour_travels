import { useNavigate } from "react-router-dom";
import { MdPeople, MdLuggage, MdAcUnit, MdArrowForward, MdCheckCircle } from "react-icons/md";

const VehicleCard = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <div className="vehicleCard">
      <div className="vehicle-card-image-wrapper">
        <div className="vehicle-category-badge">{vehicle.category.toUpperCase()}</div>
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-card-image" />
      </div>

      <div className="vehicle-card-content">
        <h3 className="vehicle-card-name">{vehicle.name}</h3>

        <div className="vehicle-card-specs">
          <div className="spec-item">
            <MdPeople className="spec-icon" />
            <span>{vehicle.seats} Seats</span>
          </div>
          <div className="spec-item">
            <MdLuggage className="spec-icon" />
            <span>{vehicle.luggage} Bags</span>
          </div>
          <div className="spec-item">
            <MdAcUnit className="spec-icon" />
            <span>{vehicle.ac ? "AC" : "Non AC"}</span>
          </div>
        </div>

        <div className="vehicle-card-buttons">
          <button
            className="vehicle-card-btn details-btn"
            onClick={() => navigate(`/vehicle/${vehicle.id}`)}
          >
            <MdCheckCircle className="btn-icon" />
            Details
          </button>

          <button
            className="vehicle-card-btn tariff-btn"
            onClick={() => navigate(`/tariff/${vehicle.id}`)}
          >
            Tariff
            <MdArrowForward className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;