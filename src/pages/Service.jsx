import React from "react";
import "../css/Service.css";
import {
  FaChartPie,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaChevronRight
} from "react-icons/fa";
import Branding from "../assets/our_service/Branding.png";
import seooptimaization from "../assets/our_service/seooptimazation.png";
import socialmediamarketing from "../assets/our_service/socialmediamarketing.png";
import contentmarketingteam from "../assets/our_service/content-marketing-team.png";
import webdesign from "../assets/our_service/webdesigning.png";
import Digitalstartegies from "../assets/our_service/digital-stratagies.png";
import workflowImg from "../assets/workflowimg.png";
import innovationImg from "../assets/innovation.png";
import { decorativeIcons } from "../pages/Decorativeicons";
import { Link } from "react-router-dom";


const services = [
  {
    id: 1,
    title: "Branding & Creative Design",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaBullhorn />,
    image: Branding,
  },
  {
    id: 2,
    title: "SEO Optimaization",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaLaptopCode />,
    image: seooptimaization,
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaChartPie />,
    image: socialmediamarketing,
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaMobileAlt />,
    image: webdesign,
  },
  {
    id: 5,
    title: "Content Marketing",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaBullhorn />,
    image: contentmarketingteam,
  },
  {
    id: 6,
    title: "Digital Strategy",
    description:
      "We design develop and maintain software applications designed here",
    icon: <FaChartPie />,
    image: Digitalstartegies,
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
  const title = "Services";
  const breadcrumb = "Services";
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

            <Link to="/contact" className="skillup-btn">
              Free Consultation
            </Link>

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
              src={innovationImg}
              alt="Clacia Digital Solutions team working on strategy"
            />
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
                src={workflowImg}
                alt="Digital marketing process"
                className="process-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
