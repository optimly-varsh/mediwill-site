"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  insightCategories,
  insights,
} from "@/data/insights";

const categoryColors = {
  "Pharmaceutical Industry": "#E5485D",
  Healthcare: "#E5485D",
  Quality: "#6FA8A8",
  "Global Pharma": "#4D8DFF",
  "Company News": "#E878A8",
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const accent =
    activeCategory === "All"
      ? "#E5485D"
      : categoryColors[activeCategory] || "#E5485D";

  const filteredInsights =
    activeCategory === "All"
      ? insights
      : insights.filter(
          (article) =>
            article.category === activeCategory
        );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#f5f5f5",
        padding:
          "clamp(110px, 13vw, 160px) clamp(20px, 6vw, 90px) 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* AMBIENT GLOW */}

      <div
        style={{
          position: "fixed",
          top: "-15vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "48vh",
          background: `radial-gradient(
            ellipse,
            ${accent}18,
            transparent 68%
          )`,
          filter: "blur(35px)",
          pointerEvents: "none",
          transition: "background 0.6s ease",
          zIndex: 0,
        }}
      />

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* EYEBROW */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: accent,
            opacity: 0.8,
          }}
        >
          Mediwill Life Sciences
        </motion.p>

        {/* TITLE */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          style={{
            margin: "18px 0 0",
            fontSize:
              "clamp(54px, 8vw, 100px)",
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: "-0.055em",
          }}
        >
          Insights
        </motion.h1>

        {/* INTRO */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          style={{
            marginTop: 28,
            maxWidth: 780,
            color:
              "rgba(255,255,255,0.58)",
            fontSize:
              "clamp(16px, 1.5vw, 19px)",
            lineHeight: 1.7,
          }}
        >
          Perspectives on pharmaceuticals,
          healthcare, quality, global markets,
          and the work shaping Mediwill.
        </motion.p>

        {/* CATEGORY FILTERS */}

        <div
          style={{
            marginTop: 52,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {["All", ...insightCategories].map(
            (category) => {
              const isActive =
                activeCategory === category;

              const color =
                category === "All"
                  ? "#E5485D"
                  : categoryColors[category] ||
                    "#E5485D";

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  style={{
                    border: isActive
                      ? `1px solid ${color}66`
                      : "1px solid rgba(255,255,255,0.12)",
                    background: isActive
                      ? `${color}12`
                      : "rgba(255,255,255,0.015)",
                    color: isActive
                      ? "#fff"
                      : "rgba(255,255,255,0.62)",
                    borderRadius: 999,
                    padding: "11px 17px",
                    fontSize: 13,
                    cursor: "pointer",
                    transition:
                      "all 0.3s ease",
                    boxShadow: isActive
                      ? `0 0 25px ${color}14`
                      : "none",
                  }}
                  onMouseEnter={(event) => {
                    if (!isActive) {
                      event.currentTarget.style.border =
                        `1px solid ${color}44`;

                      event.currentTarget.style.color =
                        "#fff";
                    }
                  }}
                  onMouseLeave={(event) => {
                    if (!isActive) {
                      event.currentTarget.style.border =
                        "1px solid rgba(255,255,255,0.12)";

                      event.currentTarget.style.color =
                        "rgba(255,255,255,0.62)";
                    }
                  }}
                >
                  {category}
                </button>
              );
            }
          )}
        </div>

        {/* ARTICLE COUNT */}

        <div
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: accent,
              opacity: 0.75,
            }}
          >
            {activeCategory === "All"
              ? "Latest Insights"
              : activeCategory}
          </div>

          <div
            style={{
              fontSize: 12,
              color:
                "rgba(255,255,255,0.35)",
            }}
          >
            {filteredInsights.length}{" "}
            {filteredInsights.length === 1
              ? "article"
              : "articles"}
          </div>
        </div>

        {/* ARTICLE GRID */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
            }}
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 18,
            }}
          >
            {filteredInsights.map(
              (article, index) => {
                const color =
                  categoryColors[
                    article.category
                  ] || "#E5485D";

                return (
                  <motion.article
                    key={article.slug}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      border:
                        `1px solid ${color}20`,
                      borderRadius: 24,
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                      transition:
                        "all 0.3s ease",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.border =
                        `1px solid ${color}55`;

                      event.currentTarget.style.transform =
                        "translateY(-3px)";

                      event.currentTarget.style.boxShadow =
                        `0 0 45px ${color}10`;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.border =
                        `1px solid ${color}20`;

                      event.currentTarget.style.transform =
                        "translateY(0)";

                      event.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    {/* CARD GLOW */}

                    <div
                      style={{
                        position: "absolute",
                        top: -100,
                        right: -100,
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        background:
                          `radial-gradient(
                            circle,
                            ${color}18,
                            transparent 70%
                          )`,
                        filter: "blur(25px)",
                        pointerEvents: "none",
                      }}
                    />

                    <div
                      style={{
                        position:
                          "relative",
                        padding: 25,
                      }}
                    >
                      {/* CATEGORY */}

                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems:
                            "center",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            color,
                            fontSize: 10,
                            letterSpacing:
                              "0.16em",
                            textTransform:
                              "uppercase",
                          }}
                        >
                          {article.category}
                        </span>

                        <span
                          style={{
                            color:
                              "rgba(255,255,255,0.35)",
                            fontSize: 11,
                          }}
                        >
                          {article.readTime}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h2
                        style={{
                          margin:
                            "22px 0 0",
                          fontSize:
                            "clamp(22px, 2.5vw, 29px)",
                          lineHeight: 1.15,
                          fontWeight: 500,
                          letterSpacing:
                            "-0.025em",
                        }}
                      >
                        {article.title}
                      </h2>

                      {/* EXCERPT */}

                      <p
                        style={{
                          margin:
                            "16px 0 0",
                          color:
                            "rgba(255,255,255,0.52)",
                          fontSize: 14,
                          lineHeight: 1.7,
                        }}
                      >
                        {article.excerpt}
                      </p>

                      {/* DATE */}

                      <div
                        style={{
                          marginTop: 22,
                          color:
                            "rgba(255,255,255,0.32)",
                          fontSize: 11,
                        }}
                      >
                        {article.date}
                      </div>

                      {/* READ LINK */}

                      <Link
                        href={`/insights/${article.slug}`}
                        style={{
                          display:
                            "inline-flex",
                          alignItems:
                            "center",
                          gap: 8,
                          marginTop: 25,
                          color: "#fff",
                          textDecoration:
                            "none",
                          fontSize: 13,
                          borderBottom:
                            `1px solid ${color}66`,
                          paddingBottom: 5,
                        }}
                      >
                        Read insight
                        <span
                          style={{
                            color,
                          }}
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </motion.article>
                );
              }
            )}
          </motion.div>
        </AnimatePresence>

        {/* EMPTY STATE */}

        {filteredInsights.length === 0 && (
          <div
            style={{
              marginTop: 25,
              minHeight: 260,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              border:
                "1px dashed rgba(255,255,255,0.12)",
              borderRadius: 24,
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 500,
                }}
              >
                No insights in this category
              </h2>

              <p
                style={{
                  marginTop: 12,
                  color:
                    "rgba(255,255,255,0.42)",
                }}
              >
                More perspectives will be
                published here.
              </p>
            </div>
          </div>
        )}

        {/* CONTACT */}

        <div
          style={{
            marginTop: 60,
            paddingTop: 25,
            borderTop:
              "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <Link
            href="/#contact"
            style={{
              color:
                "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: 13,
              borderBottom:
                `1px solid ${accent}55`,
              paddingBottom: 5,
            }}
          >
            Have a media or business enquiry?
            Contact Mediwill →
          </Link>
        </div>
      </section>
    </main>
  );
}