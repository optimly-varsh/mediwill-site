"use client";

import { motion } from "framer-motion";

export default function CardiacSection() {
  return (
    <section
      id="cardiac"
      className="cardiac-section"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#000",
      }}
    >
      {/* HERO */}

      <div
        className="cardiac-hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* BACKGROUND */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            zIndex: 0,
          }}
        />

        {/* CARDIAC HERO ARTWORK */}

        <motion.img
          src="/cardiac-hero.png"
          alt="Cardiac and cardiovascular care"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="cardiac-artwork"
          style={{
            position: "absolute",
            right: "-3%",
            top: "10%",
            transform: "translateY(-35%)",
            width: "78%",
            height: "125%",
            objectFit: "contain",
            objectPosition: "right center",
            zIndex: 3,
            mixBlendMode: "screen",
            filter: "brightness(1.05) contrast(1.08)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* RED AMBIENT GLOW */}

        <div
          className="cardiac-glow"
          style={{
            position: "absolute",
            right: "8%",
            top: "42%",
            transform: "translateY(-50%)",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(255,40,40,0.22), transparent 70%)",
            filter: "blur(120px)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* LEFT FADE */}

        <div
          className="cardiac-fade"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #000 30%, rgba(0,0,0,0.72) 52%, rgba(0,0,0,0.15) 75%, transparent 90%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />

        {/* CONTENT */}

        <div
          className="cardiac-content"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "520px",
          }}
        >
          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cardiac-title"
            style={{
              fontSize: "56px",
              fontWeight: "600",
              letterSpacing: "-1px",
              background:
                "linear-gradient(to bottom, #ffffff, #fca5a5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            Cardiac & Diabetes Division
          </motion.h1>

          {/* TEXT */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="cardiac-description"
            style={{
              marginTop: "20px",
              color: "#9ca3af",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            Precision Cardiac Care.
            <br />
            Better Outcomes.
          </motion.p>

          {/* CTA */}

          <motion.button
            type="button"
            whileHover={{
              boxShadow:
                "0 0 40px rgba(255,40,40,0.5)",
              scale: 1.03,
            }}
            whileTap={{ scale: 0.96 }}
            className="cardiac-button"
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              borderRadius: "999px",
              border:
                "1px solid rgba(255,255,255,0.1)",
              background:
                "rgba(255,40,40,0.15)",
              color: "#fff",
              backdropFilter: "blur(20px)",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Explore Cardiac & Diabetes Products →
          </motion.button>
        </div>
      </div>

      {/* ==========================================
          MOBILE RESPONSIVE
      ========================================== */}

      <style jsx>{`
        /* ========================================
           TABLET
        ======================================== */

        @media (max-width: 900px) and (min-width: 769px) {
          .cardiac-hero {
            padding-left: 7% !important;
            padding-right: 7% !important;
          }

          .cardiac-title {
            font-size: 48px !important;
          }

          .cardiac-artwork {
            width: 70% !important;
            height: 105% !important;
            right: -6% !important;
          }
        }

        /* ========================================
           MOBILE
        ======================================== */

        @media (max-width: 768px) {
          .cardiac-hero {
            min-height: 100svh !important;
            height: auto !important;

            padding:
              112px 24px 70px !important;

            display: flex !important;
            align-items: flex-start !important;
            justify-content: center !important;

            box-sizing: border-box;
          }

          /* --------------------------------------
             ARTWORK
          -------------------------------------- */

          .cardiac-artwork {
            width: 86% !important;
            height: auto !important;

            max-width: 430px !important;

            right: -13% !important;

            top: auto !important;
            bottom: 3% !important;

            transform: none !important;

            opacity: 0.46;

            filter:
              brightness(0.9)
              contrast(1.1) !important;

            z-index: 2 !important;

            -webkit-mask-image:
              linear-gradient(
                to bottom,
                transparent 0%,
                black 15%,
                black 78%,
                transparent 100%
              ) !important;

            mask-image:
              linear-gradient(
                to bottom,
                transparent 0%,
                black 15%,
                black 78%,
                transparent 100%
              ) !important;
          }

          /* --------------------------------------
             RED GLOW
          -------------------------------------- */

          .cardiac-glow {
            width: 300px !important;
            height: 300px !important;

            right: -12% !important;
            top: auto !important;
            bottom: 10% !important;

            transform: none !important;

            filter: blur(85px) !important;

            opacity: 0.65;
          }

          /* --------------------------------------
             FADE
          -------------------------------------- */

          .cardiac-fade {
            background:
              linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.05) 0%,
                rgba(0, 0, 0, 0.38) 45%,
                rgba(0, 0, 0, 0.92) 100%
              ) !important;

            z-index: 3 !important;
          }

          /* --------------------------------------
             CONTENT
          -------------------------------------- */

          .cardiac-content {
            width: 100% !important;
            max-width: 100% !important;

            position: relative !important;
            z-index: 10 !important;
          }

          .cardiac-title {
            font-size:
              clamp(38px, 10.5vw, 52px) !important;

            line-height: 1.02 !important;

            letter-spacing:
              -0.035em !important;

            margin: 0 !important;

            max-width: 100% !important;
          }

          .cardiac-description {
            font-size: 16px !important;

            line-height: 1.55 !important;

            margin-top: 18px !important;

            max-width: 300px !important;
          }

          .cardiac-button {
            margin-top: 24px !important;

            padding:
              13px 21px !important;

            font-size: 13px !important;

            line-height: 1.35 !important;

            max-width: 100% !important;

            white-space: normal !important;
          }
        }

        /* ========================================
           SMALL PHONES
        ======================================== */

        @media (max-width: 420px) {
          .cardiac-hero {
            padding:
              104px 20px 60px !important;
          }

          .cardiac-title {
            font-size:
              clamp(34px, 10vw, 44px) !important;

            line-height: 1.04 !important;
          }

          .cardiac-description {
            font-size: 15px !important;
          }

          .cardiac-button {
            font-size: 12px !important;

            padding:
              12px 17px !important;
          }

          .cardiac-artwork {
            width: 90% !important;

            right: -17% !important;

            bottom: 2% !important;

            opacity: 0.38;
          }
        }
      `}</style>
    </section>
  );
}