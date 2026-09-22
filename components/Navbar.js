"use client";

import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef(null);

  // --------------------------------------------------
  // Detect mobile screen
  // --------------------------------------------------

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // --------------------------------------------------
  // Scroll detection + active therapeutic section
  // --------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;

      setScrolled(isScrolled);

      const sections = [
        "cardiac",
        "ortho",
        "infective",
        "gyneco",
      ];

      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          const top = el.offsetTop - 200;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // --------------------------------------------------
  // Desktop proximity detection
  // --------------------------------------------------

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (!navRef.current) return;

      const rect =
        navRef.current.getBoundingClientRect();

      const buffer = 80;

      const isNear =
        e.clientX > rect.left - buffer &&
        e.clientX < rect.right + buffer &&
        e.clientY > rect.top - buffer &&
        e.clientY < rect.bottom + buffer;

      setExpanded(isNear);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [isMobile]);

  // --------------------------------------------------
  // Close mobile navigation when switching to desktop
  // --------------------------------------------------

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
    }
  }, [isMobile]);

  // --------------------------------------------------
  // Therapeutic glow
  // --------------------------------------------------

  const getGlow = () => {
    switch (active) {
      case "cardiac":
        return "rgba(255, 60, 60, 0.25)";

      case "ortho":
        return "rgba(80, 150, 255, 0.25)";

      case "infective":
        return "rgba(0, 255, 150, 0.25)";

      case "gyneco":
        return "rgba(255, 100, 200, 0.25)";

      default:
        return "rgba(255,255,255,0.06)";
    }
  };

  // --------------------------------------------------
  // Logo click
  //
  // Desktop:
  //   Logo always goes home.
  //
  // Mobile:
  //   Tap logo while already on homepage = expand/collapse.
  //   Tap logo from another page = go home.
  // --------------------------------------------------

  const handleLogoClick = (e) => {
    const currentPath =
      window.location.pathname;

    const isHomePage =
      currentPath === "/" ||
      currentPath === "";

    if (isMobile && isHomePage) {
      e.preventDefault();

      setExpanded((prev) => !prev);

      return;
    }

    // Otherwise allow the <a href="/"> to navigate home.
  };

  // --------------------------------------------------
  // Close mobile navigation after navigation
  // --------------------------------------------------

  const handleMobileLinkClick = () => {
    if (isMobile) {
      setExpanded(false);
    }
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (
    <div
      className={`nav ${
        scrolled ? "scrolled" : ""
      }`}
      ref={navRef}
    >
      <div
        className={`nav-inner ${
          expanded ? "expanded" : ""
        }`}
        style={{
          boxShadow: `0 0 40px ${getGlow()}`,
        }}
      >
        {/* ==========================================
            LOGO
        ========================================== */}

        <a
          href="/"
          className="logo-link"
          aria-label="Mediwill Life Sciences — Home"
          onClick={handleLogoClick}
        >
          <img
            src="/logo.png"
            className="logo"
            alt="Mediwill"
          />
        </a>

        {/* ==========================================
            NAVIGATION
        ========================================== */}

        {expanded && (
          <div className="links">
            {/* ======================================
                TOP OF HOMEPAGE
            ====================================== */}

            {!scrolled ? (
              <>
                <a
                  href="/#about"
                  onClick={handleMobileLinkClick}
                >
                  About
                </a>

                <a
                  href="/products"
                  onClick={handleMobileLinkClick}
                >
                  Products
                </a>

                <a
                  href="/insights"
                  onClick={handleMobileLinkClick}
                >
                  Insights
                </a>

                <a
                  href="/faqs"
                  onClick={handleMobileLinkClick}
                >
                  FAQs
                </a>

                <a
                  href="/#contact"
                  onClick={handleMobileLinkClick}
                >
                  Contact
                </a>
              </>
            ) : (
              /* ====================================
                 SCROLLED / THERAPEUTIC NAVIGATION
              ==================================== */

              <>
                <a
                  href="/#cardiac"
                  onClick={handleMobileLinkClick}
                >
                  Cardiac
                </a>

                <a
                  href="/#ortho"
                  onClick={handleMobileLinkClick}
                >
                  Orthopedic
                </a>

                <a
                  href="/#infective"
                  onClick={handleMobileLinkClick}
                >
                  Anti-Infective
                </a>

                <a
                  href="/#gyneco"
                  onClick={handleMobileLinkClick}
                >
                  Gynecology
                </a>

                <a
                  href="/#contact"
                  onClick={handleMobileLinkClick}
                >
                  Contact
                </a>
              </>
            )}
          </div>
        )}
      </div>

      {/* ============================================
          ACTIVE DIVISION INDICATOR
      ============================================ */}

      {scrolled && active && (
        <div
          className="indicator"
          style={{
            background: getGlow(),
          }}
        >
          {active.toUpperCase()}
        </div>
      )}

      {/* ============================================
          NAVBAR STYLES
      ============================================ */}

      <style jsx>{`
        .nav {
          position: fixed;
          top: 20px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
          pointer-events: none;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid
            rgba(255, 255, 255, 0.08);
          transition:
            all 0.35s ease,
            box-shadow 0.5s ease;
          pointer-events: auto;
        }

        .nav-inner.expanded {
          padding: 14px 28px;
          gap: 26px;
        }

        /* ==========================================
           LOGO LINK
        ========================================== */

        .logo-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo {
          height: 34px;
          width: auto;
          display: block;
          filter: drop-shadow(
            0 0 12px rgba(255, 100, 100, 0.4)
          );
          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .logo-link:hover .logo {
          transform: scale(1.04);
        }

        /* ==========================================
           DESKTOP
        ========================================== */

        @media (min-width: 769px) {
          .logo-link {
            cursor: pointer;
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 768px) {
          .logo-link {
            cursor: pointer;
          }

          .nav {
            top: 14px;
          }

          .nav-inner {
            max-width: calc(100vw - 32px);
            box-sizing: border-box;
          }

          .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 6px;
          }

          .links a {
            font-size: 13px;
            padding: 6px 8px;
          }

          .nav-inner.expanded {
            padding: 12px 16px;
            gap: 12px;
          }
        }

        /* ==========================================
           LINKS
        ========================================== */

        .links {
          display: flex;
          gap: 16px;
          transition: all 0.3s ease;
        }

        .links a {
          color: #cbd5f5;
          font-size: 14px;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 999px;
          transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .links a:hover {
          color: white;
          background: rgba(
            255,
            255,
            255,
            0.08
          );
          transform: translateY(-1px);
        }

        /* ==========================================
           ACTIVE DIVISION INDICATOR
        ========================================== */

        .indicator {
          position: absolute;
          bottom: -18px;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          color: white;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          letter-spacing: 1px;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}