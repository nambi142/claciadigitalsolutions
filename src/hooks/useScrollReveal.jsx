import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollReveal
 * Call ONCE in App.jsx. Watches every element with class="reveal"
 * across the whole app and adds "reveal-visible" once it scrolls
 * into view. Re-scans automatically on every route change, so
 * Home, About, Projects, Service, and Contact all get it for free.
 *
 * Usage in App.jsx:
 *   useScrollReveal();
 *
 * Usage in any page/section:
 *   <section className="hero reveal">...</section>
 */
export default function useScrollReveal(options = {}) {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let observer;

    // small delay lets the new page's DOM finish mounting after route change
    const timeoutId = setTimeout(() => {
      const revealEls = document.querySelectorAll(
        ".reveal:not(.reveal-visible), .reveal-left:not(.reveal-visible), .reveal-right:not(.reveal-visible)"
      );

      if (prefersReducedMotion) {
        revealEls.forEach((el) => el.classList.add("reveal-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: options.threshold ?? 0.15,
          rootMargin: options.rootMargin ?? "0px 0px -80px 0px",
        }
      );

      revealEls.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
    // re-run every time the route changes
  }, [location.pathname, options.threshold, options.rootMargin]);
}