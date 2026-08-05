import React from "react";
import "../css/About.css";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const clientLogos = [
  { id: 1, name: "Finance Plus", image: "src/assets/clientlogo1.jpeg" },
  { id: 2, name: "Consulting Work", image: "src/assets/clientlogo2.jpeg" },
  { id: 3, name: "Growth Business", image: "src/assets/clientlogo3.jpeg" },
  { id: 4, name: "Vortech", image: "src/assets/clientlogo4.jpeg" },
];

const teamMembers = [
  {
    id: 1,
    name: "David L. Landrum",
    role: "CEO & Founder",
    image: "src/assets/teammember1.jpeg",
    linkedin: "https://linkedin.com/in/davidlandrum",
    whatsapp: "https://wa.me/919876543210",
    email: "mailto:david@yourcompany.com",
  },
  {
    id: 2,
    name: "Loren B. Snelson",
    role: "Web Developer",
    image: "src/assets/teammember2.jpeg",
    linkedin: "https://linkedin.com/in/lorensnelson",
    whatsapp: "https://wa.me/919876543211",
    email: "mailto:loren@yourcompany.com",
  },
  {
    id: 3,
    name: "Michael D. Nichols",
    role: "Web Designer",
    image: "src/assets/teammember3.jpeg",
    linkedin: "https://linkedin.com/in/michaelnichols",
    whatsapp: "https://wa.me/919876543212",
    email: "mailto:michael@yourcompany.com",
  },
  {
    id: 4,
    name: "Robert M. Chapman",
    role: "SEO Specialist",
    image: "src/assets/teammember4.jpeg",
    linkedin: "https://linkedin.com/in/robertchapman",
    whatsapp: "https://wa.me/919876543213",
    email: "mailto:robert@yourcompany.com",
  },
];

const About = () => {
  return (
    <div className="page-wrap">
      {/* ---------- PAGE HEADER ---------- */}
      <section className="page-header">
        {/* faint doodle icon pattern background */}
        <svg className="page-header-pattern" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="doodle-pattern"
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
          <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
        </svg>

        <div className="page-header-inner">
          <h1 className="page-header-title">About</h1>

          <nav className="page-header-breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="page-header-sep">&rarr;</span>
            <span className="page-header-current">About</span>
          </nav>
        </div>
      </section>

      {/* ---------- ABOUT CONTENT ---------- */}
      <section className="about-content">
        <div className="about-content-inner">
          <div className="about-content-text">
            <span className="about-eyebrow">Where Strategy Meets Growth</span>

            <h2 className="about-heading">
              About Us
              <span>Who We Are</span>
            </h2>

            <p className="about-para">
              At Clacia Digital Solutions, we believe every brand has the
              potential to become unforgettable. We combine strategic thinking,
              creative excellence, and data-driven marketing to help businesses
              establish a powerful digital presence and achieve measurable
              growth.
            </p>

            <p className="about-para">
              From startups to established businesses, we create customized
              marketing strategies that enhance visibility, generate qualified
              leads, and build lasting customer relationships. Every campaign we
              execute is designed with one goal in mind—delivering meaningful
              business results.
            </p>

            <p className="about-para">
              We don't simply manage social media or run advertisements. We
              build brands that inspire trust, attract customers, and drive
              sustainable growth.
            </p>

            <a href="/contact" className="about-cta">
              Contact Us
            </a>
          </div>

          <div className="about-content-media">
            <div className="about-media-accent"></div>
            <img
              className="about-media-img"
              src="src/assets/aboutus.png"
              alt="Clacia Digital Solutions team working together"
            />
          </div>
        </div>
      </section>

      <section className="mv-section">
        <div className="mv-inner">
          <div className="mv-col">
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">
              To empower businesses with innovative digital marketing solutions
              that create lasting brand value, increase customer engagement, and
              accelerate business growth. As a results-driven digital marketing
              agency, we help brands build a strong online presence through
              data-backed strategies and creative campaigns.
            </p>
          </div>

          <div className="mv-divider"></div>

          <div className="mv-col">
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">
              To become a trusted digital growth partner for businesses
              worldwide by delivering premium, result-oriented, and future-ready
              marketing solutions. We envision a future where every brand—big or
              small—achieves measurable success through smart digital strategy
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="cv-section">
        <div className="cv-inner">
          <span className="cv-eyebrow">What Guides Us</span>

          <h2 className="cv-heading">
            The Core Values That Drive
            <br />
            Clacia Digital Solutions
          </h2>

          <div className="cv-divider">
            <span></span>
            <span></span>
          </div>

          <div className="cv-grid">
            {/* 01 — STRATEGY FIRST */}
            <div className="cv-card">
              <span className="cv-index">01</span>
              <div className="cv-icon cv-icon-1">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="21"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="14"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="1.5"
                  />
                  <circle cx="24" cy="24" r="4" fill="currentColor" />
                  <path
                    d="M24 3v6M24 39v6M3 24h6M39 24h6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33 15L26 22"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path d="M33 15l-2 6-4-2 6-4z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="cv-title">Strategy First</h3>
              <p className="cv-text">
                Every decision begins with research and a clear growth strategy.
              </p>
            </div>

            {/* 02 — CREATIVITY WITH PURPOSE */}
            <div className="cv-card">
              <span className="cv-index">02</span>
              <div className="cv-icon cv-icon-2">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 6c-8.3 0-15 6.3-15 14.5 0 5.6 3.1 8 4.6 10.3.9 1.4 1.4 2.5 1.4 4.2h18c0-1.7.5-2.8 1.4-4.2 1.5-2.3 4.6-4.7 4.6-10.3C39 12.3 32.3 6 24 6z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 39h12M19.5 42.5h9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 12v4M17 16l3 3M31 16l-3 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="5.5"
                    fill="currentColor"
                    fillOpacity="0.18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M24 21v6M21 24h6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="cv-title">Creativity with Purpose</h3>
              <p className="cv-text">
                Designs and content that don't just look beautiful—they perform.
              </p>
            </div>

            {/* 03 — TRANSPARENCY */}
            <div className="cv-card">
              <span className="cv-index">03</span>
              <div className="cv-icon cv-icon-3">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="8"
                    width="22"
                    height="30"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M15 16h12M15 21h12M15 26h7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="32"
                    cy="30"
                    r="9"
                    fill="#fff"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="32"
                    cy="30"
                    r="3.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M38 36l4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M28.5 30l2.5 2.5 4-4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="cv-title">Transparency</h3>
              <p className="cv-text">
                Clear communication, measurable performance, and honest
                reporting.
              </p>
            </div>

            {/* 04 — INNOVATION */}
            <div className="cv-card">
              <span className="cv-index">04</span>
              <div className="cv-icon cv-icon-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 8c-6.6 0-12 5.2-12 11.6 0 4.6 2.6 6.9 4 9.1.9 1.4 1.3 2.3 1.3 3.8h13.4c0-1.5.4-2.4 1.3-3.8 1.4-2.2 4-4.5 4-9.1C36 13.2 30.6 8 24 8z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 36h9M20.5 39.5h7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 4v3M9 12l2 2M39 12l-2 2M6 22h3M42 22h-3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 26l3-8 3 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.8 23.5h4.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="cv-title">Innovation</h3>
              <p className="cv-text">
                Leveraging modern technologies and emerging trends to stay
                ahead.
              </p>
            </div>

            {/* 05 — CLIENT SUCCESS */}
            <div className="cv-card">
              <span className="cv-index">05</span>
              <div className="cv-icon cv-icon-5">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 10h16v10a8 8 0 0 1-16 0V10z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 12h-4a4 4 0 0 0 4 6M32 12h4a4 4 0 0 1-4 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path d="M24 28v6" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M17 40h14M18.5 37h11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 22l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.55"
                  />
                  <circle cx="24" cy="16" r="1.8" fill="currentColor" />
                </svg>
              </div>
              <h3 className="cv-title">Client Success</h3>
              <p className="cv-text">
                Your growth is our greatest achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OUR VALUABLE CLIENTS ---------- */}
      <section className="clients-section">
        <div className="clients-inner">
          <div className="clients-text">
            <h2 className="clients-heading">Our Valuable Clients</h2>

            <div className="clients-divider">
              <span></span>
              <span></span>
            </div>

            <p className="clients-para">
              We're proud to partner with ambitious brands across industries,
              helping them grow their digital presence, strengthen customer
              engagement, and achieve measurable, long-term results.
            </p>
          </div>

          <div className="clients-logos">
            {clientLogos.map((c) => (
              <div className="clients-logo-box" key={c.id}>
                <img src={c.image} alt={c.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <span className="team-tag">Team Member</span>

            <h2>We Have an Experience Team Member! Meet With Us</h2>
          </div>

          <div className="team-grid">
            {teamMembers.map((m) => (
              <div className="team-card" key={m.id}>
                <div className="team-image">
                  <img src={m.image} alt={m.name} />

                  <div className="team-social">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href={m.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} WhatsApp`}
                    >
                      <FaWhatsapp />
                    </a>

                    <a href={m.email} aria-label={`${m.name} Email`}>
                      <FaEnvelope />
                    </a>
                  </div>
                </div>

                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
