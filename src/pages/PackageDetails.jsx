import { useParams } from "react-router-dom";
import { useState } from "react";
import packages from "../data/packages";
import "./PackageDetails.css";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

function PackageDetails() {
  const { packageId } = useParams();
  const [openDays, setOpenDays] = useState({});

  const toggleDay = (index) => {
    setOpenDays((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const packageData = packages.find(
    (item) => item.id === packageId
  );

  useSEO({
    title: packageData ? packageData.title : "Tour Package Details",
    description: packageData
      ? (packageData.overview ? packageData.overview.slice(0, 160) : `${packageData.title} package details`)
      : "Detailed itinerary for Krishna Tour India tour packages."
  });

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

            <div className="package-action">

  <h2 className="package-price">
    {packageData.price}
  </h2>

  <div className="package-action-buttons">
    <Link to="/packages" className="back-link">
      <button className="back-btn">
        Go Back
      </button>
    </Link>

    <Link to="/contact#contactForm">
      <button className="quote-btn">
        Get a Quote
      </button>
    </Link>
  </div>

</div>

          </div>

        </div>
      </section>

      {/* Overview */}

      <section className="container py-5">

  <div className="row g-4">

    {/* LEFT IMAGE COLLAGE */}
    <div className="col-lg-4">

  <div className="tour-collage-card">

    <img
      src={packageData.gallery}
      alt={packageData.title}
      className="tour-collage-image"
    />

  </div>

</div>
    {/* RIGHT CONTENT */}
    <div className="col-lg-8">

      {/* OVERVIEW */}

      <div className="overview-card">

        <h2 className="section-title">
          Overview
        </h2>

        <p>{packageData.overview}</p>

      </div>

      {/* HIGHLIGHTS */}

      <div className="highlights-card mt-4">

        <h2 className="section-title">
          Tour Highlights
        </h2>

        <div className="highlights-grid">

          {packageData.highlights.map((item, index) => (

            <div
              key={index}
              className="highlight-item"
            >
              <i className="bi bi-check-circle-fill"></i>
              {item}
            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Day Wise Itinerary */}

      {packageData.itinerary.length > 0 && (

        <section className="container pb-5">

          <h2 className="section-title text-center mb-4">
            Day Wise Itinerary
          </h2>

          {packageData.itinerary.map((day, index) => {
            const isOpen = !!openDays[index];
            return (
              <div
                className={`itinerary-card mb-4 ${isOpen ? "open" : ""}`}
                key={index}
                onClick={() => toggleDay(index)}
              >
                <div className="itinerary-header">
                  <h4>
                    {day.day} - {day.title}
                  </h4>
                  <i className="bi bi-chevron-down itinerary-toggle-icon"></i>
                </div>

                <div className="itinerary-content">
                  <p>{day.description}</p>
                </div>
              </div>
            );
          })}

        </section>

      )}

      {/* Included / Excluded */}

      {(packageData.included.length > 0 ||
        packageData.excluded.length > 0) && (

        <section className="container pb-5">

          <div className="row g-4">

            <div className="col-md-6">

              <div className="info-card included-card">

                <h3>Included</h3>

                <ul className="info-list">

                  {packageData.included.map((item, index) => (

                    <li key={index}>
                      <i className="bi bi-check-circle-fill included-icon"></i>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

            <div className="col-md-6">

              <div className="info-card excluded-card">

                <h3>Not Included</h3>

                <ul className="info-list">

                  {packageData.excluded.map((item, index) => (

                    <li key={index}>
                      <i className="bi bi-x-circle-fill excluded-icon"></i>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </section>

      )}

    </>
  );
}

export default PackageDetails;