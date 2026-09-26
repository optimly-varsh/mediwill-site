"use client";

import { motion } from "framer-motion";

const themes = {
  cardiac: {
    accent: "#ff3c3c",
    gradient: "to right, #ffffff, #fca5a5",
    image: "/heart.jpg",
    glowColor: "rgba(255,60,60,0.25)",
  },

  ortho: {
    accent: "#008cff",
    gradient: "to right, #ffffff, #7dd3fc",
    image: "/knee.png",
    glowColor: "rgba(0,140,255,0.25)",
  },

  infective: {
    accent: "#22c55e",
    gradient: "to right, #ffffff, #86efac",
    image: "/shield.png",
    glowColor: "rgba(34,197,94,0.25)",
  },

  gyneco: {
    accent: "#ff69b4",
    gradient: "to right, #ffffff, #fbcfe8",
    image: "/gyneco.png",
    glowColor: "rgba(255,105,180,0.25)",
  },
};

export default function ProductSection({
  id,
  title,
  subtitle,
  tagline,
  theme,
  imageAlt,
}) {
  const t = themes[theme];

  return (
    <section
      id={id}
      className="product-section"
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* AMBIENT GLOW */}
      <div
        className="section-glow"
        style={{
          position: "absolute",
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background: `radial-gradient(
            circle,
            ${t.glowColor},
            transparent 70%
          )`,
          filter: "blur(120px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* THERAPEUTIC IMAGE */}
      <img
        className="section-image"
        src={t.image}
        alt={imageAlt}
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          height: "85%",
          maxWidth: "75%",
          objectFit: "contain",
          zIndex: 2,
          mixBlendMode: "screen",
          filter: "brightness(1.1) contrast(1.2)",
          WebkitMaskImage:
            "linear-gradient(to left, black 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, black 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* LEFT SIDE FADE */}
      <div
        className="section-fade"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #000 30%, rgba(0,0,0,0.85) 50%, transparent 75%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* CONTENT */}
      <div
        className="section-content"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "520px",
        }}
      >
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "56px",
            fontWeight: "600",
            letterSpacing: "-1px",
            background: `linear-gradient(${t.gradient})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
          }}
        >
          {title}
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            color: "#9ca3af",
            fontSize: "18px",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          {subtitle}
          <br />
          {tagline}
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: `0 0 50px ${t.accent}`,
            scale: 1.02,
            background: `${t.accent}30`,
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            marginTop: "10px",
            padding: "14px 32px",
            borderRadius: "999px",
            border: `1px solid ${t.accent}50`,
            background: `${t.accent}15`,
            color: "#fff",
            backdropFilter: "blur(20px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: "500",
            fontSize: "16px",
            boxShadow: `0 0 25px ${t.accent}30`,
            maxWidth: "100%",
          }}
          onClick={() => {
            if (id === "ortho") {
              window.location.href = "/orthopedic";
            } else if (id === "infective") {
              window.location.href = "/anti-infective";
            } else if (id === "gyneco") {
              window.location.href = "/gynecology";
            } else {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }
          }}
        >
          {id === "ortho"
            ? "Explore Orthopedic Range →"
            : id === "infective"
            ? "Explore Anti-Infective Range →"
            : id === "gyneco"
            ? "Explore Gynecology Range →"
            : `Explore ${title} →`}
        </motion.button>
      </div>

      {/* RESPONSIVE */}
      <style jsx>{`
        /* TABLET */
        @media (max-width: 900px) and (min-width: 769px) {
          .product-section {
            padding-left: 7%;
            padding-right: 7%;
          }

          .section-content {
            max-width: 480px;
          }

          .section-content h2 {
            font-size: 48px !important;
          }

          .section-image {
            height: 75% !important;
            max-width: 65% !important;
            right: -8% !important;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .product-section {
            min-height: 100svh !important;
            height: auto !important;
            padding: 120px 24px 70px !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: center !important;
            box-sizing: border-box;
          }

          .section-image {
            height: auto !important;
            width: 78% !important;
            max-width: 390px !important;
            right: -7% !important;
            top: auto !important;
            bottom: 4% !important;
            transform: none !important;
            opacity: 0.42;
            filter:
              brightness(0.82)
              contrast(1.12) !important;
            z-index: 2 !important;

            -webkit-mask-image:
              linear-gradient(
                to bottom,
                transparent 0%,
                black 18%,
                black 78%,
                transparent 100%
              ) !important;

            mask-image:
              linear-gradient(
                to bottom,
                transparent 0%,
                black 18%,
                black 78%,
                transparent 100%
              ) !important;
          }

          .section-glow {
            width: 280px !important;
            height: 280px !important;
            right: -10% !important;
            top: auto !important;
            bottom: 8% !important;
            transform: none !important;
            filter: blur(80px) !important;
            opacity: 0.65;
          }

          .section-fade {
            background:
              linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.15) 0%,
                rgba(0, 0, 0, 0.45) 48%,
                rgba(0, 0, 0, 0.9) 100%
              ) !important;

            z-index: 3 !important;
          }

          .section-content {
            width: 100% !important;
            max-width: 100% !important;
            position: relative !important;
            z-index: 10 !important;
          }

          .section-content h2 {
            font-size:
              clamp(38px, 10.5vw, 52px) !important;
            line-height: 1.02 !important;
            letter-spacing: -0.035em !important;
            margin: 0 0 18px !important;
            max-width: 100% !important;
            overflow-wrap: normal !important;
            word-break: normal !important;
          }

          .section-content p {
            font-size: 16px !important;
            line-height: 1.55 !important;
            margin: 0 0 24px !important;
            max-width: 330px !important;
          }

          .section-content button {
            width: auto !important;
            max-width: 100% !important;
            min-height: 48px;
            padding: 13px 22px !important;
            font-size: 14px !important;
            white-space: normal !important;
            line-height: 1.35 !important;
          }
        }

        /* SMALL PHONES */
        @media (max-width: 420px) {
          .product-section {
            padding: 108px 20px 60px !important;
          }

          .section-image {
            width: 82% !important;
            right: -12% !important;
            bottom: 3% !important;
            opacity: 0.34;
          }

          .section-content h2 {
            font-size:
              clamp(34px, 10vw, 44px) !important;
            line-height: 1.04 !important;
          }

          .section-content p {
            font-size: 15px !important;
            max-width: 300px !important;
          }

          .section-content button {
            font-size: 13px !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}