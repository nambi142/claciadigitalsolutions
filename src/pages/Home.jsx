import { useState, useEffect, useRef } from "react";
import "../css/Home.css";
import { useTheme } from "../context/Themecontext";
import { Link } from "react-router-dom";
import supportImage from "../assets/supportimg.png";
import heroImage from "../assets/background.jpeg";
import whyChooseImage from "../assets/brandlogo.png";
import metaAds from "../assets/services/metaads.jpeg";
import googleAds from "../assets/services/googleads.jpeg";
import uiux from "../assets/background.jpeg";
import socialMedia from "../assets/services/socialmedia.jpeg";
import businessCard from "../assets/services/bussinesscard.jpeg";
import seo from "../assets/services/seoanalysis.jpeg";
import webDevelopment from "../assets/services/webdevlopement.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaGlobe,
  FaSearch,
  FaHeart,
  FaCommentDots,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
const features = [
  { id: 1, label: "Result-Driven SEO Strategies" },
  { id: 2, label: "High-Converting Ad Campaigns" },
  { id: 3, label: "Creative Brand Identity" },
  { id: 4, label: "Transparent Performance Reports" },
];

const seoBenefits = [
  {
    title: "Meta Ads",
    image: metaAds,
    description:
      "Reach the right audience on Facebook and Instagram with high-converting Meta advertising campaigns that generate quality leads.",
  },
  {
    title: "Google Ads",
    image: googleAds,
    description:
      "Drive instant website traffic and increase conversions with professionally optimized Google Ads campaigns.",
  },
  {
    title: "Social Media Page Handling",
    image: socialMedia,
    description:
      "Build your online presence through engaging content, audience interaction and strategic social media management.",
  },
  {
    title: "Business Branding",
    image: businessCard,
    description:
      "Professional branding materials and business card designs that leave a lasting impression.",
  },
  {
    title: "SEO Optimization",
    image: seo,
    description:
      "Increase your Google rankings through technical SEO, keyword research and on-page optimization.",
  },
  {
    title: "Web Development",
    image: webDevelopment,
    description:
      "Develop fast, secure and responsive websites tailored to grow your business online.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this team completely transformed our online visibility. Our organic traffic doubled within four months and leads keep coming in consistently.",
    name: "Jonathan Simpson",
    role: "Founder, Envato Market",
    initials: "JS",
    color: "#a020f0",
  },
  {
    id: 2,
    quote:
      "The SEO strategy they built for us was clear, data-driven, and actually delivered results. Our page one rankings jumped in weeks, not months.",
    name: "Amelia Carter",
    role: "Marketing Head, Bloomtech",
    initials: "AC",
    color: "#7c3aed",
  },
  {
    id: 3,
    quote:
      "Professional, responsive, and genuinely invested in our growth. They treat our business like their own — that's rare to find in an agency.",
    name: "Michael Reyes",
    role: "CEO, Northline Studio",
    initials: "MR",
    color: "#c026d3",
  },
  {
    id: 4,
    quote:
      "From the very first call, they understood exactly what we needed. Six months in, our conversion rate is up 3x and still climbing.",
    name: "Sophia Bennett",
    role: "E-commerce Manager, Luxora",
    initials: "SB",
    color: "#9333ea",
  },
  {
    id: 5,
    quote:
      "Best decision we made this year. The reporting is transparent, the communication is excellent, and the results speak for themselves.",
    name: "David Okafor",
    role: "Co-founder, Pixel Forge",
    initials: "DO",
    color: "#8b5cf6",
  },
];

const Home = () => {
  const { darkMode } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    const total = testimonials.length;
    setActiveSlide((index + total) % total);
  };

  // Watch screen width to switch between 1 and 2 cards per view
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth <= 900 ? 1 : 2);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Auto slide, one testimonial at a time, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) =>
        prev >= testimonials.length - itemsPerView ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, itemsPerView, testimonials.length]);

  const maxSlide = testimonials.length - itemsPerView;

  return (
    <section className={darkMode ? "home dark" : "home"}>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-container">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>
                  Grow Your Business With
                  <span> Premium Digital Marketing</span>
                </h1>

                <p>
                  We help brands grow through creative design, powerful
                  marketing strategies and modern web development that delivers
                  measurable results.
                </p>

                <div className="hero-buttons">
                  <Link to="/contact" className="primary-btn">
                    Get Started
                  </Link>

                  <Link to="/service" className="secondary-btn">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US (directly below the hero) ---------- */}
      <section className="why-choose-us">
        <div className="wcu-container">
          {/* LEFT SIDE - IMAGE WITH FLOATING ANIMATED CARDS */}
          <div className="wcu-image-wrap">
            <div className="wcu-blob" />

            <div className="wcu-image-frame">
              <img
                src={whyChooseImage}
                alt="Why choose Clacia Digital Solutions"
              />

              <div className="wcu-float wcu-float-chart">
                <span className="wcu-float-title">Business Revenue</span>

                <div className="wcu-bars">
                  <span style={{ height: "40%" }} />
                  <span style={{ height: "70%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "85%" }} />
                  <span style={{ height: "60%" }} />
                  <span style={{ height: "95%" }} />
                </div>
              </div>

              <div className="wcu-float wcu-float-growth">
                <span className="wcu-growth-icon">📈</span>

                <div>
                  <span className="wcu-growth-value">$23,738</span>
                  <span className="wcu-growth-label">+55.14%</span>
                </div>
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-facebook">
                <FaFacebookF />
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-instagram">
                <FaInstagram />
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-email">
                <FaEnvelope />
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-website">
                <FaGlobe />
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-seo">
                <FaSearch />
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-heart">
                <FaHeart />
              </div>

              <div className="wcu-float wcu-float-badge wcu-badge-message">
                <FaCommentDots />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="wcu-content">
            <span className="wcu-tag">⚡ WHY CHOOSE US</span>

            <h2 className="wcu-heading">
              Grow Your Business With A<span> Trusted Digital Partner</span>
            </h2>

            <p className="wcu-description">
              We combine SEO, performance marketing, branding, and web
              development into one result-oriented strategy — built to increase
              your visibility, engagement, and revenue.
            </p>

            <div className="wcu-features">
              {features.map((f) => (
                <div className="wcu-feature" key={f.id}>
                  <span className="wcu-check">✓</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <Link to="/service" className="wcu-cta">
              Explore Our Services
              <span className="wcu-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benifits of SEO */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-heading">
            <span className="benefits-tag">OUR SERVICES</span>

            <h2>Benefits of SEO & Digital Marketing</h2>

            <p>
              We provide result-driven digital marketing solutions that help
              businesses improve visibility, generate leads and build long-term
              online success.
            </p>
          </div>

          <div className="benefits-cards">
            {seoBenefits.map((service, index) => (
              <div className="benefit-card" key={index}>
                <img src={service.image} alt={service.title} />

                <div className="benefit-overlay">
                  <div className="benefit-content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className="benefit-vertical">{service.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DEDICATED SUPPORT ---------- */}
      <section className="support-section">
        <div className="support-container">
          <div className="support-content">
            <span className="support-tag">SUPPORT</span>

            <h2 className="support-heading">Dedicated Support</h2>

            <p className="support-text">
              The best support services with any problem in our product, quickly
              and friendly. If you don't get your solution in our document or
              video tutorial please feel free to contact us at any time via
              email or forum support!
            </p>

            <Link to="/contact" className="support-btn">
              Get Support
            </Link>
          </div>

          <div className="support-image-wrap">
            <div className="support-blob support-blob-1" />
            <div className="support-blob support-blob-2" />

            <img
              src={supportImage}
              alt="Dedicated customer support team"
              className="support-image"
            />
          </div>
        </div>
      </section>

      {/* ---------- WHAT CLIENTS SAY ---------- */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <span className="testimonials-tag">
              <FaArrowRight /> CLIENT TESTIMONIAL
            </span>
            <h2>Empowering your online presence</h2>
          </div>

          <div
            className="testimonials-track"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="testimonials-track-inner"
              style={{
                transform: `translateX(-${activeSlide * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  className="testimonial-slide"
                  key={t.id}
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="testimonial-card">
                    <div className="testimonial-top">
                      <div className="testimonial-identity">
                        <span className="testimonial-name">{t.name}</span>
                        <span className="testimonial-role">{t.role}</span>
                      </div>
                      <span className="testimonial-quote-icon">”</span>
                    </div>

                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="testimonial-text">{t.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-dots">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                className={`t-dot ${activeSlide === i ? "active" : ""}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
