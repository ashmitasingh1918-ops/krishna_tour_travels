import React from "react";
import "./About.css";
import sedanImg from "../assets/images/agra.png";
import luxuryImg from "../assets/images/delhi.png";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg-palace"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>ABOUT US</h1>
              <div className="tagline">Your Journey. Our Responsibility.</div>
              <p className="description">
                At Krishna Tour India, we believe that every journey is special.
                That's why we provide safe, comfortable and reliable car rental
                services to make your travel experience smooth and memorable.
              </p>
            </div>
            <div className="col-lg-6 hero-image-col">
              <img
                src={`${import.meta.env.BASE_URL}images/agra.jpg`}
                alt="Krishna Tours"
                className="hero-car-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Icons Row */}
      <section className="feature-icons-row">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="feature-text">
                  <h6>Safe & Reliable</h6>
                  <p>Your safety is our top priority. Well-maintained cars.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-person-badge"></i>
                </div>
                <div className="feature-text">
                  <h6>Experienced Drivers</h6>
                  <p>Polite, professional and experienced drivers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <div className="feature-text">
                  <h6>Best Price Guarantee</h6>
                  <p>Competitive pricing with no hidden charges.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="feature-text" >
                  <h6>24/7 Customer Support</h6>
                  <p>Our support team is available round the clock.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title-alt">WHO IS KRISHNA TOURS</h2>
              <div className="content-block">
                <p><strong>Krishna Tours </strong>is a trusted car rental and transportation company based in <strong>New Delhi, India, </strong> serving customers with reliable travel solutions since <strong>2012. </strong> Founded under the leadership of <strong>Mr. Ramprakash Gupta and his son Gaurav Gupta</strong>, the company has grown steadily over the years, earning a reputation for quality, affordability, and customer satisfaction. </p>
                <p>For more than <strong>13 years</strong>, Krishna Tours has been providing safe, comfortable, and cost-effective transportation services for individuals, families, corporate clients, and tourists. Our commitment to excellence has helped us build lasting relationships with customers who value dependable and professional travel services. </p>
                <p>We take great pride in maintaining a fleet of clean, well-maintained, and modern vehicles to ensure a smooth and comfortable journey every time. Our experienced and courteous chauffeurs are professionally trained, ensuring safe driving and exceptional customer service. </p>
                <p>At Krishna Tours, we understand that every journey matters. Whether you need a car for local travel, airport transfers, business trips, sightseeing, or outstation travel, we are committed to delivering a <strong>hassle-free and enjoyable experience</strong>. </p>
                <p>Our focus has always been on providing high-quality transportation services at competitive prices while maintaining the highest standards of professionalism and reliability. We believe that our success is measured by the satisfaction of our customers, and we continuously strive to exceed their expectations. </p>
                <p>At <strong>Krishna Tours</strong>, customer satisfaction is at the heart of everything we do. Whether you book online, call us, or email us, our team is always ready to help you find the best travel solution for your needs. </p>

                <p className="tagline-quote">
                  "Customer Service with a Smile" is not just our tagline—it's our commitment to every journey we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Stats Section */}
      <section className="why-mission-section">
        <div className="container">


          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="why-krishna-tours">
                <h3 className="section-subtitle">WHY KRISHNA TOURS:-</h3>
                <ul className="why-list">
                  <li><i className="bi bi-check2-circle"></i> To provide Customer Delight and Comfort.</li>
                  <li><i className="bi bi-check2-circle"></i> Providing Professional and Timely Service.</li>
                  <li><i className="bi bi-check2-circle"></i> Total Quality Assurance.</li>
                  <li><i className="bi bi-check2-circle"></i> Total solution for corporate travel requirements.</li>
                  <li><i className="bi bi-check2-circle"></i> Achieving 100% client satisfaction.</li>
                  <li><i className="bi bi-check2-circle"></i> Providing Extra Value for their money.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mission & Bottom CTA Row */}
          <div className="row mission-row align-items-center">
            <div className="col-lg-8">
              <div className="mission-content">
                <h4>OUR MISSION</h4>
                <p>
                  Our mission is to provide hassle-free car rental services with best-in-class customer care.
                  We aim to be your most trusted travel partner, every time you hit the road.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-end">
              <button className="btn btn-magenta">TRAVEL YOUR WAY WITH US</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;