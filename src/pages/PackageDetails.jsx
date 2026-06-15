import { useParams } from "react-router-dom";
import packages from "../data/packages";

function PackageDetails() {

  const { packageId } = useParams();

  const packageData = packages.find(
    item => item.id === packageId
  );

  if (!packageData) {
    return (
      <div className="container py-5">
        <h1>Package Not Found</h1>
      </div>
    );
  }

  return (
  <>
    {/* Package Header */}

    <section className="package-header">

      <div className="container">

        <div className="package-header-card">

          <div>

            <h1 className="package-title">
              {packageData.title}
            </h1>

            <p className="package-duration">
              {packageData.duration}
            </p>

          </div>

          <div>

            <h2 className="package-price">
              {packageData.price}
            </h2>

          </div>

        </div>

      </div>

    </section>

    {/* Overview Section */}

    <section className="container py-5">

      <div className="row align-items-start">

        <div className="col-lg-5">

          <img
            src={packageData.image}
            alt={packageData.title}
            className="img-fluid package-image"
          />

        </div>

        <div className="col-lg-7 package-overview">

          <h2 className="section-title">
            Overview
          </h2>

          <p>{packageData.overview}</p>

          <h2 className="section-title mt-5">
            Tour Highlights
          </h2>

          <ul className="highlights-list">

            {packageData.highlights.map((item, index) => (

              <li key={index}>
                <i className="bi bi-check-circle-fill"></i>
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>

    {/* Itinerary */}

    <section className="container pb-5">

      <h2 className="section-title text-center mb-4">
        Day Wise Itinerary
      </h2>

      {packageData.itinerary.map((day, index) => (

        <div className="itinerary-card mb-4" key={index}>

          <h4>
            {day.day} - {day.title}
          </h4>

          <p>{day.description}</p>

        </div>

      ))}

    </section>

    {/* Included / Excluded */}

    <section className="container pb-5">

      <div className="row g-4">

        <div className="col-md-6">

          <div className="info-card">

            <h3 className="section-title">
              Included
            </h3>

            <ul className="highlights-list">

              {packageData.included.map((item, index) => (

                <li key={index}>
                  <i className="bi bi-check-circle-fill"></i>
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className="col-md-6">

          <div className="info-card">

            <h3 className="section-title">
              Not Included
            </h3>

            <ul className="highlights-list">

              {packageData.excluded.map((item, index) => (

                <li key={index}>
                  <i className="bi bi-x-circle-fill text-danger"></i>
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>

  </>
);
}

export default PackageDetails;