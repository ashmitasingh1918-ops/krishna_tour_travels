import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime, MdSend, MdExpandMore, MdSupportAgent } from 'react-icons/md';
import { FiShield, FiBriefcase, FiHeadphones } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import branded_hero from "../assets/images/branded_hero.jpg";
import kia_car from "../assets/images/kia.jpeg";

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [openFaq, setOpenFaq] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const officeLocation = {
    address: "Rz-7/232 J-Block west sagarpur new delhi 110046 (India) near Sakuntla hospital",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Rz-7/232%20J-Block%20west%20sagarpur%20new%20delhi%20110046&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        e.target.reset();
        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      } else {
        console.error("Error submitting form", data);
        setFormState('idle');
        alert("Failed to send inquiry. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormState('idle');
      alert("Failed to send inquiry. Please try again later.");
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      question: "How do I confirm my car booking?",
      answer: "Booking can be confirmed by paying a 25% token amount via UPI, Net Banking, or Credit Card. Once received, we issue an official booking voucher with vehicle and driver details."
    },
    {
      question: "What is included in the tour price?",
      answer: "Our prices typically include vehicle rental, driver allowance, fuel, and toll taxes. State taxes and parking fees are usually extra unless specified in your package."
    },
    {
      question: "Are your drivers experienced for hilly areas?",
      answer: "Yes, all our drivers are professionally trained and have a minimum of 10 years of experience navigating both city traffic and complex North Indian mountain terrain."
    }
  ];

  return (
    <div className="contact-page-modern">
      {/* 1. New Premium Hero Section */}
      <section className="contact-hero-premium">
        <img
          src={branded_hero}
          alt="Branded Krishna Tour Car"
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
        <div className="container hero-content-wrap">
          <div className="hero-text-side">
            <div className="tag-bar"></div>
            <h1 className="hero-main-title">CONTACT US</h1>

            <div className="hero-divider">
              <div className="divider-line"></div>
              <div className="divider-diamond">♦</div>
              <div className="divider-line"></div>
            </div>

            <p className="hero-p">
              Experience seamless travel with our premium fleet and dedicated support team. From booking to destination, we're committed to delivering exceptional service.       </p>

            <div className="hero-features-row">
              <div className="hero-feature-item">
                <div className="feature-circle magenta-bg">
                  <FiHeadphones />
                </div>
                <div className="feature-info">
                  <strong>Quick Response</strong>
                  <span>We reply within 24 hours</span>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="feature-circle navy-bg">
                  <MdSupportAgent />
                </div>
                <div className="feature-info">
                  <strong>Travel Experts</strong>
                  <span>Advice from professionals</span>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="feature-circle gold-bg">
                  <FiShield />
                </div>
                <div className="feature-info">
                  <strong>Reliable & Trusted</strong>
                  <span>Your satisfaction is our priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="row g-5">
            {/* Left Column: Info */}
            <div className="col-lg-5">
              <div className="get-in-touch">
                <h2 className="section-heading-main">GET IN TOUCH</h2>
                <div className="heading-underline"></div>
                <p className="section-desc">
                  Have a question or need help with your booking? Our team is ready to assist you 24/7.
                </p>

                <div className="contact-details-list-exact">
                  <div className="detail-item-exact">
                    <div className="icon-box-exact">
                      <MdPhone />
                    </div>
                    <div className="detail-text-exact">
                      <h6>Call Us</h6>
                      <p>+91 8800770603</p>
                      <p>+91 8920462315</p>
                    </div>
                  </div>

                  <div className="detail-item-exact">
                    <div className="icon-box-exact">
                      <MdEmail />
                    </div>
                    <div className="detail-text-exact">
                      <h6>Email Us</h6>
                      <p>info@krishnatourindia.com</p>

                    </div>
                  </div>

                  <div className="detail-item-exact">
                    <div className="icon-box-exact">
                      <MdLocationOn />
                    </div>
                    <div className="detail-text-exact">
                      <h6>Our Location</h6>
                      <p>{officeLocation.address}</p>
                    </div>
                  </div>

                  <div className="detail-item-exact">
                    <div className="icon-box-exact">
                      <MdAccessTime />
                    </div>
                    <div className="detail-text-exact">
                      <h6>Working Hours</h6>
                      <p>Mon - Sun : 6:00 AM - 11:00 PM</p>
                      <p className="accent-text">(Open 7 Days a Week)</p>
                    </div>
                  </div>

                  <div className="detail-item-exact">
                    <div className="icon-box-exact">
                      <FaWhatsapp />
                    </div>
                    <div className="detail-text-exact">
                      <h6>WhatsApp Us</h6>
                      <p> +91 8800770603</p>
                      <a
                        href="https://wa.me/8800770603"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-text"
                      >
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Your Exact Inquiry Form */}
            <div className="col-lg-7">
              <section className="inquiry-section-modern-wrap" id="contactForm">
                <div className="inquiry-card-new">
                  <h3 className="section-title-new">Request a Personalized Tour</h3>
                  <div className="title-line-new"></div>

                  <form onSubmit={handleSubmit}>
                    {/* Hidden fields for Web3Forms configuration */}
                    <input type="hidden" name="subject" value="🚖 New Krishna Tours Booking Inquiry" />
                    <input type="hidden" name="from_name" value="Krishna Tours & Travels Website" />

                    <div className="mb-3">
                      <label className="form-label-custom font-body">Name</label>
                      <input type="text" className="form-control-custom" placeholder="Your Full Name" name="Customer Name" required disabled={formState === 'submitting'} />
                    </div>

                    <div className="row mb-3">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <label className="form-label-custom font-body">Phone</label>
                        <input type="tel" className="form-control-custom" placeholder="+91 00000 00000" name="Phone Number" required minLength="10" disabled={formState === 'submitting'} />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label-custom font-body">Email</label>
                        <input type="email" className="form-control-custom" placeholder="example@email.com" name="Email Address" required disabled={formState === 'submitting'} />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <label className="form-label-custom font-body">Pickup Location</label>
                        <input type="text" className="form-control-custom" placeholder="e.g. Airport or Hotel" name="Pickup Location" required disabled={formState === 'submitting'} />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label-custom font-body">Destination</label>
                        <input type="text" className="form-control-custom" placeholder="e.g. Ayodhya, Varanasi" name="Destination" required disabled={formState === 'submitting'} />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <label className="form-label-custom font-body">Vehicle Type</label>
                        <select className="form-control-custom" name="Vehicle Requested" required disabled={formState === 'submitting'}>
                          <option value="">Select Vehicle</option>
                          <option value="innova">Toyota Innova Crysta (6+1)</option>
                          <option value="fortuner">Toyota Fortuner (Premium)</option>
                          <option value="tempo">Tempo Traveller (12+1)</option>
                          <option value="sedan">Luxury Sedan</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label-custom font-body">Travel Date</label>
                        <input type="date" className="form-control-custom" name="Journey Date" required disabled={formState === 'submitting'} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label-custom font-body">Message</label>
                      <textarea className="form-control-custom" rows="4" placeholder="Any special requests or details about your journey..." name="Additional Message" disabled={formState === 'submitting'}></textarea>
                    </div>

                    {/* Success Message Banner */}
                    {formState === 'success' && (
                      <div className="alert alert-success font-body mb-3" style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px', border: '1px solid #c3e6cb' }}>
                        ✅ Inquiry sent successfully. Our team will contact you shortly.
                      </div>
                    )}

                    <button
                      type="submit"
                      className={`btn-submit-exact ${formState === 'success' ? 'success' : ''}`}
                      disabled={formState === 'submitting'}
                    >
                      {formState === 'idle' && 'Send Inquiry'}
                      {formState === 'submitting' && 'Sending...'}
                      {formState === 'success' && 'Inquiry Sent!'}
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section className="full-map-section">
        <iframe
          src={officeLocation.googleMapsEmbedUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>

        <div className="map-info-card-exact">
          <div className="map-badge-icon">
            <MdLocationOn />
          </div>
          <h4>Find Us Here</h4>
          <p>{officeLocation.address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeLocation.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-directions-exact"
          >
            GET DIRECTIONS <span className="arrow">›</span>
          </a>
        </div>
      </section>

      {/* 4. FAQ Section - Added from original code */}
      <section className="faq-section-modern">
        <div className="container">
          <h3 className="section-heading-main text-center">FREQUENTLY ASKED QUESTIONS</h3>
          <div className="heading-underline mx-auto"></div>
          <p className="section-desc text-center">Common queries about your booking and tour experience.</p>

          <div className="faq-list-modern">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item-modern">
                <button className="faq-header-modern" onClick={() => toggleFaq(index)} type="button">
                  <span className="faq-question-modern">{faq.question}</span>
                  <MdExpandMore className={`faq-icon-modern ${openFaq === index ? 'open' : ''}`} />
                </button>
                <div className={`faq-body-modern ${openFaq === index ? 'open' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Booking Banner */}
      <section className="bottom-booking-cta">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="cta-tagline">NEED A RIDE?</span>
              <h2 className="cta-title">BOOK YOUR RIDE TODAY!</h2>
              <p className="cta-subtitle">Safe, Reliable & Comfortable Rides at the Best Prices.</p>

              <div className="d-flex gap-3 mb-5">
                <button className="btn-book-now-exact">BOOK NOW <span className="arrow">›</span></button>
                <a
                  href="https://wa.me/8800770603?text=Hello%20Krishna%20Tours,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-cta"
                >
                  WHATSAPP US <span className="arrow">›</span>
                </a>
              </div>

              <div className="cta-features">
                <div className="feature-item-small">
                  <div className="feature-icon-small"><FiShield /></div>
                  <div className="feature-text-small">
                    <strong>Safe & Secure</strong>
                    <p>Your safety is our priority</p>
                  </div>
                </div>
                <div className="feature-item-small">
                  <div className="feature-icon-small"><FiBriefcase /></div>
                  <div className="feature-text-small">
                    <strong>Best Prices</strong>
                    <p>Affordable rates guaranteed</p>
                  </div>
                </div>
                <div className="feature-item-small">
                  <div className="feature-icon-small"><FiHeadphones /></div>
                  <div className="feature-text-small">
                    <strong>24/7 Support</strong>
                    <p>We are here to help anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="cta-image-wrapper">
                <img
                  src={kia_car}
                  alt="Kia Luxury SUV"
                  className="cta-car-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;