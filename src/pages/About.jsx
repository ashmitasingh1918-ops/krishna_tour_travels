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

          <p><strong>Krishna Tours </strong>is a trusted car rental and transportation company based in <strong>New Delhi, India, </strong> serving customers with reliable travel solutions since <strong>2012. </strong> Founded under the leadership of <strong>Mr. Ramprakash Gupta and his son Gaurav Gupta</strong>, the company has grown steadily over the years, earning a reputation for quality, affordability, and customer satisfaction. </p>
<p>For more than <strong>13 years</strong>, Krishna Tours has been providing safe, comfortable, and cost-effective transportation services for individuals, families, corporate clients, and tourists. Our commitment to excellence has helped us build lasting relationships with customers who value dependable and professional travel services. </p>
<p>We take great pride in maintaining a fleet of clean, well-maintained, and modern vehicles to ensure a smooth and comfortable journey every time. Our experienced and courteous chauffeurs are professionally trained, ensuring safe driving and exceptional customer service. </p>
<p>At Krishna Tours, we understand that every journey matters. Whether you need a car for local travel, airport transfers, business trips, sightseeing, or outstation travel, we are committed to delivering a <strong>hassle-free and enjoyable experience</strong>. </p>
<p>Our focus has always been on providing high-quality transportation services at competitive prices while maintaining the highest standards of professionalism and reliability. We believe that our success is measured by the satisfaction of our customers, and we continuously strive to exceed their expectations. </p>
<p>At <strong>Krishna Tours</strong>, customer satisfaction is at the heart of everything we do. Whether you book online, call us, or email us, our team is always ready to help you find the best travel solution for your needs. </p>
<p><strong>"Customer Service with a Smile" </strong>is not just our tagline—it's our commitment to every journey we serve. </p>

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
  <section className="container py-5">
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
  
</section>

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