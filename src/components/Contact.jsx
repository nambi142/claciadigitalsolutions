import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up your form submission logic here (API call, email service, etc.)
    console.log("Form submitted:", formData);
  };
  return (
    <div className="page-wrap">
      {/* ---------- PAGE HEADER ---------- */}
      <section className="page-header">
        {/* faint doodle icon pattern background */}
        <svg className="page-header-pattern" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="doodle-pattern-services"
              width="180"
              height="180"
              patternUnits="userSpaceOnUse"
            >
              {/* globe */}
              <circle
                cx="20"
                cy="20"
                r="14"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <ellipse
                cx="20"
                cy="20"
                rx="6"
                ry="14"
                fill="none"
                stroke="#fff"
                strokeWidth="1.2"
              />
              <line
                x1="6"
                y1="20"
                x2="34"
                y2="20"
                stroke="#fff"
                strokeWidth="1.2"
              />

              {/* envelope */}
              <rect
                x="80"
                y="10"
                width="30"
                height="20"
                rx="2"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <polyline
                points="80,12 95,24 110,12"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
              />

              {/* bar chart */}
              <line
                x1="20"
                y1="100"
                x2="20"
                y2="120"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <line
                x1="28"
                y1="90"
                x2="28"
                y2="120"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <line
                x1="36"
                y1="105"
                x2="36"
                y2="120"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <line
                x1="12"
                y1="120"
                x2="44"
                y2="120"
                stroke="#fff"
                strokeWidth="1.4"
              />

              {/* target */}
              <circle
                cx="105"
                cy="100"
                r="16"
                fill="none"
                stroke="#fff"
                strokeWidth="1.2"
              />
              <circle
                cx="105"
                cy="100"
                r="9"
                fill="none"
                stroke="#fff"
                strokeWidth="1.2"
              />
              <circle cx="105" cy="100" r="2.5" fill="#fff" />

              {/* mobile / device */}
              <rect
                x="55"
                y="55"
                width="18"
                height="30"
                rx="3"
                fill="none"
                stroke="#fff"
                strokeWidth="1.2"
              />
              <line
                x1="60"
                y1="80"
                x2="68"
                y2="80"
                stroke="#fff"
                strokeWidth="1.2"
              />

              {/* share icon (three connected nodes) */}
              <circle
                cx="145"
                cy="30"
                r="5"
                fill="none"
                stroke="#fff"
                strokeWidth="1.3"
              />
              <circle
                cx="145"
                cy="55"
                r="5"
                fill="none"
                stroke="#fff"
                strokeWidth="1.3"
              />
              <circle
                cx="163"
                cy="42"
                r="5"
                fill="none"
                stroke="#fff"
                strokeWidth="1.3"
              />
              <line
                x1="149"
                y1="33"
                x2="159"
                y2="40"
                stroke="#fff"
                strokeWidth="1.2"
              />
              <line
                x1="149"
                y1="52"
                x2="159"
                y2="45"
                stroke="#fff"
                strokeWidth="1.2"
              />

              {/* instagram-style camera icon */}
              <rect
                x="130"
                y="95"
                width="34"
                height="34"
                rx="9"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <circle
                cx="147"
                cy="112"
                r="9"
                fill="none"
                stroke="#fff"
                strokeWidth="1.3"
              />
              <circle cx="157" cy="102" r="1.8" fill="#fff" />

              {/* facebook-style icon */}
              <circle
                cx="150"
                cy="155"
                r="16"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <path
                d="M153 147h-4a4 4 0 0 0-4 4v4h-4v6h4v14h6v-14h5l1-6h-6v-3a1.5 1.5 0 0 1 1.5-1.5H153z"
                fill="#fff"
                stroke="none"
              />

              {/* like / heart icon */}
              <path
                d="M55 145c-4-5-12-3-12 4 0 6 8 11 12 15 4-4 12-9 12-15 0-7-8-9-12-4z"
                fill="none"
                stroke="#fff"
                strokeWidth="1.3"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#doodle-pattern-services)"
          />
        </svg>

        <div className="page-header-inner">
          <h1 className="page-header-title">Contact Us</h1>

          <nav className="page-header-breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="page-header-sep">&rarr;</span>
            <span className="page-header-current">Contact Us</span>
          </nav>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          {/* Left column */}
          <div className="contact-info">
            <h1 className="contact-heading">
              Feel free to talk
            </h1>
            <p className="contact-subtext">
              We are always ready to help. There are many ways to contact us.
              You may drop us a line, give us a call, or send an email.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon-circle">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="method-label">Call Us!</p>
                  <p className="method-value">(00) 123 456 789</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon-circle">
                  <MailIcon />
                </div>
                <div>
                  <p className="method-label">Mail Us!</p>
                  <p className="method-value">Info@gmail.com</p>
                </div>
              </div>
            </div>

            <hr className="divider" />

            <div className="contact-extra">
              <div className="extra-block">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                </div>
              </div>

              <div className="extra-block">
                <h3>Location</h3>
                <p className="location-text">
                  2118 Thornridge Cir. Syre Bint, NY
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="contact-form-wrapper">
            <h2 className="form-heading">Send us a message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={5}
              />
              <button type="submit" className="submit-btn">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
 
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
 
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
 
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" />
    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);
 
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
 
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Contact;
