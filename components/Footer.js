"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <h3>MEDIWILL LIFE SCIENCES</h3>

            

            <p className="footer-description">
              Pharmaceutical solutions focused on quality, innovation and
              better healthcare outcomes.
            </p>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4>Explore</h4>

            <Link href="/products">
              Products
            </Link>

            <Link href="/insights">
              Insights
            </Link>

            <Link href="/faqs">
              FAQs
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <a
              href="/Mediwill-Life-Sciences-Final-Product-Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="catalogue-link"
            >
              Download Product Catalogue ↓
            </a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>

            <a href="mailto:info@mediwill.in">
              info@mediwill.in
            </a>

            <a href="mailto:exports@mediwill.in">
              exports@mediwill.in
            </a>

            <a href="tel:08041751655">
              080 4175 1655
            </a>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h4>Connect</h4>

            <a
              href="https://www.instagram.com/mediwilllife/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/mediwill-life-science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Mediwill Life Sciences
          </span>

          <span>
            ISO 9001:2015 Certified Company
          </span>

          <span className="footer-motto">
            Will. For Life.
          </span>

          <span className="footer-developer">
            Designed &amp; Developed by Varsh Gandhi
          </span>

        </div>

      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          background: #050505;
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 70px 7% 28px;
        }

        /* =========================
           MAIN GRID
        ========================== */

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 65px;
          padding-bottom: 60px;
        }

        /* =========================
           BRAND
        ========================== */

        .footer-brand h3 {
          margin: 0 0 14px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.18em;
        }

        .footer-motto {
          color: #4a4a4a;
        }

        .footer-description {
          max-width: 420px;
          margin-top: 18px;
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           FOOTER COLUMNS
        ========================== */

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-column h4 {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888;
        }

        .footer-column a {
          color: #b5b5b5;
          text-decoration: none;
          font-size: 14px;
          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .footer-column a:hover {
          color: #ffffff;
        }

        /* =========================
           PRODUCT CATALOGUE
        ========================== */

        .catalogue-link {
          margin-top: 8px;
          color: #ffffff !important;
          font-size: 13px !important;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .catalogue-link:hover {
          color: #ffffff !important;
          opacity: 0.7;
          transform: translateX(3px);
        }

        /* =========================
           BOTTOM BAR
        ========================== */

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #555;
          font-size: 11px;
          letter-spacing: 0.03em;
        }

        .footer-bottom .footer-motto {
          color: #555;
        }

        .footer-developer {
          color: #555;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .footer-developer:hover {
          color: #888;
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 1000px) {
          .footer-main {
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 45px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 700px) {
          .footer-inner {
            padding: 55px 7% 24px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px 30px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .footer-motto {
            display: none;
          }

          .footer-developer {
            white-space: normal;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================== */

        @media (max-width: 480px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-bottom {
            font-size: 10px;
          }
        }
      `}</style>
    </footer>
  );
}