import React, { useState } from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdSupportAgent, MdExpandMore } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [openFaq, setOpenFaq] = useState(0);

  const officeLocation = {
    address: "Rz-7/232 J-Block west sagarpur new delhi 110046 near Sakuntla hospital",
    latitude: 28.5921,
    longitude: 77.0863,
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Rz-7/232%20J-Block%20west%20sagarpur%20new%20delhi%20110046&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  };

  // Handle form submission via Web3Forms API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    // Create FormData object from the form elements
    const formData = new FormData(e.target);
    // Append Web3Forms access key securely from environment variables
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      // Submit data to Web3Forms endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Success handling: Show success message and reset form
        setFormState('success');
        e.target.reset(); // Reset form fields

        // Keep the success message visible for a few seconds
        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      } else {
        // Error handling from API response
        console.error("Error submitting form", data);
        setFormState('idle');
        alert("Failed to send inquiry. Please try again later.");
      }
    } catch (error) {
      // Error handling for network issues
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

          {/* Phone */}
          <div className="col-12 col-md-6">
            <a
              href="tel:+919644518922"
              className="contact-card"
            >
              <div className="icon-container icon-primary">
                <MdPhone />
              </div>

              <div>
                <p className="card-label font-body">Phone</p>
                <p className="card-value">+91 8920462315</p>
              </div>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="col-12 col-md-6">
            <a
              href="https://wa.me/8920462315?text=Hello%20Krishna%20Tours,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="icon-container icon-whatsapp">
                <FaWhatsapp />
              </div>

              <div>
                <p className="card-label font-body">WhatsApp</p>
                <p className="card-value">Chat with an Expert</p>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className="col-12 col-md-6">
            <a
              href="mailto:info@krishnatour.com"
              className="contact-card"
            >
              <div className="icon-container icon-primary">
                <MdEmail />
              </div>

              <div>
                <p className="card-label font-body">Email</p>
                <p className="card-value">info@krishnatourindia.com</p>
              </div>
            </a>
          </div>

          {/* Office */}
          <div className="col-12 col-md-6">
            <div className="contact-card no-hover">
              <div className="icon-container icon-primary">
                <MdLocationOn />
              </div>

              <div>
                <p className="card-label font-body">Office</p>
                <p className="card-address">
                  {officeLocation.address}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Inquiry Form */}
      <section className="inquiry-section" id="contactForm">
        <div className="inquiry-card">
          <h3 className="section-title">Request a Personalized Tour</h3>
          <div className="title-line"></div>

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

      {/* 4. Google Maps Section */}
      <section className="map-section interactive-map">
        <iframe
          src={officeLocation.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
          className="google-map-iframe"
        ></iframe>
        <div className="map-overlay interactive-overlay">
          <div className="map-badge interactive-badge">
            <MdLocationOn className="icon" />
            <p className="badge-label font-body">📍 Head Office</p>
            <p className="badge-value">Krishna Tours & Travels</p>
            <p className="badge-address font-body">{officeLocation.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeLocation.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-link font-body"
            >
              Open in Google Maps
            </a>
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