"use client";

import { motion } from "framer-motion";

const products = [
  "CX 200",
  "CX 200 CV",
  "CX 200 AZ",
  "CX 200 O",
  "CDM 200",
  "CDM 200 CV",
  "CEFUWILL 500",
  "LIZOWILL 600",
  "MOXIWILL LCV 625",
  "MEROWILL 500",
  "MEROWILL 1GM",
  "MIKAWILL 500",
  "SANZONE",
  "SANZONE S",
  "SANZONE TZ",
];

const focusAreas = [
  {
    title: "Antibiotic Care",
    text: "A focused portfolio of antibiotic medicines across commonly used pharmaceutical categories.",
  },
  {
    title: "Anti-Infective Solutions",
    text: "Selected formulations designed to support the needs of anti-infective therapy.",
  },
  {
    title: "Hospital & Clinical Use",
    text: "A portfolio spanning oral and injectable formulations across relevant product families.",
  },
  {
    title: "Portfolio Development",
    text: "Continued development of pharmaceutical solutions across important anti-infective categories.",
  },
];

export default function AntiInfectivePage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ==========================================
          HERO
      ========================================== */}

      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          overflow: "hidden",
        }}
      >
        {/* Ambient green glow */}

        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "620px",
            height: "620px",
            background:
              "radial-gradient(circle, rgba(73,185,110,0.18), transparent 70%)",
            filter: "blur(130px)",
            pointerEvents: "none",
          }}
        />

        {/* Shield artwork */}

        <img
          src="/shield.png"
          alt="Anti-infective pharmaceutical research"
          style={{
            position: "absolute",
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "58%",
            maxWidth: "850px",
            maxHeight: "85vh",
            objectFit: "contain",
            mixBlendMode: "screen",
            filter: "brightness(1.08) contrast(1.15)",
            WebkitMaskImage:
              "linear-gradient(to left, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(to left, black 60%, transparent 100%)",
          }}
        />

        {/* Left fade */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #000 30%, rgba(0,0,0,0.88) 52%, transparent 78%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero content */}

        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "620px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              color: "#49B96E",
              fontSize: "13px",
              letterSpacing: "0.2em",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ANTI-INFECTIVE DIVISION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(48px, 6vw, 78px)",
              lineHeight: "0.98",
              fontWeight: "600",
              letterSpacing: "-0.04em",
              margin: 0,
              background:
                "linear-gradient(to bottom, #ffffff, #86efac)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Advancing
            <br />
            Anti-Infective
            <br />
            Care.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              marginTop: "28px",
              color: "#9ca3af",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "520px",
            }}
          >
            Pharmaceutical solutions across antibiotic and anti-infective
            categories, with a focused portfolio for diverse healthcare
            needs.
          </motion.p>

          <motion.a
            href="/products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 45px rgba(73,185,110,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-block",
              marginTop: "34px",
              padding: "14px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(73,185,110,0.35)",
              background: "rgba(73,185,110,0.12)",
              color: "#fff",
              textDecoration: "none",
              backdropFilter: "blur(20px)",
            }}
          >
            Explore Anti-Infective Products →
          </motion.a>
        </div>
      </section>

      {/* ==========================================
          THE DIVISION
      ========================================== */}

      <section
        style={{
          padding: "140px 8%",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#49B96E",
              fontSize: "12px",
              letterSpacing: "0.2em",
              fontWeight: "600",
            }}
          >
            THE DIVISION
          </p>

          <h2
            style={{
              marginTop: "18px",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: "500",
              letterSpacing: "-0.03em",
            }}
          >
            Focused on infection care.
          </h2>

          <p
            style={{
              marginTop: "24px",
              color: "#8f949c",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Mediwill's Anti-Infective Division brings together a focused range
            of pharmaceutical products spanning antibiotic and anti-infective
            categories, with formulations developed for different healthcare
            settings.
          </p>
        </div>
      </section>

      {/* ==========================================
          FOCUS AREAS
      ========================================== */}

      <section
        style={{
          padding: "40px 8% 140px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                borderColor: "rgba(73,185,110,0.35)",
              }}
              style={{
                padding: "30px",
                minHeight: "190px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.025)",
                transition: "border-color 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#49B96E",
                  boxShadow: "0 0 18px rgba(73,185,110,0.8)",
                  marginBottom: "24px",
                }}
              />

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "12px",
                }}
              >
                {area.title}
              </h3>

              <p
                style={{
                  color: "#858b94",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                {area.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          PORTFOLIO
      ========================================== */}

      <section
        style={{
          padding: "80px 8% 140px",
          background:
            "linear-gradient(to bottom, #000, rgba(73,185,110,0.025), #000)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "50px" }}>
            <p
              style={{
                color: "#49B96E",
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontWeight: "600",
              }}
            >
              REPRESENTATIVE PORTFOLIO
            </p>

            <h2
              style={{
                marginTop: "16px",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: "500",
                letterSpacing: "-0.03em",
              }}
            >
              Anti-Infective Range
            </h2>

            <p
              style={{
                marginTop: "18px",
                color: "#858b94",
                fontSize: "16px",
                lineHeight: "1.7",
                maxWidth: "680px",
              }}
            >
              Explore the Mediwill product catalogue for individual strengths,
              compositions and dosage forms.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {products.map((product, index) => (
              <motion.a
                key={product}
                href={`/products?family=${encodeURIComponent(product)}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: Math.min(index * 0.025, 0.3),
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(73,185,110,0.4)",
                  background: "rgba(73,185,110,0.07)",
                }}
                style={{
                  padding: "18px 20px",
                  borderRadius: "14px",
                  border:
                    "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.025)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  transition: "all 0.25s ease",
                }}
              >
                {product}

                <span
                  style={{
                    float: "right",
                    color: "#49B96E",
                  }}
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          QUALITY
      ========================================== */}

      <section
        style={{
          padding: "120px 8% 160px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#49B96E",
            fontSize: "12px",
            letterSpacing: "0.2em",
            fontWeight: "600",
          }}
        >
          QUALITY & COMMITMENT
        </p>

        <h2
          style={{
            marginTop: "18px",
            fontSize: "clamp(32px, 4vw, 50px)",
            fontWeight: "500",
          }}
        >
          Quality built into every division.
        </h2>

        <p
          style={{
            marginTop: "22px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#858b94",
            fontSize: "17px",
            lineHeight: "1.8",
          }}
        >
          Mediwill Life Sciences operates with a quality management system
          certified to ISO 9001:2015, supporting a structured approach to
          pharmaceutical quality and operations.
        </p>

        <div
          style={{
            display: "inline-block",
            marginTop: "36px",
            padding: "12px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(73,185,110,0.25)",
            background: "rgba(73,185,110,0.06)",
            color: "#49B96E",
            fontSize: "13px",
            letterSpacing: "0.08em",
          }}
        >
          ISO 9001:2015 CERTIFIED COMPANY
        </div>
      </section>
    </main>
  );
}