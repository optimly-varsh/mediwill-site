"use client";

import { motion } from "framer-motion";

export default function CardiacSection() {
  return (
    <section
      id="cardiac"
      className="cardiac-section"
      style={{
        height: "100vh",
        minHeight: "700px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* RED AMBIENT GLOW */}
      <div
        className="cardiac-glow"
        style={{
          position: "absolute",
          right: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(circle, rgba(255, 25, 25, 0.22) 0%, transparent 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* SOFT DARK / RED BLEND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #000 35%, rgba(70, 0, 0, 0.15) 70%, rgba(255, 0, 0, 0.04) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* CARDIAC ARTWORK */}
      <motion.div
        className="cardiac-artwork"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          width: "78%",
          height: "125%",
          right: "-3%",
          top: "10%",
          zIndex: 2,
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
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 18%, black 38%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 18%, black 38%, black 100%)",
          }}
        />
      </motion.div>

      {/* CONTENT */}
      <div
        className="cardiac-content"
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "600px",
        }}
      >
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "64px",
            fontWeight: "600",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            color: "#f8fafc",
            margin: 0,
            marginBottom: "20px",
          }}
        >
          Cardiac & Diabetes
          <br />
          Division
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#94a3b8",
            margin: 0,
            marginBottom: "40px",
          }}
        >
          Precision Cardiac Care.
          <br />
          Better Outcomes.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          href="/cardiac"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: "0 0 40px rgba(255,40,40,0.45)",
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="cardiac-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 30px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,40,40,0.15)",
            color: "#fff",
            textDecoration: "none",
            backdropFilter: "blur(20px)",
            cursor: "pointer",
          }}
        >
          Explore Cardiac & Diabetes Products →
        </motion.a>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cardiac-section {
            height: 100svh !important;
            min-height: 650px !important;
            padding: 115px 24px 70px !important;
            align-items: flex-start !important;
          }

          .cardiac-content {
            max-width: 600px !important;
            width: 100%;
            margin-top: 40px;
          }

          .cardiac-content h1 {
            font-size: clamp(40px, 9vw, 54px) !important;
            line-height: 1.08 !important;
            letter-spacing: -1.5px !important;
          }

          .cardiac-content p {
            font-size: 16px !important;
            line-height: 1.55 !important;
            margin-bottom: 30px !important;
          }

          .cardiac-button {
            font-size: 14px !important;
            padding: 13px 22px !important;
          }

          .cardiac-artwork {
            width: 92% !important;
            height: 58% !important;
            right: -19% !important;
            top: auto !important;
            bottom: -4% !important;
            opacity: 0.48;
          }

          .cardiac-glow {
            width: 420px !important;
            height: 420px !important;
            right: -35% !important;
            top: 70% !important;
            opacity: 0.7;
            filter: blur(90px) !important;
          }
        }

        @media (max-width: 600px) {
          .cardiac-section {
            padding: 108px 24px 55px !important;
          }

          .cardiac-content {
            margin-top: 30px;
          }

          .cardiac-content h1 {
            font-size: clamp(36px, 10.5vw, 48px) !important;
          }

          .cardiac-content p {
            font-size: 15px !important;
            margin-bottom: 26px !important;
          }

          .cardiac-button {
            max-width: 100%;
            font-size: 13px !important;
            padding: 12px 18px !important;
          }

          .cardiac-artwork {
            width: 100% !important;
            height: 53% !important;
            right: -25% !important;
            bottom: -3% !important;
            opacity: 0.4;
          }
        }

        @media (max-width: 380px) {
          .cardiac-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .cardiac-content h1 {
            font-size: 35px !important;
          }

          .cardiac-button {
            font-size: 12px !important;
            padding: 11px 16px !important;
          }

          .cardiac-artwork {
            width: 105% !important;
            right: -31% !important;
            opacity: 0.34;
          }
        }
      `}</style>
    </section>
  );
}