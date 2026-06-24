import "./About.css";

function About() {
  return (
    <>
  {/* Hero Section */}
  <section className="about-hero">

  <div className="hero-overlay">

    <div className="container h-100">

      <div className="row h-100 align-items-center">

        <div className="col-md-6 hero-content">

          <h1>About Krishna Tours</h1>

          <p>
            Trusted Travel Partner Since 2012
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

  {/* Legacy Section */}
  <section className="legacy-section py-5">
    <div className="container">
      <div className="row align-items-center">

        <div className="col-md-5">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            className="about-image"
            alt="Office"
          />
        </div>

        <div className="col-md-7">
          <h2>ABOUT KRISHNA TOURS</h2>

          <p>
            The Delhi based KRISHNA TOURS is established in grow from strength to strength.
          </p>

          <p>
            The Delhi based KRISHNA TOURS is established in grow from strength to strength. On 2 July 2012 Krishna tours entered in travel industry with establishment of Krishna tours. A company is headed by Mr Ramprakash Gupta. Krishna tours having its head office in New Delhi, India. We are very much concerned about quality of our fleets and provides neat and clean and Young maintained Vehicles with well-trained chauffeurs.</p>
          <p>KRISHNA TOURS is one of the cheap and best service provider company in Delhi which offering travel service from last 13 years. We have a team of experienced drivers which drive smoothly and comfortable. It is quality assured as well as Progressive and we are focusing on transportation. </p>
          <p>So for any assistance you need for car hire , we are just a click away. You can also call or mail us to get best car rental services in Delhi.</p>
          <p>We are continuously delivering high-quality services to the travelers. “Customer service with a smile"</p>
          <p>We believe that Success is measured by the number of satisfied customers and that is always been our endeavor.</p>
        </div>

      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="stats-section">
   
    <div className="container">
      <div className="row text-center">

        <div className="col-md-3">
          <h3>15K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="col-md-3">
          <h3>50+</h3>
          <p>Vehicles</p>
        </div>

        <div className="col-md-3">
          <h3>12+</h3>
          <p>Years Experience</p>
        </div>

        <div className="col-md-3">
          <h3>24/7</h3>
          <p>Support</p>
        </div>

      </div>
    </div>
  </section>

  {/* Expertise Section */}
  <div className="row g-4">

  <div className="col-md-4">
    <div className="card p-4 text-center h-100">
      <i className="bi bi-car-front fs-1"></i>
      <h5>Car Rentals</h5>
      <p>Premium sedans and SUVs for local and long-distance travel.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-4 text-center h-100">
      <i className="bi bi-airplane fs-1"></i>
      <h5>Airport Transfers</h5>
      <p>Punctual airport pickup and drop services.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-4 text-center h-100">
      <i className="bi bi-geo-alt fs-1"></i>
      <h5>Pilgrimage Tours</h5>
      <p>Curated spiritual journeys to India's holy destinations.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-4 text-center h-100">
      <i className="bi bi-building fs-1"></i>
      <h5>Corporate Travel</h5>
      <p>Professional transportation solutions for businesses.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-4 text-center h-100">
      <i className="bi bi-compass fs-1"></i>
      <h5>Local Sightseeing</h5>
      <p>Explore destinations with experienced local drivers.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-4 text-center h-100">
      <i className="bi bi-map fs-1"></i>
      <h5>Outstation Travel</h5>
      <p>Safe and comfortable inter-city travel experiences.</p>
    </div>
  </div>

</div>

  {/* Why Choose Us Section */}
  <section className="py-5 bg-light why-section">
  <div className="container">

    <div className="row">

      <div className="col-md-4">
        <h2>Why Choose Us</h2>

        <p>
          We combine hospitality, reliability and professionalism
          to deliver memorable travel experiences.
        </p>

        <button className="btn btn-warning">
          View Our Fleet
        </button>
      </div>

      <div className="col-md-8">

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h5>Professional Drivers</h5>
              <p>Experienced and courteous chauffeurs.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h5>Well-Maintained Fleet</h5>
              <p>Regularly serviced and sanitized vehicles.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h5>Transparent Pricing</h5>
              <p>No hidden charges and fair pricing.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h5>24/7 Concierge</h5>
              <p>Round-the-clock customer support.</p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

  {/* Mission Vision Section */}
  <section className="mission-vision-section py-5">
  <div className="container">
    <div className="row g-4">

      <div className="col-md-6">
        <div className="mission-card p-4">

          <i className="bi bi-rocket-takeoff fs-2"></i>

          <h3 className="mt-3">
            Our Mission
          </h3>

          <p>
            To provide the most reliable, comfortable,
            and prestigious transport services in India,
            ensuring every traveler feels like a guest of honor.
          </p>

        </div>
      </div>

      <div className="col-md-6">
        <div className="vision-card p-4">

          <i className="bi bi-eye fs-2"></i>

          <h3 className="mt-3">
            Our Vision
          </h3>

          <p>
            To be recognized as the premier concierge
            transportation brand blending hospitality,
            luxury and modern travel solutions.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

  {/* Core Values Section */}
  <section className="core-values py-5">

  <div className="container text-center">

    <h2 className="mb-5">
      Core Values
    </h2>

    <div className="row">

      <div className="col-md-4">
        <i className="bi bi-shield-check fs-1"></i>
        <h4>Integrity</h4>
        <p>
          Honest interactions and ethical business practices.
        </p>
      </div>

      <div className="col-md-4">
        <i className="bi bi-person-check fs-1"></i>
        <h4>Safety</h4>
        <p>
          Passenger safety and vehicle maintenance.
        </p>
      </div>

      <div className="col-md-4">
        <i className="bi bi-award fs-1"></i>
        <h4>Excellence</h4>
        <p>
          Delivering premium travel experiences.
        </p>
      </div>

    </div>

  </div>

</section>

  {/* CTA Section */}
 <section className="cta-section text-center">

  <div className="container">

    <h2>
      Ready To Start Your Journey?
    </h2>

    <p>
      Book your premium travel experience today and
      experience the Krishna Tours difference.
    </p>

    <div className="mt-4">

      <button className="btn btn-warning me-3">
        Book Your Journey Today
      </button>

      <button className="btn btn-outline-light">
        Contact Support
      </button>

    </div>

  </div>

</section>
</>
  );
}

export default About;