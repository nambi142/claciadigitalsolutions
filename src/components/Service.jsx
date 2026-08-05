import React from "react";
import "../css/Service.css";
import {
  FaChartPie,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "User Experience Design",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaBullhorn />,
    image: "src/assets/services/socialmedia.jpeg",
  },
  {
    id: 2,
    title: "E-commerce Development",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaLaptopCode />,
    image: "src/assets/services/socialmedia.jpeg",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaChartPie />,
    image: "src/assets/services/socialmedia.jpeg",
  },
  {
    id: 4,
    title: "App Development",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaMobileAlt />,
    image: "src/assets/services/socialmedia.jpeg",
  },
  {
    id: 5,
    title: "Content Marketing",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaBullhorn />,
    image: "src/assets/services/socialmedia.jpeg",
  },
  {
    id: 6,
    title: "Digital Strategy",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaChartPie />,
    image: "src/assets/services/socialmedia.jpeg",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Benefited For Digital Marketing Solution",
    badgeColor: "#a020f0",
  },
  {
    id: "02",
    title: "Content and Email Marketing Solutions",
    badgeColor: "#f5c518",
  },
  {
    id: "03",
    title: "UI/UX Design & Web Development",
    badgeColor: "#1a1030",
  },
];

const Services = () => {
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
          <h1 className="page-header-title">Services</h1>

          <nav className="page-header-breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="page-header-sep">&rarr;</span>
            <span className="page-header-current">Services</span>
          </nav>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="services-tag">
              <span className="tag-line" /> OUR SERVICES{" "}
              <span className="tag-line" />
            </span>

            <h2>You Take Growth For Business</h2>

            <p className="services-subtext">
              Our strategy includes consistently evolving, to ensure we're
              producing exceptional results for your business.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.id}>
                <div className="service-image">
                  <img src={s.image} alt={s.title} />
                  <span className="service-icon-badge">{s.icon}</span>
                </div>

                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <div className="process-grid">
            {/* LEFT: tag + heading + step 01 */}
            <div className="process-col process-col-left">
              <span className="process-tag">Working Process</span>

              <h2>Foundations of SEO to Complete Our Business Missions</h2>

              <div className="process-card">
                <span
                  className="process-number"
                  style={{ background: processSteps[0].badgeColor }}
                >
                  {processSteps[0].id}
                </span>
                <h3>{processSteps[0].title}</h3>
              </div>
            </div>

            {/* MIDDLE: step 02 + step 03 (offset down) */}
            <div className="process-col process-col-middle">
              <div className="process-card">
                <span
                  className="process-number"
                  style={{ background: processSteps[1].badgeColor }}
                >
                  {processSteps[1].id}
                </span>
                <h3>{processSteps[1].title}</h3>
              </div>

              <div className="process-card process-card-offset">
                <span
                  className="process-number process-number-outline"
                  style={{ borderColor: processSteps[2].badgeColor }}
                >
                  {processSteps[2].id}
                </span>
                <h3>{processSteps[2].title}</h3>
              </div>
            </div>

            {/* RIGHT: image */}
            <div className="process-col process-col-image">
              <img
                src="src/assets/workflowimg.png"
                alt="Digital marketing process"
                className="process-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SKILL UP OUR COMPANY GROWTH ---------- */}
      <section className="skillup-section">
        <div className="skillup-inner">
          <div className="skillup-text">
            <span className="skillup-eyebrow">Skill Up Our Company Growth</span>

            <h2 className="skillup-heading">
              We Continuously Skill Up to Drive Company Growth and Innovation.
            </h2>

            <p className="skillup-para">
              We continuously improve our skills, strategies, and technologies
              to drive sustainable company growth, innovation, and deliver
              better results for every client we work with.
            </p>

            <a href="/contact" className="skillup-btn">
              Free Consultation
            </a>

            <div className="skillup-bars">
              <div className="skillup-bar-row">
                <div className="skillup-bar-label">
                  <span>Digital Marketing</span>
                  <span
                    className="skillup-percent"
                    style={{ color: "#a020f0" }}
                  >
                    96%
                  </span>
                </div>
                <div className="skillup-bar-track">
                  <div
                    className="skillup-bar-fill"
                    style={{ width: "96%", background: "#a020f0" }}
                  ></div>
                </div>
              </div>

              <div className="skillup-bar-row">
                <div className="skillup-bar-label">
                  <span>Email Marketing</span>
                  <span
                    className="skillup-percent"
                    style={{ color: "#2ea48f" }}
                  >
                    74%
                  </span>
                </div>
                <div className="skillup-bar-track">
                  <div
                    className="skillup-bar-fill"
                    style={{ width: "74%", background: "#2ea48f" }}
                  ></div>
                </div>
              </div>

              <div className="skillup-bar-row">
                <div className="skillup-bar-label">
                  <span>Social Media Marketing</span>
                  <span
                    className="skillup-percent"
                    style={{ color: "#3f6ee0" }}
                  >
                    80%
                  </span>
                </div>
                <div className="skillup-bar-track">
                  <div
                    className="skillup-bar-fill"
                    style={{ width: "80%", background: "#3f6ee0" }}
                  ></div>
                </div>
              </div>

              <div className="skillup-bar-row">
                <div className="skillup-bar-label">
                  <span>Search Engine Optimization</span>
                  <span
                    className="skillup-percent"
                    style={{ color: "#e07a3f" }}
                  >
                    68%
                  </span>
                </div>
                <div className="skillup-bar-track">
                  <div
                    className="skillup-bar-fill"
                    style={{ width: "68%", background: "#e07a3f" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skillup-media">
            <div className="skillup-shape skillup-shape-1"></div>
            <div className="skillup-shape skillup-shape-2"></div>
            <img
              className="skillup-img"
              src="src/assets/innovation.png"
              alt="Clacia Digital Solutions team working on strategy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
