import React from "react";
import "../css/Projects.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// Sample project data — replace with your real projects
const projects = [
  {
    id: 1,
    title: "Digital Marketing Campaign",
    category: "marketing",
    categoryLabel: "Marketing",
    image: "src/assets/services/bussinesscard.jpeg",
  },
  {
    id: 2,
    title: "SEO Growth Strategy",
    category: "optimization",
    categoryLabel: "Optimization",
    image: "src/assets/services/googleads.jpeg",
  },
  {
    id: 3,
    title: "App Connectivity Platform",
    category: "development",
    categoryLabel: "Development",
    image: "src/assets/services/metaads.jpeg",
  },
  {
    id: 4,
    title: "Social Media Strategy",
    category: "media",
    categoryLabel: "Media",
    image: "src/assets/services/webdevlopement.jpeg",
  },
  // ...add the rest of your 12 projects here
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="page-wrap">
      {/* ---------- PAGE HEADER ---------- */}
      <section className="page-header">
        {/* faint doodle icon pattern background */}
        <svg className="page-header-pattern" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="doodle-pattern-projects"
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
            fill="url(#doodle-pattern-projects)"
          />
        </svg>

        <div className="page-header-inner">
          <h1 className="page-header-title">Projects</h1>

          <nav className="page-header-breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="page-header-sep">&rarr;</span>
            <span className="page-header-current">Projects</span>
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
                  <a href={`/projects/${p.id}`} className="view-more-link">
                    View More <FaArrowRight />
                  </a>
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
