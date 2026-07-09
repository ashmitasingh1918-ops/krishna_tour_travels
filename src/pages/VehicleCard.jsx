import { useNavigate } from "react-router-dom";
import { 
  MdPeople, 
  MdLuggage, 
  MdAcUnit, 
  MdWifi, 
  MdPerson, 
  MdLocalDrink, 
  MdCleaningServices, 
  MdPower 
} from "react-icons/md";

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
          <div className="spec-item">
            <MdWifi className="spec-icon" />
            <span>Wi-Fi</span>
          </div>
        </div>

        {/* Dynamic Trust Features Bar */}
        <div className="vehicle-card-features-bar">
          <div className="bar-item">
            <MdPerson className="bar-icon" />
            <span>Professional Chauffeur</span>
          </div>
          <div className="bar-item">
            <MdLocalDrink className="bar-icon" />
            <span>Mineral Water</span>
          </div>
          <div className="bar-item">
            <MdCleaningServices className="bar-icon" />
            <span>Sanitized Vehicle</span>
          </div>
          <div className="bar-item">
            <MdPower className="bar-icon" />
            <span>Phone Charger</span>
          </div>
        </div>

        <div className="vehicle-card-buttons">
          <button
            className="vehicle-card-btn details-btn"
            onClick={() => navigate(`/vehicle/${vehicle.id}`)}
          >
            
            Details
          </button>

          <button
            className="vehicle-card-btn tariff-btn"
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