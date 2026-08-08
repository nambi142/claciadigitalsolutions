import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "../css/Footer.css";

const usefulLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Service", to: "/service" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();

    console.log("Subscribe:", email);

    setEmail("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Check scroll position when component loads
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="site-footer">
        {/* ---------- MAIN FOOTER ---------- */}
        <div className="footer-main">
          <div className="footer-main-inner">
            {/* BRAND + INTRO */}
            <div className="footer-col footer-brand">
              <h2 className="footer-brand-heading">
                CLACIA
                <span>Digital Solutions</span>
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

              <a href="mailto:claciadigitalsolutions@gmail.com" className="footer-contact-email">
                claciadigitalsolutions@gmail.com
              </a>

              <a href="tel:6379080696" className="footer-contact-phone">
                6379080696
              </a>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/clacia_digital_solutions?igsh=bGZmMmkwbm9hNml6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/6379080696"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="mailto:claciadigitalsolutions@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>© {year} All Rights Reserved Clacia Digital Solutions.</span>

            <span>Developed by Muthu Nambi (Dev)</span>
          </div>
        </div>
      </footer>

      {/* ---------- SCROLL TO TOP ---------- */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
