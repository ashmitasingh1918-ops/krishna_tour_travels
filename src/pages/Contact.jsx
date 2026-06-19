import React, { useState } from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdSupportAgent, MdExpandMore } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      e.target.reset(); // Reset form fields
      
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1500);
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
    <div className="contact-page">
      {/* 1. Hero Banner */}
      <section className="hero-banner">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_sgoLWwOzWWttkuTAFeq1KADiNiMu7FB7El8M-bO41cS9GaxUOwgy4F_-zmipG77mqu6jvwjAhQy0RIGNs-JplD1RsAurnKt05_RaMUpryOF1mWM1duiWNBC9ZfcRJsWrnJTg9bNQBEc4TsNS6zHWkTDzYArxr2Szgq3Jpp9iuFoazdEG2p5lVZzq5ulJYqR-FhdE1pDPSWKrRIfWIzhD0Xeq7sbKgnkGOu0Pv1-rmZkSCzfIunPnlaMWiPJ6UndOvo7CwE6hew" 
          alt="Sunrise over ancient ghats of Varanasi"
        />
        <div className="hero-content">
          <h2 className="hero-title">Get in Touch</h2>
          <p className="hero-subtitle font-body">Your journey through Heritage India begins with a single conversation.</p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="contact-cards-section container-fluid">
        <div className="row g-3 g-md-4">
          <div className="col-12 col-md-6">
            <a href="tel:+919876543210" className="contact-card">
              <div className="icon-container icon-primary">
                <MdPhone />
              </div>
              <div>
                <p className="card-label font-body">Phone</p>
                <p className="card-value">+91 98765 43210</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <a href="#" className="contact-card">
              <div className="icon-container icon-whatsapp">
                <FaWhatsapp />
              </div>
              <div>
                <p className="card-label font-body">WhatsApp</p>
                <p className="card-value">Chat with an Expert</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <a href="mailto:info@krishnatour.com" className="contact-card">
              <div className="icon-container icon-primary">
                <MdEmail />
              </div>
              <div>
                <p className="card-label font-body">Email</p>
                <p className="card-value">info@krishnatour.com</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <div className="contact-card no-hover">
              <div className="icon-container icon-primary">
                <MdLocationOn />
              </div>
              <div>
                <p className="card-label font-body">Office</p>
                <p className="card-address">102, Heritage Plaza, Connaught Place, New Delhi - 110001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiry Form */}
      <section className="inquiry-section">
        <div className="inquiry-card">
          <h3 className="section-title">Request a Personalized Tour</h3>
          <div className="title-line"></div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label-custom font-body">Name</label>
              <input type="text" className="form-control-custom" placeholder="Your Full Name" name="name" required disabled={formState === 'submitting'} />
            </div>
            
            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label className="form-label-custom font-body">Phone</label>
                <input type="tel" className="form-control-custom" placeholder="+91 00000 00000" name="phone" required disabled={formState === 'submitting'} />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label-custom font-body">Email</label>
                <input type="email" className="form-control-custom" placeholder="example@email.com" name="email" required disabled={formState === 'submitting'} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label className="form-label-custom font-body">Pickup Location</label>
                <input type="text" className="form-control-custom" placeholder="e.g. Airport or Hotel" name="pickup_location" disabled={formState === 'submitting'} />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label-custom font-body">Destination</label>
                <input type="text" className="form-control-custom" placeholder="e.g. Ayodhya, Varanasi" name="destination" disabled={formState === 'submitting'} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label className="form-label-custom font-body">Vehicle Type</label>
                <select className="form-control-custom" name="vehicle_type" disabled={formState === 'submitting'}>
                  <option value="">Select Vehicle</option>
                  <option value="innova">Toyota Innova Crysta (6+1)</option>
                  <option value="fortuner">Toyota Fortuner (Premium)</option>
                  <option value="tempo">Tempo Traveller (12+1)</option>
                  <option value="sedan">Luxury Sedan</option>
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label-custom font-body">Travel Date</label>
                <input type="date" className="form-control-custom" name="travel_date" required disabled={formState === 'submitting'} />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label-custom font-body">Message</label>
              <textarea className="form-control-custom" rows="4" placeholder="Any special requests or details about your journey..." name="message" disabled={formState === 'submitting'}></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn-submit ${formState === 'success' ? 'success' : ''}`}
              disabled={formState === 'submitting'}
            >
              {formState === 'idle' && 'Send Inquiry'}
              {formState === 'submitting' && 'Sending...'}
              {formState === 'success' && 'Inquiry Sent!'}
            </button>
          </form>
        </div>
      </section>

      {/* 4. Google Maps Placeholder */}
      <section className="map-section">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCda_PUWrHj5YTuK6Y4qyYMYXs5MC2O8UiO5eFqZPnGvnVOtWlLdjCoEFa9IXo8emHTXTlHh6hGSmZw2XLcN6P2eVNnHcrLtooHPy1q9kheayvMql6o3JCHeaSRtNL_LhZpQHigyIAgy1iWKp5ILfYPcrCrnbYpuDUyAZVCd6CAvIIc6hSCk0jzYGt0hUMHSJD9dXrM7F3h92lwNsCo7mpN__PabU_sH1wOe-ZXiS2NaYq_jspAfdaFzpJpSfq-JkJvfT6x4a9b-e4" 
          alt="Map of New Delhi" 
          className="map-img"
        />
        <div className="map-overlay">
          <div className="map-badge">
            <MdLocationOn className="icon" />
            <p className="badge-label font-body">Our Head Office</p>
            <p className="badge-value">New Delhi</p>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="faq-section">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <p className="faq-desc font-body">Common queries about your booking and tour experience.</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-header" onClick={() => toggleFaq(index)} type="button">
                <span className="faq-question">{faq.question}</span>
                <MdExpandMore className={`faq-icon ${openFaq === index ? 'open' : ''}`} />
              </button>
              <div className={`faq-body font-body ${openFaq === index ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Emergency Support CTA */}
      <section className="emergency-section">
        <div className="emergency-banner">
          <div className="bg-decorator-1"></div>
          <div className="bg-decorator-2"></div>
          
          <div className="emergency-content">
            <div className="emergency-badge font-body">
              <div className="pulse-dot"></div>
              Emergency Only
            </div>
            <h3 className="emergency-title">24/7 Roadside Assistance</h3>
            <p className="emergency-desc font-body">Stuck on the road or need immediate support? We're always here.</p>
          </div>
          
          <div className="emergency-action">
            <a href="tel:1800-000-0000" className="btn-emergency">
              <MdSupportAgent />
              1800-000-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;