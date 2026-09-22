"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { insights } from "@/data/insights";

const categoryColors = {
  "Pharmaceutical Industry": "#E5485D",
  Healthcare: "#E5485D",
  Quality: "#6FA8A8",
  "Global Pharma": "#4D8DFF",
  "Company News": "#E878A8",
};

export default function InsightArticlePage() {
  const params = useParams();

  const article = insights.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  const accent =
    categoryColors[article.category] || "#E5485D";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#f5f5f5",
        padding:
          "clamp(110px, 13vw, 160px) 20px 100px",
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
          height: "50vh",
          background: `radial-gradient(
            ellipse,
            ${accent}18,
            transparent 68%
          )`,
          filter: "blur(35px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <article
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* BACK */}

        <Link
          href="/insights"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
            fontSize: 13,
            marginBottom: 55,
          }}
        >
          ← Back to Insights
        </Link>

        {/* CATEGORY */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: accent,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {article.category}
        </motion.div>

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.05,
          }}
          style={{
            margin: "20px 0 0",
            fontSize:
              "clamp(42px, 7vw, 78px)",
            lineHeight: 1.02,
            fontWeight: 400,
            letterSpacing: "-0.05em",
          }}
        >
          {article.title}
        </motion.h1>

        {/* META */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            marginTop: 28,
            paddingBottom: 28,
            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
            color:
              "rgba(255,255,255,0.38)",
            fontSize: 12,
          }}
        >
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.author}</span>
        </div>

        {/* EXCERPT */}

        <p
          style={{
            marginTop: 38,
            color:
              "rgba(255,255,255,0.65)",
            fontSize:
              "clamp(18px, 2vw, 22px)",
            lineHeight: 1.7,
          }}
        >
          {article.excerpt}
        </p>

        {/* ARTICLE CONTENT */}

        <div
          style={{
            marginTop: 55,
          }}
        >
          {article.content?.map(
            (block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    style={{
                      margin:
                        "48px 0 16px",
                      fontSize:
                        "clamp(24px, 3vw, 34px)",
                      lineHeight: 1.2,
                      fontWeight: 500,
                      letterSpacing:
                        "-0.025em",
                    }}
                  >
                    {block.text}
                  </h2>
                );
              }

              return (
                <p
                  key={index}
                  style={{
                    margin:
                      "0 0 24px",
                    color:
                      "rgba(255,255,255,0.62)",
                    fontSize: 17,
                    lineHeight: 1.9,
                  }}
                >
                  {block.text}
                </p>
              );
            }
          )}
        </div>

        {/* FOOTER */}

        <div
          style={{
            marginTop: 70,
            paddingTop: 25,
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/insights"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
              borderBottom:
                `1px solid ${accent}66`,
              paddingBottom: 5,
            }}
          >
            ← Explore more insights
          </Link>

          <Link
            href="/#contact"
            style={{
              color:
                "rgba(255,255,255,0.55)",
              textDecoration: "none",
              fontSize: 13,
            }}
          >
            Contact Mediwill →
          </Link>
        </div>
      </article>
    </main>
  );
}