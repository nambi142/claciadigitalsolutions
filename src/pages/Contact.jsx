import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import { decorativeIcons } from "../pages/Decorativeicons";
import {
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

// ---------- EmailJS config — add your real keys here later ----------
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// ---------- Contact details ----------
const CONTACT_PHONE = "+91 6379080696";
const CONTACT_PHONE_RAW = "6379080696";
const CONTACT_EMAIL = " claciadigitalsolutions@gmail.com";
const WHATSAPP_NUMBER = "6379080696";
const LINKEDIN_URL = "https://linkedin.com/in/yourprofile";
const INSTAGRAM_URL = "https://www.instagram.com/clacia_digital_solutions?igsh=bGZmMmkwbm9hNml6ttps://instagram.com/yourprofile";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ sending: false, success: null });

  const title = "Contact";
  const breadcrumb = "Contact";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: null });

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus({ sending: false, success: true });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus({ sending: false, success: false });
      });
  };

  return (
    <div className="page-wrap">
      {/* ---------- PAGE HEADER ---------- */}
      <section className="page-header">
        <div className="page-header-pattern" aria-hidden="true">
          {decorativeIcons.map(({ Icon, className }, i) => (
            <Icon key={i} className={className} />
          ))}
        </div>

        <div className="page-header-inner">
          <h1 className="page-header-title">{title}</h1>

          <nav className="page-header-breadcrumb" aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight className="page-header-sep" />
            <span className="page-header-current">{breadcrumb || title}</span>
          </nav>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          {/* Left column */}
          <div className="contact-info">
            <h1 className="contact-heading">Feel free to talk</h1>
            <p className="contact-subtext">
              Whether you're launching a new business, strengthening your brand,
              or scaling your digital presence, Clacia Digital Solutions is here
              to help you achieve measurable success. Services
            </p>

            <div className="contact-methods">
              <a
                href={`tel:${CONTACT_PHONE_RAW}`}
                className="contact-method contact-method-link"
              >
                <div className="icon-circle">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="method-label">Call Us!</p>
                  <p className="method-value">{CONTACT_PHONE}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-method contact-method-link"
              >
                <div className="icon-circle">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="method-label">Mail Us!</p>
                  <p className="method-value">{CONTACT_EMAIL}</p>
                </div>
              </a>
            </div>

            <hr className="divider" />

            <div className="contact-extra">
              <div className="extra-block">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
                    <FaEnvelope />
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
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
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
                required
              />
              <button
                type="submit"
                className="submit-btn"
                disabled={status.sending}
              >
                {status.sending ? "Sending..." : "Submit Now"}
              </button>

              {status.success === true && (
                <p className="form-status form-status-success">
                  Message sent successfully!
                </p>
              )}
              {status.success === false && (
                <p className="form-status form-status-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
