import React from 'react';
import { 
  MdVerifiedUser, MdSupportAgent, MdCleaningServices, MdPriceCheck,
  MdPeople, MdAcUnit, MdCalendarToday, MdArrowForward,
  MdAccessTime, MdCheckCircleOutline
} from 'react-icons/md';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content-wrapper">
          
          <div className="hero-left">
            <h1 className="display-title">
              Your Premier Travel Partner<br/>in <span className="text-highlight">North India</span>
            </h1>
            <p className="body-large">
              Experience spiritual journeys and luxury travels across Varanasi, Ayodhya, and Prayagraj with our elite fleet and expert chauffeurs.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-secondary-solid">Book Your Journey</button>
              <Link to="/fleet" className="btn btn-primary-glass">
  Explore Fleet
</Link>
            </div>
            
            <div className="hero-trust">
              <div className="trust-avatars">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="avatar" />
                <div className="avatar-count">+15k</div>
              </div>
              <p className="trust-text">
                Trusted by <strong>15,000+</strong> happy pilgrims &amp; travelers
              </p>
            </div>
          </div>
          
          <div className="hero-right">
            <Link to="/contact#inquiry-form" className="btn btn-inquire">
  Inquire Now <MdArrowForward style={{ marginLeft: "8px" }} />
</Link>
            <p className="inquire-subtext">CUSTOM LUXURY QUOTES</p>
          </div>

        </div>
      </section>

      {/* Our Promise Section */}
      <section className="section promise-section container">
        <div className="section-header-centered">
          <span className="section-pretitle">OUR PROMISE</span>
          <h2 className="section-title">Excellence in Every Journey</h2>
        </div>

        <div className="promise-grid">
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdVerifiedUser className="promise-icon" />
            </div>
            <h3 className="promise-title">Verified Drivers</h3>
            <p className="promise-desc">Background-checked, professional chauffeurs with deep route knowledge.</p>
          </div>
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdSupportAgent className="promise-icon" />
            </div>
            <h3 className="promise-title">24/7 Support</h3>
            <p className="promise-desc">Dedicated concierge team available around the clock for any assistance.</p>
          </div>
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdCleaningServices className="promise-icon" />
            </div>
            <h3 className="promise-title">Clean Vehicles</h3>
            <p className="promise-desc">Immaculate, sanitized interiors with premium amenities for every ride.</p>
          </div>
          <div className="promise-card">
            <div className="promise-icon-wrapper">
              <MdPriceCheck className="promise-icon" />
            </div>
            <h3 className="promise-title">Transparent Pricing</h3>
            <p className="promise-desc">No hidden costs. Upfront quotes with detailed expense breakdowns.</p>
          </div>
        </div>
      </section>

      {/* Our Elite Fleet Section */}
      <section className="section container" style={{ paddingTop: '0' }}>
        <div className="section-header-split">
          <div>
            <span className="section-pretitle">OUR ELITE FLEET</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Luxury on Wheels</h2>
          </div>
          <a href="/fleet" className="view-all-link">View All Fleet <MdArrowForward />
         </a>
        </div>

        <div className="fleet-grid">
          {/* Fleet Card 1 */}
          <div className="fleet-card">
            <div className="fleet-image-container">
              <div className="badge-driver">
                <MdVerifiedUser className="badge-icon" /> DRIVER INCLUDED
              </div>
              <img src="/images/innova.jpg" alt="Toyota Innova Crysta" className="fleet-image" />
              <div className="badge-category premium">PREMIUM</div>
            </div>
            <div className="fleet-content">
              <h3 className="fleet-title">Toyota Innova Crysta</h3>
              <div className="fleet-specs">
                <span><MdPeople className="spec-icon" /> 7 Seater</span>
                <span><MdAcUnit className="spec-icon" /> AC Available</span>
              </div>
              <div className="fleet-footer">
                <div className="fleet-price">
                  <span className="price-label">STARTING FROM</span>
                  <div className="price-amount">₹3,500 <span className="price-unit">/day</span></div>
                </div>
                <button className="btn-icon">
                  <MdCalendarToday />
                </button>
              </div>
            </div>
          </div>

          {/* Fleet Card 2 */}
          <div className="fleet-card">
            <div className="fleet-image-container">
              <div className="badge-driver">
                <MdVerifiedUser className="badge-icon" /> DRIVER INCLUDED
              </div>
              <img src="/images/swift-dzire.jpg" alt="Swift Dzire" className="fleet-image" />
              <div className="badge-category luxury">SEDAN</div>
            </div>
            <div className="fleet-content">
              <h3 className="fleet-title">Swift Dzire</h3>
              <div className="fleet-specs">
                <span><MdPeople className="spec-icon" /> 4 Seater</span>
                <span><MdAcUnit className="spec-icon" /> Premium AC</span>
              </div>
              <div className="fleet-footer">
                <div className="fleet-price">
                  <span className="price-label">STARTING FROM</span>
                  <div className="price-amount">₹12,000 <span className="price-unit">/day</span></div>
                </div>
                <button className="btn-icon">
                  <MdCalendarToday />
                </button>
              </div>
            </div>
          </div>

          {/* Fleet Card 3 */}
          <div className="fleet-card">
            <div className="fleet-image-container">
              <div className="badge-driver">
                <MdVerifiedUser className="badge-icon" /> DRIVER INCLUDED
              </div>
              <img src="/images/tempo.jpg" alt="Tempo Traveller" className="fleet-image" />
              <div className="badge-category group">GROUP</div>
            </div>
            <div className="fleet-content">
              <h3 className="fleet-title">Tempo Traveller</h3>
              <div className="fleet-specs">
                <span><MdPeople className="spec-icon" /> 12 Seater</span>
                <span><MdAcUnit className="spec-icon" /> Dual AC</span>
              </div>
              <div className="fleet-footer">
                <div className="fleet-price">
                  <span className="price-label">STARTING FROM</span>
                  <div className="price-amount">₹6,500 <span className="price-unit">/day</span></div>
                </div>
                <button className="btn-icon">
                  <MdCalendarToday />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experiences Section */}
      <section className="section container" style={{ paddingTop: '40px' }}>
        <div className="section-header-split">
          <div>
            <span className="section-pretitle">CURATED EXPERIENCES</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Tour Packages</h2>
          </div>
          <a href="/packages" className="view-all-link">all packages <MdArrowForward />
         </a>
        </div>

        <div className="tours-grid">
          {/* Tour Card 1 */}
          <div className="tour-card">
            <div className="tour-image-container">
              <img src="/images/kashi.png" alt="Kashi Vishwanath" className="tour-image" />
              <div className="badge-duration">
                <MdAccessTime className="badge-icon" /> 3 DAYS / 2 NIGHTS
              </div>
            </div>
            <div className="tour-content">
              <div className="tour-header">
                <h3 className="tour-title">Kashi Vishwanath Spiritual Darshan</h3>
                <div className="tour-price-box">
                  <span className="price-label">FROM</span>
                  <div className="tour-price">₹15,999</div>
                </div>
              </div>
              <ul className="tour-highlights">
                <li><MdCheckCircleOutline className="highlight-icon" /> Evening Ganga Aarti with VIP Seating</li>
              </ul>
              <button className="btn btn-full">View Details <MdArrowForward /></button>
            </div>
          </div>

          {/* Tour Card 2 */}
          <div className="tour-card">
            <div className="tour-image-container">
              <img src="/images/Ayodhya.jpg" alt="Divine Ayodhya" className="tour-image" />
              <div className="badge-duration">
                <MdAccessTime className="badge-icon" /> 2 DAYS / 1 NIGHT
              </div>
            </div>
            <div className="tour-content">
              <div className="tour-header">
                <h3 className="tour-title">Divine Ayodhya &amp; Ram Mandir Tour</h3>
                <div className="tour-price-box">
                  <span className="price-label">FROM</span>
                  <div className="tour-price">₹8,499</div>
                </div>
              </div>
              <ul className="tour-highlights">
                <li><MdCheckCircleOutline className="highlight-icon" /> Ram Janmabhoomi VIP Darshan</li>
              </ul>
              <button className="btn btn-full">View Details <MdArrowForward /></button>
            </div>
          </div>

          {/* Tour Card 3 */}
          <div className="tour-card">
            <div className="tour-image-container">
              <img src="/images/agra.jpg" alt="Royal Agra" className="tour-image" />
              <div className="badge-duration">
                <MdAccessTime className="badge-icon" /> 1 DAY EXPRESS
              </div>
            </div>
            <div className="tour-content">
              <div className="tour-header">
                <h3 className="tour-title">Royal Agra &amp; Taj Mahal Experience</h3>
                <div className="tour-price-box">
                  <span className="price-label">FROM</span>
                  <div className="tour-price">₹4,999</div>
                </div>
              </div>
              <ul className="tour-highlights">
                <li><MdCheckCircleOutline className="highlight-icon" /> Sunrise Visit to Taj Mahal</li>
              </ul>
              <button className="btn btn-full">View Details <MdArrowForward /></button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
