"use client";

import { useMemo, useState } from "react";
import { products, therapeuticAreas } from "@/data/products";

const divisionColors = {
  Cardiac: "#E5485D",
  Diabetes: "#E5485D",
  Orthopedic: "#4D8DFF",
  "Anti-Infective": "#49B96E",
  Gynecology: "#E878A8",
  Gastroenterology: "#6FA8A8",
  Surgery: "#8C9AA6",
};

const divisionGlow = {
  Cardiac: "rgba(229, 72, 93, 0.22)",
  Diabetes: "rgba(229, 72, 93, 0.22)",
  Orthopedic: "rgba(77, 141, 255, 0.22)",
  "Anti-Infective": "rgba(73, 185, 110, 0.20)",
  Gynecology: "rgba(232, 120, 168, 0.20)",
  Gastroenterology: "rgba(111, 168, 168, 0.18)",
  Surgery: "rgba(140, 154, 166, 0.18)",
};

const divisionSoftGlow = {
  Cardiac: "rgba(229, 72, 93, 0.08)",
  Diabetes: "rgba(229, 72, 93, 0.08)",
  Orthopedic: "rgba(77, 141, 255, 0.08)",
  "Anti-Infective": "rgba(73, 185, 110, 0.07)",
  Gynecology: "rgba(232, 120, 168, 0.07)",
  Gastroenterology: "rgba(111, 168, 168, 0.06)",
  Surgery: "rgba(140, 154, 166, 0.06)",
};

function getDivisionColor(area) {
  return divisionColors[area] || "#9AA0A6";
}

function getDivisionGlow(area) {
  return divisionGlow[area] || "rgba(255,255,255,0.12)";
}

function getDivisionSoftGlow(area) {
  return divisionSoftGlow[area] || "rgba(255,255,255,0.04)";
}

export default function ProductsPage() {
  const [activeArea, setActiveArea] = useState("All");
  const [query, setQuery] = useState("");

  const activeColor =
    activeArea === "All"
      ? "#E5485D"
      : getDivisionColor(activeArea);

  const activeGlow =
    activeArea === "All"
      ? "rgba(229, 72, 93, 0.12)"
      : getDivisionGlow(activeArea);

  const visibleProducts = useMemo(() => {
    const term = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesArea =
        activeArea === "All" ||
        product.areas?.includes(activeArea);

      const variantText = (product.variantDetails || [])
        .flatMap((variant) => [
          variant.name,
          variant.strength,
          variant.composition,
          variant.dosageForm,
        ])
        .filter(Boolean);

      const searchableText = [
        product.name,
        product.composition,
        product.category,
        ...(product.areas || []),
        ...(product.variants || []),
        ...variantText,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesArea &&
        (!term || searchableText.includes(term))
      );
    });
  }, [activeArea, query]);

  const groupedProducts = useMemo(() => {
    const groups = {};

    visibleProducts.forEach((product) => {
      const areas =
        activeArea === "All"
          ? product.areas?.length
            ? product.areas
            : ["Other"]
          : [activeArea];

      areas.forEach((area) => {
        const category =
          product.category || "Other Products";

        if (!groups[area]) {
          groups[area] = {};
        }

        if (!groups[area][category]) {
          groups[area][category] = [];
        }

        const alreadyExists =
          groups[area][category].some(
            (item) => item.name === product.name
          );

        if (!alreadyExists) {
          groups[area][category].push(product);
        }
      });
    });

    return groups;
  }, [visibleProducts, activeArea]);

  const areaOrder =
    activeArea === "All"
      ? therapeuticAreas.filter(
          (area) => area !== "All"
        )
      : [activeArea];

  const totalFamilies = visibleProducts.length;

  const totalVariants = visibleProducts.reduce(
    (total, product) =>
      total +
      (product.variantDetails?.length ||
        product.variants?.length ||
        0),
    0
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% -10%, rgba(255,255,255,0.035), transparent 38%), #070709",
        color: "#f5f2ef",
        padding:
          "clamp(32px, 6vw, 96px) clamp(20px, 5vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* AMBIENT THERAPEUTIC GLOW */}

      <div
        style={{
          position: "fixed",
          top: "-20vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "50vh",
          background: `radial-gradient(
            ellipse,
            ${activeGlow},
            transparent 68%
          )`,
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.6s ease",
        }}
      />

      <section
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* HEADER */}

        <p
          style={{
            marginBottom: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontSize: 12,
            opacity: 0.55,
          }}
        >
          Mediwill Life Sciences
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(42px, 7vw, 88px)",
            lineHeight: 0.95,
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          Product Catalogue
        </h1>

        <p
          style={{
            maxWidth: 760,
            marginTop: 24,
            marginBottom: 48,
            fontSize: "clamp(16px, 1.6vw, 20px)",
            lineHeight: 1.65,
            opacity: 0.68,
          }}
        >
          Explore Mediwill&apos;s pharmaceutical
          portfolio, organised by therapeutic area,
          product category, product family and exact
          formulation details.
        </p>

        {/* SEARCH + CATALOGUE DOWNLOAD */}

        <div
          className="catalogue-controls"
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(220px, 1fr) auto",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <input
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search by product, composition, variant, strength or category..."
            aria-label="Search products"
            style={{
              width: "100%",
              border:
                "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999,
              background:
                "rgba(255,255,255,0.04)",
              color: "inherit",
              padding: "16px 20px",
              outline: "none",
              fontSize: 14,
              boxSizing: "border-box",
              transition:
                "border 0.3s ease, box-shadow 0.3s ease",
            }}
            onFocus={(event) => {
              event.currentTarget.style.border =
                `1px solid ${activeColor}66`;

              event.currentTarget.style.boxShadow =
                `0 0 30px ${activeGlow}`;
            }}
            onBlur={(event) => {
              event.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.12)";

              event.currentTarget.style.boxShadow =
                "none";
            }}
          />

          {/* DOWNLOAD CATALOGUE */}

          <a
            className="catalogue-download"
            href="/Mediwill-Life-Sciences-Final-Product-Catalogue.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              minWidth: 190,
              padding: "0 20px",
              borderRadius: 999,
              border:
                "1px solid rgba(229, 72, 93, 0.40)",
              background:
                "linear-gradient(135deg, rgba(229,72,93,0.14), rgba(255,255,255,0.035))",
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.01em",
              boxShadow:
                "0 0 28px rgba(229,72,93,0.10)",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.border =
                "1px solid rgba(229, 72, 93, 0.75)";

              event.currentTarget.style.background =
                "linear-gradient(135deg, rgba(229,72,93,0.22), rgba(255,255,255,0.055))";

              event.currentTarget.style.boxShadow =
                "0 0 34px rgba(229,72,93,0.20)";

              event.currentTarget.style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.border =
                "1px solid rgba(229, 72, 93, 0.40)";

              event.currentTarget.style.background =
                "linear-gradient(135deg, rgba(229,72,93,0.14), rgba(255,255,255,0.035))";

              event.currentTarget.style.boxShadow =
                "0 0 28px rgba(229,72,93,0.10)";

              event.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            <span
              style={{
                fontSize: 17,
                lineHeight: 1,
              }}
            >
              ↓
            </span>

            <span>
              Download Catalogue
            </span>
          </a>
        </div>

        {/* PRODUCT COUNT */}

        <div
          className="catalogue-count"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              borderRadius: 999,
              padding: "10px 18px",
              border:
                "1px solid rgba(255,255,255,0.10)",
              background:
                "rgba(255,255,255,0.025)",
              opacity: 0.65,
              whiteSpace: "nowrap",
              fontSize: 13,
            }}
          >
            {totalFamilies} product families
          </div>
        </div>

        {/* THERAPEUTIC FILTERS */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 56,
          }}
        >
          {therapeuticAreas.map((area) => {
            const color =
              area === "All"
                ? "#E5485D"
                : getDivisionColor(area);

            const isActive =
              activeArea === area;

            return (
              <button
                key={area}
                type="button"
                onClick={() =>
                  setActiveArea(area)
                }
                style={{
                  border: isActive
                    ? `1px solid ${color}88`
                    : "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 999,
                  background: isActive
                    ? `linear-gradient(
                        135deg,
                        ${color}20,
                        rgba(255,255,255,0.05)
                      )`
                    : "transparent",
                  color: isActive
                    ? "#fff"
                    : "rgba(255,255,255,0.72)",
                  padding: "10px 15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isActive
                    ? `0 0 24px ${color}22`
                    : "none",
                }}
              >
                {area}
              </button>
            );
          })}
        </div>

        {/* EMPTY STATE */}

        {visibleProducts.length === 0 ? (
          <div
            style={{
              minHeight: 260,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              border:
                "1px dashed rgba(255,255,255,0.14)",
              borderRadius: 28,
              padding: 32,
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 500,
                }}
              >
                No matching products
              </h2>

              <p
                style={{
                  marginTop: 12,
                  opacity: 0.58,
                }}
              >
                Try another product name,
                composition, variant, strength or
                therapeutic area.
              </p>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gap: 80,
            }}
          >
            {areaOrder.map((area) => {
              const categoryGroups =
                groupedProducts[area];

              if (!categoryGroups) {
                return null;
              }

              const color =
                getDivisionColor(area);

              const glow =
                getDivisionGlow(area);

              const softGlow =
                getDivisionSoftGlow(area);

              return (
                <section key={area}>
                  {/* THERAPEUTIC DIVISION */}

                  {activeArea === "All" && (
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems:
                          "baseline",
                        justifyContent:
                          "space-between",
                        gap: 20,
                        marginBottom: 34,
                        paddingBottom: 18,
                        borderBottom:
                          `1px solid ${color}28`,
                      }}
                    >
                      {/* DIVISION AMBIENT LIGHT */}

                      <div
                        style={{
                          position: "absolute",
                          left: -80,
                          top: -100,
                          width: 360,
                          height: 220,
                          background:
                            `radial-gradient(
                              circle,
                              ${softGlow},
                              transparent 70%
                            )`,
                          filter: "blur(20px)",
                          pointerEvents: "none",
                        }}
                      />

                      <div
                        style={{
                          position: "relative",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: 11,
                            letterSpacing:
                              "0.22em",
                            textTransform:
                              "uppercase",
                            color,
                            opacity: 0.8,
                          }}
                        >
                          Therapeutic Division
                        </p>

                        <h2
                          style={{
                            margin:
                              "8px 0 0",
                            fontSize:
                              "clamp(30px, 4vw, 48px)",
                            fontWeight: 500,
                            letterSpacing:
                              "-0.03em",
                            textShadow:
                              `0 0 40px ${glow}`,
                          }}
                        >
                          {area}
                        </h2>
                      </div>
                    </div>
                  )}

                  {/* CATEGORIES */}

                  <div
                    style={{
                      display: "grid",
                      gap: 64,
                    }}
                  >
                    {Object.entries(
                      categoryGroups
                    ).map(
                      ([
                        category,
                        categoryProducts,
                      ]) => (
                        <section
                          key={`${area}-${category}`}
                        >
                          {/* CATEGORY HEADER */}

                          <div
                            style={{
                              display: "flex",
                              alignItems:
                                "baseline",
                              justifyContent:
                                "space-between",
                              gap: 20,
                              marginBottom: 20,
                            }}
                          >
                            <div>
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: 12,
                                  letterSpacing:
                                    "0.18em",
                                  textTransform:
                                    "uppercase",
                                  color,
                                  opacity: 0.7,
                                }}
                              >
                                Product Category
                              </p>

                              <h3
                                style={{
                                  margin:
                                    "7px 0 0",
                                  fontSize:
                                    "clamp(24px, 3vw, 34px)",
                                  fontWeight: 500,
                                }}
                              >
                                {category}
                              </h3>
                            </div>

                            <span
                              style={{
                                opacity: 0.45,
                                fontSize: 13,
                              }}
                            >
                              {
                                categoryProducts.length
                              }
                            </span>
                          </div>

                          {/* PRODUCT FAMILY GRID */}

                          <div
                            className="product-family-grid"
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(320px, 1fr))",
                              gap: 18,
                            }}
                          >
                            {categoryProducts.map(
                              (
                                product,
                                productIndex
                              ) => {
                                const details =
                                  product
                                    .variantDetails
                                    ?.length
                                    ? product.variantDetails
                                    : (
                                        product.variants ||
                                        []
                                      ).map(
                                        (
                                          variant
                                        ) => ({
                                          name:
                                            variant,
                                          strength:
                                            "",
                                          composition:
                                            product.composition ||
                                            "",
                                          dosageForm:
                                            "",
                                        })
                                      );

                                return (
                                  <article
                                    key={`${area}-${category}-${product.name}-${productIndex}`}
                                    style={{
                                      position:
                                        "relative",
                                      overflow:
                                        "hidden",
                                      border:
                                        `1px solid ${color}20`,
                                      borderRadius: 24,
                                      padding: 24,
                                      background:
                                        `linear-gradient(
                                          145deg,
                                          ${softGlow},
                                          rgba(255,255,255,0.025) 48%,
                                          rgba(255,255,255,0.018)
                                        )`,
                                      boxShadow:
                                        `0 0 60px ${softGlow}`,
                                      transition:
                                        "all 0.35s ease",
                                      boxSizing:
                                        "border-box",
                                      minWidth: 0,
                                    }}
                                    onMouseEnter={(
                                      event
                                    ) => {
                                      event.currentTarget.style.border =
                                        `1px solid ${color}55`;

                                      event.currentTarget.style.boxShadow =
                                        `0 0 45px ${softGlow}, inset 0 0 30px ${softGlow}`;
                                    }}
                                    onMouseLeave={(
                                      event
                                    ) => {
                                      event.currentTarget.style.border =
                                        `1px solid ${color}20`;

                                      event.currentTarget.style.boxShadow =
                                        `0 0 60px ${softGlow}`;
                                    }}
                                  >
                                    {/* CARD TOP GLOW */}

                                    <div
                                      style={{
                                        position:
                                          "absolute",
                                        top: -100,
                                        right: -100,
                                        width: 220,
                                        height: 220,
                                        borderRadius:
                                          "50%",
                                        background:
                                          `radial-gradient(
                                            circle,
                                            ${glow},
                                            transparent 70%
                                          )`,
                                        filter:
                                          "blur(25px)",
                                        pointerEvents:
                                          "none",
                                      }}
                                    />

                                    {/* PRODUCT FAMILY */}

                                    <p
                                      style={{
                                        position:
                                          "relative",
                                        margin: 0,
                                        opacity: 0.48,
                                        fontSize: 11,
                                        letterSpacing:
                                          "0.14em",
                                        textTransform:
                                          "uppercase",
                                      }}
                                    >
                                      Product Family
                                    </p>

                                    <h4
                                      style={{
                                        position:
                                          "relative",
                                        margin:
                                          "10px 0 6px",
                                        fontSize: 24,
                                        fontWeight: 500,
                                        textShadow:
                                          `0 0 25px ${softGlow}`,
                                      }}
                                    >
                                      {product.name}
                                    </h4>

                                    {product.composition && (
                                      <p
                                        style={{
                                          position:
                                            "relative",
                                          margin: 0,
                                          opacity: 0.58,
                                          lineHeight:
                                            1.55,
                                        }}
                                      >
                                        {
                                          product.composition
                                        }
                                      </p>
                                    )}

                                    {/* VARIANT LIST */}

                                    <div
                                      style={{
                                        position:
                                          "relative",
                                        marginTop: 20,
                                        borderTop:
                                          `1px solid ${color}18`,
                                        paddingTop: 16,
                                        display:
                                          "grid",
                                        gap: 10,
                                      }}
                                    >
                                      {details.map(
                                        (
                                          variant,
                                          variantIndex
                                        ) => (
                                          <div
                                            key={`${product.name}-${variant.name}-${variantIndex}`}
                                            style={{
                                              padding:
                                                "15px 16px",
                                              borderRadius: 14,
                                              background:
                                                "rgba(255,255,255,0.025)",
                                              border:
                                                "1px solid rgba(255,255,255,0.06)",
                                              transition:
                                                "all 0.25s ease",
                                              minWidth:
                                                0,
                                              boxSizing:
                                                "border-box",
                                            }}
                                            onMouseEnter={(
                                              event
                                            ) => {
                                              event.currentTarget.style.border =
                                                `1px solid ${color}40`;

                                              event.currentTarget.style.background =
                                                `${color}08`;
                                            }}
                                            onMouseLeave={(
                                              event
                                            ) => {
                                              event.currentTarget.style.border =
                                                "1px solid rgba(255,255,255,0.06)";

                                              event.currentTarget.style.background =
                                                "rgba(255,255,255,0.025)";
                                            }}
                                          >
                                            {/* VARIANT NAME */}

                                            <div
                                              style={{
                                                display:
                                                  "flex",
                                                alignItems:
                                                  "flex-start",
                                                justifyContent:
                                                  "space-between",
                                                gap: 16,
                                                minWidth:
                                                  0,
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontSize: 15,
                                                  fontWeight:
                                                    500,
                                                  lineHeight:
                                                    1.4,
                                                  color:
                                                    "#f5f2ef",
                                                  minWidth:
                                                    0,
                                                  overflowWrap:
                                                    "anywhere",
                                                }}
                                              >
                                                {
                                                  variant.name
                                                }
                                              </span>

                                              {variant.dosageForm && (
                                                <span
                                                  style={{
                                                    flexShrink: 0,
                                                    fontSize: 9,
                                                    opacity:
                                                      0.48,
                                                    color,
                                                    textTransform:
                                                      "uppercase",
                                                    letterSpacing:
                                                      "0.1em",
                                                    paddingTop:
                                                      3,
                                                  }}
                                                >
                                                  {
                                                    variant.dosageForm
                                                  }
                                                </span>
                                              )}
                                            </div>

                                            {/* STRENGTH */}

                                            {variant.strength && (
                                              <div
                                                style={{
                                                  marginTop: 8,
                                                  fontSize: 13,
                                                  lineHeight:
                                                    1.4,
                                                }}
                                              >
                                                <span
                                                  style={{
                                                    opacity:
                                                      0.42,
                                                    marginRight:
                                                      8,
                                                  }}
                                                >
                                                  Strength
                                                </span>

                                                <strong
                                                  style={{
                                                    fontWeight:
                                                      500,
                                                    color,
                                                    textShadow:
                                                      `0 0 18px ${glow}`,
                                                  }}
                                                >
                                                  {
                                                    variant.strength
                                                  }
                                                </strong>
                                              </div>
                                            )}

                                            {/* COMPOSITION */}

                                            {variant.composition && (
                                              <div
                                                style={{
                                                  marginTop: 6,
                                                  fontSize: 12,
                                                  lineHeight:
                                                    1.5,
                                                  opacity:
                                                    0.58,
                                                }}
                                              >
                                                {
                                                  variant.composition
                                                }
                                              </div>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </article>
                                );
                              }
                            )}
                          </div>
                        </section>
                      )
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* FOOTER */}

        <div
          style={{
            marginTop: 72,
            paddingTop: 20,
            borderTop:
              "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent:
              "space-between",
            gap: 20,
            flexWrap: "wrap",
            opacity: 0.38,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform:
              "uppercase",
          }}
        >
          <span>
            {totalFamilies} product families
          </span>

          <span>
            {totalVariants} listed variants
          </span>
        </div>
      </section>

      {/* =====================================================
          MOBILE RESPONSIVE FIXES
          Desktop layout remains unchanged.
      ===================================================== */}

      <style jsx>{`
        @media (max-width: 768px) {
          .catalogue-controls {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            width: 100%;
          }

          .catalogue-controls input {
            width: 100% !important;
            min-width: 0 !important;
          }

          .catalogue-download {
            width: 100% !important;
            min-width: 0 !important;
            min-height: 52px;
            box-sizing: border-box;
          }

          .catalogue-count {
            justify-content: center !important;
            margin-bottom: 22px !important;
          }

          .product-family-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .catalogue-controls {
            gap: 10px !important;
          }

          .catalogue-download {
            font-size: 12px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}