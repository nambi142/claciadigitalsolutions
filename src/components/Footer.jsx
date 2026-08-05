import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../css/Footer.css";

const usefulLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Service", to: "/service" },
  { label: "Testimonials", to: "/testimonials" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire this up to your newsletter/email service
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="site-footer">
      {/* ---------- MAIN FOOTER ---------- */}
      <div className="footer-main">
        <div className="footer-main-inner">
          {/* BRAND + INTRO */}
          <div className="footer-col footer-brand">
            <h2 className="footer-brand-heading">
              CLACIA
              <span> Digital Solutions</span>
            </h2>

            <p className="footer-brand-text">
              We help brands grow through creative design, powerful marketing
              strategies and modern web development that delivers real,
              measurable results.
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Useful Links</h4>

            <ul className="footer-links">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>

            <a href="mailto:dummy@example.com" className="footer-contact-email">
              DUMMY@EXAMPLE.COM
            </a>

            <p className="footer-contact-phone">+91 (123) 456 7890</p>

            <div className="footer-socials">
              <a
                href="https://instagram.com/dummyhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp">
                <FaWhatsapp />
              </a>

              <a href="mailto:dummy@example.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM BAR ---------- */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>
            © {year} All Rights Reserved Clacia Digital Solutions.
          </span>

          <span>
            Developed by Muthu Nambi (Dev)
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;