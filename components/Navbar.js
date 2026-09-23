"use client";

import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  // --------------------------------------------------
  // Detect mobile
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------------------------
  // Desktop proximity detection
  // --------------------------------------------------

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (!navRef.current) return;

      const rect = navRef.current.getBoundingClientRect();

      const buffer = 80;

      const isNear =
        e.clientX > rect.left - buffer &&
        e.clientX < rect.right + buffer &&
        e.clientY > rect.top - buffer &&
        e.clientY < rect.bottom + buffer;

      setExpanded(isNear);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [isMobile]);

  // --------------------------------------------------
  // Close mobile navigation when switching desktop
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
  // Logo behavior
  // --------------------------------------------------

  const handleLogoClick = (e) => {
    const currentPath = window.location.pathname;

    const isHomePage =
      currentPath === "/" ||
      currentPath === "";

    // Mobile homepage:
    // logo toggles navigation
    if (isMobile && isHomePage) {
      e.preventDefault();

      setExpanded((prev) => !prev);

      return;
    }

    // Desktop or another page:
    // normal href="/" behavior
  };

  // --------------------------------------------------
  // Mobile navigation link
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
                TOP / MAIN NAVIGATION
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

        /* ==========================================
           NAV
        ========================================== */

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

        /* ==========================================
           NAV INNER — DESKTOP
        ========================================== */

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
           LOGO
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
           LINKS
        ========================================== */

        .links {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 24px;

          white-space: nowrap;
        }

        .links a {
          color: rgba(255, 255, 255, 0.82);

          text-decoration: none;

          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;

          transition:
            color 0.25s ease,
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .links a:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* ==========================================
           ACTIVE INDICATOR
        ========================================== */

        .indicator {
          position: absolute;

          top: calc(100% + 8px);

          left: 50%;

          transform: translateX(-50%);

          padding: 4px 10px;

          border-radius: 999px;

          color: rgba(255, 255, 255, 0.72);

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 0.16em;

          white-space: nowrap;

          pointer-events: none;
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

          .nav {
            top: 12px;
            padding: 0 12px;

            box-sizing: border-box;
          }

          /* ----------------------------------------
             COLLAPSED MOBILE
          ---------------------------------------- */

          .nav-inner {
            width: auto;
            max-width: calc(100vw - 24px);

            box-sizing: border-box;

            padding: 10px 14px;

            gap: 0;

            border-radius: 22px;

            transition:
              width 0.3s ease,
              padding 0.3s ease,
              gap 0.3s ease,
              box-shadow 0.5s ease;
          }

          /* ----------------------------------------
             EXPANDED MOBILE
          ---------------------------------------- */

          .nav-inner.expanded {
            width: min(340px, calc(100vw - 24px));

            padding: 10px 12px 12px;

            gap: 9px;

            border-radius: 22px;

            flex-direction: column;

            align-items: stretch;
          }

          /* ----------------------------------------
             MOBILE LOGO
          ---------------------------------------- */

          .logo-link {
            width: 100%;

            height: 34px;

            display: flex;

            align-items: center;
            justify-content: center;

            cursor: pointer;
          }

          .logo {
            height: 30px;

            max-width: 145px;

            object-fit: contain;
          }

          /* ----------------------------------------
             MOBILE LINKS
          ---------------------------------------- */

          .links {
            width: 100%;

            display: grid;

            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            align-items: center;

            justify-items: center;

            column-gap: 4px;
            row-gap: 7px;

            white-space: normal;
          }

          .links a {
            width: 100%;

            text-align: center;

            font-size: 11px;

            line-height: 1.2;

            padding: 3px 2px;

            color: rgba(255, 255, 255, 0.82);
          }

          .links a:hover {
            transform: none;
          }

          /* ----------------------------------------
             MOBILE ACTIVE INDICATOR
          ---------------------------------------- */

          .indicator {
            top: calc(100% + 6px);

            font-size: 7px;

            padding: 3px 8px;

            letter-spacing: 0.13em;
          }
        }

        /* ==========================================
           VERY SMALL PHONES
        ========================================== */

        @media (max-width: 380px) {

          .nav {
            padding: 0 8px;
          }

          .nav-inner {
            max-width: calc(100vw - 16px);
          }

          .nav-inner.expanded {
            width: calc(100vw - 16px);

            padding-left: 9px;
            padding-right: 9px;
          }

          .links a {
            font-size: 10px;
          }

          .logo {
            height: 28px;
          }
        }

      `}</style>
    </div>
  );
}