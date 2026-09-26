"use client";

import { motion } from "framer-motion";

const portfolio = [
  "TELWILL",
  "ROSUWILL",
  "ATOWILL",
  "GLIWILL",
  "DAPAWILL",
  "THYROWILL",
];

const focusAreas = [
  {
    title: "Cardiovascular Care",
    text: "Focused pharmaceutical solutions across cardiovascular care.",
  },
  {
    title: "Diabetes Care",
    text: "Therapeutic solutions supporting metabolic and diabetes care.",
  },
  {
    title: "Thyroid Care",
    text: "Dedicated products supporting thyroid-related long-term care.",
  },
  {
    title: "Supportive Care",
    text: "Complementary solutions across related areas of long-term health.",
  },
];

export default function CardiacPage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="cardiac-page-hero"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "120px 8% 80px",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {/* RED AMBIENT GLOW */}
        <div
          style={{
            position: "absolute",
            right: "-8%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(255,25,25,0.20) 0%, transparent 70%)",
            filter: "blur(110px)",
            pointerEvents: "none",
          }}
        />

        {/* CARDIAC ARTWORK */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="cardiac-page-artwork"
          style={{
            position: "absolute",
            width: "68%",
            height: "100%",
            right: "-2%",
            top: "0",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/cardiac-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, black 38%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, black 38%, black 100%)",
            }}
          />
        </motion.div>

        {/* HERO CONTENT */}
        <div
          className="cardiac-page-hero-content"
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "700px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              color: "#E5485D",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "4px",
              marginBottom: "26px",
            }}
          >
            CARDIAC & DIABETES DIVISION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            style={{
              margin: 0,
              color: "#f8fafc",
              fontSize: "clamp(52px, 6.5vw, 92px)",
              fontWeight: "500",
              lineHeight: "0.98",
              letterSpacing: "-4px",
              maxWidth: "760px",
            }}
          >
            Focused care for
            <br />
            long-term health.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              margin: "28px 0 36px",
              maxWidth: "610px",
              color: "#9299a6",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Pharmaceutical solutions across cardiovascular, metabolic and
            related areas of long-term care.
          </motion.p>

          {/* SINGLE PRIMARY CTA */}
          <motion.a
            href="/products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            whileHover={{
              boxShadow: "0 0 40px rgba(255,40,40,0.45)",
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 30px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,40,40,0.15)",
              color: "#fff",
              textDecoration: "none",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Explore Cardiac & Diabetes Products →
          </motion.a>
        </div>
      </section>

      {/* =========================================================
          THE DIVISION
      ========================================================= */}

      <section
        style={{
          padding: "150px 8%",
          background: "#000",
          position: "relative",
        }}
      >
        <div
          className="division-inner"
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#E5485D",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "4px",
              marginBottom: "28px",
            }}
          >
            THE DIVISION
          </div>

          <div
            className="division-heading-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "90px",
              alignItems: "start",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#f8fafc",
                fontSize: "clamp(48px, 5.5vw, 76px)",
                fontWeight: "500",
                lineHeight: "1",
                letterSpacing: "-3px",
              }}
            >
              Built around
              <br />
              focused care.
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: "520px",
                color: "#7f8794",
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              The Cardiac & Diabetes Division brings together focused
              pharmaceutical solutions across cardiovascular, metabolic,
              thyroid and related areas of long-term care.
            </p>
          </div>

          {/* FOCUS AREAS */}
          <div
            className="focus-grid"
            style={{
              marginTop: "100px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                style={{
                  padding: "38px 30px 42px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  borderRight:
                    index % 2 === 0
                      ? "1px solid rgba(255,255,255,0.10)"
                      : "none",
                }}
              >
                <div
                  style={{
                    color: "#E5485D",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    marginBottom: "18px",
                  }}
                >
                  {item.title}
                </div>

                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#f8fafc",
                    fontSize: "24px",
                    fontWeight: "500",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    maxWidth: "430px",
                    color: "#747c89",
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO
      ========================================================= */}

      <section
        style={{
          padding: "150px 8%",
          background: "#000",
          position: "relative",
        }}
      >
        <div
          className="portfolio-inner"
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#E5485D",
              fontSize: "12px",
              letterSpacing: "4px",
              fontWeight: "600",
              marginBottom: "28px",
            }}
          >
            THE PORTFOLIO
          </div>

          <div
            className="portfolio-heading-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "end",
              marginBottom: "90px",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#f8fafc",
                fontSize: "clamp(48px, 6vw, 82px)",
                fontWeight: "500",
                lineHeight: "0.98",
                letterSpacing: "-3px",
              }}
            >
              A focused
              <br />
              portfolio.
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: "520px",
                color: "#7f8794",
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              Explore selected product families from the Cardiac & Diabetes
              division. Select a family to view its complete range of
              variants, strengths, compositions and dosage forms.
            </p>
          </div>

          {/* PRODUCT FAMILY LIST */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {portfolio.map((product) => (
              <motion.a
                key={product}
                href={`/products?family=${encodeURIComponent(product)}`}
                whileHover={{
                  x: 12,
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "27px 8px",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  color: "#f8fafc",
                  textDecoration: "none",
                  fontSize: "21px",
                  fontWeight: "500",
                  letterSpacing: "-0.3px",
                }}
              >
                <span>{product}</span>

                <span
                  style={{
                    color: "#E5485D",
                    fontSize: "21px",
                    opacity: 0.75,
                  }}
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUALITY
      ========================================================= */}

      <section
        style={{
          padding: "150px 8%",
          background: "#050505",
          position: "relative",
        }}
      >
        <div
          className="quality-inner"
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#E5485D",
              fontSize: "12px",
              letterSpacing: "4px",
              fontWeight: "600",
              marginBottom: "28px",
            }}
          >
            QUALITY
          </div>

          <div
            className="quality-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#f8fafc",
                fontSize: "clamp(48px, 5.5vw, 76px)",
                fontWeight: "500",
                lineHeight: "1",
                letterSpacing: "-3px",
              }}
            >
              Quality behind
              <br />
              every solution.
            </h2>

            <div>
              <p
                style={{
                  margin: "0 0 25px",
                  color: "#858d99",
                  fontSize: "17px",
                  lineHeight: "1.8",
                }}
              >
                Our approach is built around consistency, quality management
                and responsible pharmaceutical manufacturing.
              </p>

              <div
                style={{
                  display: "inline-flex",
                  padding: "12px 18px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "999px",
                  color: "#d8dde5",
                  fontSize: "13px",
                  letterSpacing: "0.4px",
                }}
              >
                ISO 9001:2015 Certified Company
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE
      ========================================================= */}

      <style jsx>{`
        @media (max-width: 900px) {
          .cardiac-page-hero {
            min-height: 100svh !important;
            padding: 125px 24px 70px !important;
            align-items: flex-start !important;
          }

          .cardiac-page-hero-content {
            margin-top: 45px;
            max-width: 620px !important;
          }

          .cardiac-page-hero h1 {
            font-size: clamp(42px, 10vw, 62px) !important;
            letter-spacing: -2.5px !important;
          }

          .cardiac-page-artwork {
            width: 105% !important;
            height: 62% !important;
            right: -25% !important;
            top: auto !important;
            bottom: -5% !important;
            opacity: 0.48;
          }

          .division-heading-grid,
          .portfolio-heading-grid,
          .quality-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .focus-grid {
            grid-template-columns: 1fr !important;
          }

          .focus-grid > div {
            border-right: none !important;
          }
        }

        @media (max-width: 600px) {
          .cardiac-page-hero {
            padding: 110px 24px 55px !important;
          }

          .cardiac-page-hero-content {
            margin-top: 30px;
          }

          .cardiac-page-hero h1 {
            font-size: clamp(38px, 10.5vw, 52px) !important;
            line-height: 1.02 !important;
          }

          .cardiac-page-hero p {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }

          .cardiac-page-artwork {
            width: 115% !important;
            height: 53% !important;
            right: -31% !important;
            bottom: -3% !important;
            opacity: 0.38;
          }

          .cardiac-page-hero a {
            font-size: 13px !important;
            padding: 12px 20px !important;
          }

          .focus-grid {
            margin-top: 65px !important;
          }

          .focus-grid > div {
            padding: 30px 0 !important;
          }

          .portfolio-heading-grid {
            margin-bottom: 60px !important;
          }

          .portfolio-heading-grid h2,
          .division-heading-grid h2,
          .quality-grid h2 {
            font-size: 48px !important;
            letter-spacing: -2px !important;
          }

          .portfolio-inner a {
            padding: 23px 5px !important;
            font-size: 18px !important;
          }
        }

        @media (max-width: 380px) {
          .cardiac-page-hero {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .cardiac-page-hero h1 {
            font-size: 36px !important;
          }

          .cardiac-page-hero a {
            font-size: 12px !important;
            padding: 11px 16px !important;
          }

          .cardiac-page-artwork {
            width: 120% !important;
            right: -35% !important;
            opacity: 0.32;
          }
        }
      `}</style>
    </main>
  );
}