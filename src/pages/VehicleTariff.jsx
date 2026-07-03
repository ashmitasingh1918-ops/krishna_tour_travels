import { useParams, Link } from "react-router-dom";
import { MdCheckCircleOutline } from "react-icons/md";
import fleetData from "./Fleet_api";
import "./VehicleTariff.css";

const VehicleTariff = () => {
  const { id } = useParams();

  const vehicle = fleetData.find(
    (item) => item.id === Number(id)
  );

  if (!vehicle) {
    return <h2>Vehicle Not Found</h2>;
  }

  return (
    <div className="vehicle-tariff">
      <h1 className="tariff-title">
        {vehicle.name} - Tariff Details
      </h1>

      <div className="tariff-vehicle-images">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="tariff-vehicle-image"
        />
        <img
          src={vehicle.interior}
          alt={`${vehicle.name} Interior`}
          className="tariff-vehicle-image"
        />
      </div>

      <div className="tariff-table-container">
        <div className="tariff-table-header">TARIFF</div>
        <table className="tariff-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>K.M. Limit</th>
              <th>Hours</th>
              <th>Tariff (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="group-header">
              <td colSpan="4">Airport Transfer</td>
            </tr>
            <tr>
              <td>Transfer from Airport (Terminal 1) to Hotel or Vice versa</td>
              <td>40</td>
              <td>4</td>
              <td>1250</td>
            </tr>
            <tr>
              <td>Transfer from Airport (Terminal 3) to Hotel or Vice versa</td>
              <td>55</td>
              <td>4</td>
              <td>1450</td>
            </tr>
            <tr>
              <td>Rate per K.M.</td>
              <td></td>
              <td></td>
              <td>19</td>
            </tr>

            <tr className="group-header">
              <td colSpan="4">Local Use</td>
            </tr>
            <tr>
              <td>Half Day</td>
              <td>40</td>
              <td>4</td>
              <td>1325</td>
            </tr>
            <tr>
              <td>Full Day</td>
              <td>80</td>
              <td>8</td>
              <td>1950</td>
            </tr>
            <tr>
              <td>Rate per K.M.</td>
              <td></td>
              <td></td>
              <td>19</td>
            </tr>
            <tr>
              <td>Rate for Extra Hour</td>
              <td></td>
              <td></td>
              <td>175</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tariff-terms-container">
        <h3>TERMS & CONDITIONS</h3>
        <ul className="tariff-terms-list">
          <li><MdCheckCircleOutline className="term-icon" /> All rates are in Indian Rupees.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Complimentary water bottles.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Timing and mileage will be calculated from our garage to our garage.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Duty for more than four hours will be charged as full-day duty.</li>
          <li><MdCheckCircleOutline className="term-icon" /> All interstate taxes, toll taxes, and parking will be charged extra as per actual receipts wherever applicable.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Night retention will be charged between 2300 hrs to 0500 hrs for local run as mentioned in outstation column.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Outstation mileage shall be charged on the basis of minimum 250 km per day on average of actual run whichever is higher.</li>
          <li><MdCheckCircleOutline className="term-icon" /> GST will be charged extra @ 5% on total amount.</li>
          <li><MdCheckCircleOutline className="term-icon" /> The Tariff is subject to change in case of any fuel hike.</li>
          <li><MdCheckCircleOutline className="term-icon" /> In case of any new fee/levy introduced by government of India on these services, the same shall be charged as and when applied.</li>
        </ul>
      </div>

      <div className="tariff-action" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to={`/vehicle/${vehicle.id}`} className="btn btn-primary">
          View Vehicle Details
        </Link>
      </div>
    </div>
  );
};

export default VehicleTariff;
