import { useParams, Link } from "react-router-dom";
import { MdCheckCircleOutline } from "react-icons/md";
import fleetData from "./Fleet_api";
import "./VehicleTariff.css";

const tariffs = {
  1: { // Maruti Ciaz
    airport: [
      { desc: "Transfer from airport to hotel or vice versa", km: 55, hours: 4, price: 1900 }
    ],
    local: [
      { desc: "Half Day", km: 40, hours: "", price: 1750 },
      { desc: "Full Day", km: 80, hours: "", price: 2500 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 16 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 150 }
    ]
  },
  2: { // Maruti Swift Dzire
    airport: [
      { desc: "Transfer from airport to hotel or vice versa", km: 55, hours: 4, price: 1300 }
    ],
    local: [
      { desc: "Half Day", km: 40, hours: 4, price: 1200 },
      { desc: "Full Day", km: 80, hours: 8, price: 1700 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 15 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 150 }
    ]
  },
  3: { // Kia Carens
    airport: [
      { desc: "Transfer from airport to hotel or vice versa", km: 55, hours: 4, price: 2300 }
    ],
    local: [
      { desc: "Half Day", km: 40, hours: "", price: 2000 },
      { desc: "Full Day", km: 80, hours: "", price: 2500 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 16 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 150 }
    ]
  },
  4: { // Toyota Innova Hycross
    airport: [
      { desc: "Transfer from airport to hotel or vice versa", km: 55, hours: 4, price: 2400 }
    ],
    local: [
      { desc: "Half Day", km: 40, hours: 4, price: 2350 },
      { desc: "Full Day", km: 80, hours: 8, price: 3150 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 25 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 250 }
    ]
  },
  5: { // Toyota Innova Crysta
    airport: [
      { desc: "Transfer from airport to hotel or vice versa", km: 55, hours: 4, price: 2000 }
    ],
    local: [
      { desc: "Half Day", km: 40, hours: 4, price: 1750 },
      { desc: "Full Day", km: 80, hours: 8, price: 2800 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 21 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 200 }
    ]
  },
  7: { // Force Urbania
    airport: [
      { desc: "Transfer from airport to hotel or vice versa", km: 55, hours: 4, price: 6000 }
    ],
    local: [
      { desc: "Full Day", km: 80, hours: 8, price: 9500 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 35 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 700 }
    ]
  },
  default: { // Default Fallback
    airport: [
      { desc: "Transfer from Airport (Terminal 1) to Hotel or Vice versa", km: 40, hours: 4, price: 1250 },
      { desc: "Transfer from Airport (Terminal 3) to Hotel or Vice versa", km: 55, hours: 4, price: 1450 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 19 }
    ],
    local: [
      { desc: "Half Day", km: 40, hours: 4, price: 1325 },
      { desc: "Full Day", km: 80, hours: 8, price: 1950 },
      { desc: "Rate per K.M.", km: "", hours: "", price: 19 },
      { desc: "Rate for Extra Hour", km: "", hours: "", price: 175 }
    ]
  }
};

const VehicleTariff = () => {
  const { id } = useParams();

  const vehicle = fleetData.find(
    (item) => item.id === Number(id)
  );

  if (!vehicle) {
    return <h2>Vehicle Not Found</h2>;
  }

  const tariffInfo = tariffs[vehicle.id] || tariffs.default;

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
            {tariffInfo.airport.map((item, idx) => (
              <tr key={`air-${idx}`}>
                <td data-label="Description" className={!item.desc ? "empty-cell" : ""}>{item.desc}</td>
                <td data-label="K.M. Limit" className={!item.km ? "empty-cell" : ""}>{item.km}</td>
                <td data-label="Hours" className={!item.hours ? "empty-cell" : ""}>{item.hours}</td>
                <td data-label="Tariff (INR)" className={!item.price ? "empty-cell" : ""}>{item.price}</td>
              </tr>
            ))}

            <tr className="group-header">
              <td colSpan="4">Local Use</td>
            </tr>
            {tariffInfo.local.map((item, idx) => (
              <tr key={`local-${idx}`}>
                <td data-label="Description" className={!item.desc ? "empty-cell" : ""}>{item.desc}</td>
                <td data-label="K.M. Limit" className={!item.km ? "empty-cell" : ""}>{item.km}</td>
                <td data-label="Hours" className={!item.hours ? "empty-cell" : ""}>{item.hours}</td>
                <td data-label="Tariff (INR)" className={!item.price ? "empty-cell" : ""}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tariff-terms-container">
        <h3>TERMS & CONDITIONS</h3>
        <ul className="tariff-terms-list">
          <li><MdCheckCircleOutline className="term-icon" /> All rates are in Indian Rupees.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Complimentary water bottles.</li>
          <li><MdCheckCircleOutline className="term-icon" /> Complimentary WI-FI.</li>
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
