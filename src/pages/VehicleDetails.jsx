import { useParams } from "react-router-dom";
import fleetData from "./Fleet_api";
import "./VehicleDetails.css";

const VehicleDetails = () => {
  const { id } = useParams();

  const vehicle = fleetData.find(
    (item) => item.id === Number(id)
  );

  if (!vehicle) {
    return <h2>Vehicle Not Found</h2>;
  }

  return (
    <div className="vehicle-details">

      <h1 className="vehicle-title">
        {vehicle.name}
      </h1>

      <div className="vehicle-images">

        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="vehicle-image"
        />

        <img
          src={vehicle.interior}
          alt={`${vehicle.name} Interior`}
          className="vehicle-image"
        />

      </div>

      <div className="vehicle-info">

        <h2>{vehicle.category}</h2>

        <p>
          <strong>Price :</strong> ₹{vehicle.price}
        </p>

        <p>
          <strong>Seats :</strong> {vehicle.seats}
        </p>

        <p>
          <strong>Luggage :</strong> {vehicle.luggage}
        </p>

        <p>
          <strong>Air Conditioning :</strong>{" "}
          {vehicle.ac ? "Available" : "Not Available"}
        </p>

        <p>
          <strong>Transmission :</strong>{" "}
          {vehicle.transmission}
        </p>

        <p>
          <strong>Fuel :</strong>{" "}
          {vehicle.fuel}
        </p>

        <h3>Description</h3>

        <p>{vehicle.description}</p>

        <h3>Features</h3>

        <ul>
          {vehicle.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

      </div>

    </div>
  );
};

export default VehicleDetails;