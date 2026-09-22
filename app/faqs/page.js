"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCategories } from "@/data/faqs";

const categoryColors = {
  general: "#E5485D",
  products: "#E5485D",
  "quality-regulatory": "#6FA8A8",
  "export-international": "#4D8DFF",
};

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState(
    faqCategories[0]?.id || "general"
  );

  const [openQuestion, setOpenQuestion] = useState(null);

  const activeData =
    faqCategories.find(
      (category) => category.id === activeCategory
    ) || faqCategories[0];

  const accent =
    categoryColors[activeCategory] || "#E5485D";

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenQuestion(null);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#f5f5f5",
        padding:
          "clamp(110px, 13vw, 160px) clamp(20px, 6vw, 90px) 80px",
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
          width: "75vw",
          height: "45vh",
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
          style={{
            margin: "18px 0 0",
            fontSize: "clamp(54px, 8vw, 100px)",
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: "-0.055em",
          }}
        >
          FAQs
        </motion.h1>

        {/* INTRO */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          style={{
            maxWidth: 760,
            marginTop: 28,
            fontSize: "clamp(16px, 1.5vw, 19px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.58)",
          }}
        >
          Answers to common questions about Mediwill,
          our pharmaceutical portfolio, quality and
          international business.
        </motion.p>

        {/* CATEGORY NAVIGATION */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 52,
            marginBottom: 38,
          }}
        >
          {faqCategories.map((category) => {
            const isActive =
              category.id === activeCategory;

            const color =
              categoryColors[category.id] || "#E5485D";

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  handleCategoryChange(category.id)
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
                  transition: "all 0.3s ease",
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
                {category.name}
              </button>
            );
          })}
        </div>

        {/* FAQ CONTENT */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {/* CATEGORY LABEL */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: accent,
                  boxShadow:
                    `0 0 16px ${accent}`,
                }}
              />

              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: accent,
                  opacity: 0.8,
                }}
              >
                {activeData?.name}
              </span>
            </div>

            {/* QUESTIONS */}

            <div
              style={{
                borderTop:
                  "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {activeData?.questions?.map(
                (item, index) => {
                  const isOpen =
                    openQuestion === index;

                  return (
                    <div
                      key={item.question}
                      style={{
                        borderBottom:
                          "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenQuestion(
                            isOpen ? null : index
                          )
                        }
                        aria-expanded={isOpen}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "space-between",
                          gap: 25,
                          padding:
                            "25px 4px",
                          border: "none",
                          background: "transparent",
                          color: "#fff",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <span
                          style={{
                            fontSize:
                              "clamp(16px, 1.7vw, 20px)",
                            lineHeight: 1.45,
                            fontWeight: 400,
                          }}
                        >
                          {item.question}
                        </span>

                        <span
                          style={{
                            flexShrink: 0,
                            width: 30,
                            height: 30,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: "50%",
                            border:
                              `1px solid ${
                                isOpen
                                  ? accent
                                  : "rgba(255,255,255,0.16)"
                              }`,
                            color: isOpen
                              ? accent
                              : "rgba(255,255,255,0.65)",
                            fontSize: 20,
                            lineHeight: 1,
                            transform: isOpen
                              ? "rotate(45deg)"
                              : "rotate(0deg)",
                            transition:
                              "all 0.3s ease",
                          }}
                        >
                          +
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                padding:
                                  "0 55px 27px 4px",
                                color:
                                  "rgba(255,255,255,0.55)",
                                fontSize: 15,
                                lineHeight: 1.8,
                                maxWidth: 850,
                              }}
                            >
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CONTACT CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          style={{
            marginTop: 55,
            paddingTop: 25,
            borderTop:
              "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <a
            href="/#contact"
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: 13,
              borderBottom:
                `1px solid ${accent}55`,
              paddingBottom: 4,
              transition: "all 0.25s ease",
            }}
          >
            Have another question? Contact Mediwill →
          </a>
        </motion.div>
      </section>
    </main>
  );
}