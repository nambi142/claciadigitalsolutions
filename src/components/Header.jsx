import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../context/Themecontext";
import { FaPhoneAlt, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "../css/Header.css";
import logo from "../assets/brandlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <aside className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <div className="mobile-logo">
          <img src={logo} alt="Clacia Digital Solutions" />

          <div>
            <h2>CLACIA</h2>
            <p>Digital Solutions</p>
          </div>
        </div>

        <div className="mobile-links">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/service" onClick={closeMenu}>
            Service
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </aside>

      <header className={`header ${menuOpen ? "menu-open" : ""}`}>
        <div className="header-container">
          <div className="logo-section">
            <img src={logo} alt="Clacia Digital Solutions" />

            <div>
              <h2>CLACIA</h2>
              <p>Digital Solutions</p>
            </div>
          </div>

          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="header-right">
            <button className="theme-btn" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <NavLink to="/Contact" className="call-btn">
              <span className="phone-icon">
                <FaPhoneAlt />
              </span>
              <span>Let's Talk</span>
            </NavLink>

            <button
              className="menu-icon"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
