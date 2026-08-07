import React from "react";
import "../css/About.css";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import aboutImage from "../assets/aboutus.png";
import clientlogo1 from "../assets/clientlogo1.jpeg";
import clientlogo2 from "../assets/clientlogo2.jpeg";
import clientlogo3 from "../assets/clientlogo3.jpeg";
import clientlogo4 from "../assets/clientlogo4.jpeg";
import team1 from "../assets/teammember1.jpeg";
import team2 from "../assets/teammember2.jpeg";
import team3 from "../assets/teammember3.jpeg";
import team4 from "../assets/teammember4.jpeg";
import {
  FaBullseye,
  FaPalette,
  FaShieldAlt,
  FaLightbulb,
  FaTrophy,
  FaChevronRight
} from "react-icons/fa";
import { decorativeIcons } from "../pages/Decorativeicons";

const clientLogos = [
  { id: 1, name: "Finance Plus", image: clientlogo1 },
  { id: 2, name: "Consulting Work", image: clientlogo2 },
  { id: 3, name: "Growth Business", image: clientlogo3 },
  { id: 4, name: "Vortech", image: clientlogo4 },
];

const teamMembers = [
  {
    id: 1,
    name: "David L. Landrum",
    role: "CEO & Founder",
    image: team1,
    linkedin: "https://linkedin.com/in/davidlandrum",
    whatsapp: "https://wa.me/919876543210",
    email: "mailto:david@yourcompany.com",
  },
  {
    id: 2,
    name: "Loren B. Snelson",
    role: "Web Developer",
    image: team2,
    linkedin: "https://linkedin.com/in/lorensnelson",
    whatsapp: "https://wa.me/919876543211",
    email: "mailto:loren@yourcompany.com",
  },
  {
    id: 3,
    name: "Michael D. Nichols",
    role: "Web Designer",
    image: team3,
    linkedin: "https://linkedin.com/in/michaelnichols",
    whatsapp: "https://wa.me/919876543212",
    email: "mailto:michael@yourcompany.com",
  },
  {
    id: 4,
    name: "Robert M. Chapman",
    role: "SEO Specialist",
    image: team4,
    linkedin: "https://linkedin.com/in/robertchapman",
    whatsapp: "https://wa.me/919876543213",
    email: "mailto:robert@yourcompany.com",
  },
];

const coreValues = [
  {
    id: "01",
    icon: <FaBullseye />,
    title: "Strategy First",
    text: "Every decision begins with research and a clear growth strategy.",
    image: "/images/core-values/strategy.jpg",
    colorClass: "cv-icon-1",
  },
  {
    id: "02",
    icon: <FaPalette />,
    title: "Creativity with Purpose",
    text: "Designs and content that don't just look beautiful—they perform.",
    image: "/images/core-values/creativity.jpg",
    colorClass: "cv-icon-2",
  },
  {
    id: "03",
    icon: <FaShieldAlt />,
    title: "Transparency",
    text: "Clear communication, measurable performance, and honest reporting.",
    image: "/images/core-values/transparency.jpg",
    colorClass: "cv-icon-3",
  },
  {
    id: "04",
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "Leveraging modern technologies and emerging trends to stay ahead.",
    image: "/images/core-values/innovation.jpg",
    colorClass: "cv-icon-4",
  },
  {
    id: "05",
    icon: <FaTrophy />,
    title: "Client Success",
    text: "Your growth is our greatest achievement.",
    image: "/images/core-values/success.jpg",
    colorClass: "cv-icon-5",
  },
];

const About = () => {
  const title = "About";
  const breadcrumb = "About";
  return (
    <div className="page-wrap">
      {/* ---------- PAGE HEADER ---------- */}
      <section className="page-header">
              {/* subtle scattered icons instead of a custom SVG pattern */}
              <div className="page-header-pattern" aria-hidden="true">
                {decorativeIcons.map(({ Icon, className }, i) => (
                  <Icon key={i} className={className} />
                ))}
              </div>
      
              <div className="page-header-inner">
                <h1 className="page-header-title">{title}</h1>
      
                <nav className="page-header-breadcrumb" aria-label="breadcrumb">
                  <a href="/">Home</a>
                  <FaChevronRight className="page-header-sep" />
                  <span className="page-header-current">{breadcrumb || title}</span>
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
              src={aboutImage}
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
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="cv-card"
                style={{ backgroundImage: `url(${value.image})` }}
              >
                <div className="cv-overlay" />
                <div className="cv-card-content">
                  <span className="cv-index">{value.id}</span>
                  <div className={`cv-icon ${value.colorClass}`}>
                    {value.icon}
                  </div>
                  <h3 className="cv-title">{value.title}</h3>
                  <p className="cv-text">{value.text}</p>
                </div>
              </div>
            ))}
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
