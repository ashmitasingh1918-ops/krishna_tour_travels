import { useParams, Link } from "react-router-dom";
import fleetData from "./Fleet_api";
import "./VehicleDetails.css";

const VehicleDetails = () => {
  const { id } = useParams();

  const vehicle = fleetData.find((item) => item.id === Number(id));

  if (!vehicle) {
    return <h2 className="not-found">Vehicle Not Found</h2>;
  }

  return (
    <div className="vehicle-details">
      {/* Vehicle Header with Back Button */}
      <div className="vehicle-details-header">
        <h1 className="vehicle-title">{vehicle.name}</h1>
        <Link to="/fleet" className="back-to-fleet-btn">
          Go Back to Fleet
        </Link>
      </div>

      {/* Vehicle Images */}
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

      {/* Vehicle Card */}
      <div className="vehicle-card">
        <div className="vehicle-info">
          <h2>{vehicle.category}</h2>

          {/* Basic Details */}
          <div className="vehicle-details-table">
            <table>
              <tbody>
                <tr>
                  <th>Vehicle Name</th>
                  <td>{vehicle.name}</td>
                </tr>

                <tr>
                  <th>Category</th>
                  <td>{vehicle.category}</td>
                </tr>

                <tr>
                  <th>Seats</th>
                  <td>{vehicle.seats}</td>
                </tr>

                <tr>
                  <th>Luggage Capacity</th>
                  <td>{vehicle.luggage} Bags</td>
                </tr>

                <tr>
                  <th>Air Conditioning</th>
                  <td>{vehicle.ac ? "Available" : "Not Available"}</td>
                </tr>

                <tr>
                  <th>Transmission</th>
                  <td>{vehicle.transmission}</td>
                </tr>

                <tr>
                  <th>Fuel Type</th>
                  <td>{vehicle.fuel}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Technical Specifications */}
          {vehicle.specifications && (
            <>
              <h3>Technical Specifications</h3>

              <div className="vehicle-details-table">
                <table>
                  <tbody>
                    <tr>
                      <th colSpan="2">Engine</th>
                    </tr>

                    <tr>
                      <td>Type</td>
                      <td>{vehicle.specifications.engine.type}</td>
                    </tr>

                    <tr>
                      <td>Displacement</td>
                      <td>{vehicle.specifications.engine.displacement}</td>
                    </tr>

                    <tr>
                      <td>Power</td>
                      <td>{vehicle.specifications.engine.power}</td>
                    </tr>

                    <tr>
                      <td>Torque</td>
                      <td>{vehicle.specifications.engine.torque}</td>
                    </tr>

                    <tr>
                      <th colSpan="2">Capacity</th>
                    </tr>

                    <tr>
                      <td>Seating</td>
                      <td>{vehicle.specifications.capacity.seating}</td>
                    </tr>

                    <tr>
                      <td>Luggage</td>
                      <td>{vehicle.specifications.capacity.luggage}</td>
                    </tr>

                    <tr>
                      <td>Fuel Tank</td>
                      <td>{vehicle.specifications.capacity.fuelTank}</td>
                    </tr>

                    <tr>
                      <th colSpan="2">Dimensions</th>
                    </tr>

                    <tr>
                      <td>Length</td>
                      <td>{vehicle.specifications.dimensions.length}</td>
                    </tr>

                    <tr>
                      <td>Width</td>
                      <td>{vehicle.specifications.dimensions.width}</td>
                    </tr>

                    <tr>
                      <td>Height</td>
                      <td>{vehicle.specifications.dimensions.height}</td>
                    </tr>

                    <tr>
                      <td>Wheel Base</td>
                      <td>{vehicle.specifications.dimensions.wheelBase}</td>
                    </tr>

                    <tr>
                      <th colSpan="2">Fuel</th>
                    </tr>

                    <tr>
                      <td>Fuel Used</td>
                      <td>{vehicle.specifications.fuel.fuelUsed}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Description */}
          <h3>Description</h3>
          <p>{vehicle.description}</p>

          {/* Features */}
          <h3>Features</h3>

          <ul className="feature-list">
            {vehicle.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Similar Vehicles */}
      <div className="similar-vehicles">
        <h2 className="similar-title">Similar Vehicles</h2>

        <div className="similar-grid">
          {fleetData
            .filter((item) => item.id !== vehicle.id)
            .slice(0, 3)
            .map((item) => (
              <div className="similar-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="similar-image"
                />

                <div className="similar-content">
                  <h3>{item.name}</h3>

                  <p>{item.description.substring(0, 90)}...</p>

                  <Link
                    to={`/vehicle/${item.id}`}
                    className="similar-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;