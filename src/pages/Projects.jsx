import React from "react";
import "../css/Projects.css";
import { useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import businessCard from "../assets/services/bussinesscard.jpeg";
import googleAds from "../assets/services/googleads.jpeg";
import metaAds from "../assets/services/metaads.jpeg";
import webDevelopment from "../assets/services/webdevlopement.jpeg";
import { decorativeIcons } from "../pages/Decorativeicons";

// Sample project data — replace with your real projects
const projects = [
  {
    id: 1,
    title: "Brand Identity Development",
    category: "marketing",
    categoryLabel: "Marketing",
    image: businessCard,
  },
  {
    id: 2,
    title: "Performance Marketing Campaign",
    category: "optimization",
    categoryLabel: "Optimization",
    image: googleAds,
  },
  {
    id: 3,
    title: "Website Designing",
    category: "development",
    categoryLabel: "Development",
    image: metaAds,
  },
  {
    id: 4,
    title: "Social Media Growth Campaign",
    category: "media",
    categoryLabel: "Media",
    image: webDevelopment,
  },
];

const filters = [
  { key: "all", label: "All", count: projects.length },
  {
    key: "development",
    label: "Development",
    count: projects.filter((p) => p.category === "development").length,
  },
  {
    key: "marketing",
    label: "Marketing",
    count: projects.filter((p) => p.category === "marketing").length,
  },
  {
    key: "media",
    label: "Media",
    count: projects.filter((p) => p.category === "media").length,
  },
  {
    key: "optimization",
    label: "Optimization",
    count: projects.filter((p) => p.category === "optimization").length,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const title = "Project";
  const breadcrumb = "Project";

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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

      <section className="case-studies-section">
        <div className="case-studies-container">
          <div className="case-studies-header">
            <span className="case-studies-tag">
              <span className="tag-line" /> RECENT PROJECTS{" "}
              <span className="tag-line" />
            </span>

            <h2>Our Latest Case Studies</h2>

            <p className="case-studies-subtext">
              If we had a 'secret sauce' it would be our awesome people. We have
              only professional team!
            </p>
          </div>

          <div className="case-studies-filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${
                  activeFilter === f.key ? "active" : ""
                }`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label} <sup>{f.count}</sup>
              </button>
            ))}
          </div>

          <div className="case-studies-grid">
            {filteredProjects.map((p) => (
              <div className="case-study-card" key={p.id}>
                <div className="case-study-image">
                  <img src={p.image} alt={p.title} />
                </div>

                <div className="case-study-info">
                  <h3>{p.title}</h3>
                  <Link to={`/projects/${p.id}`} className="view-more-link">
                    View More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
