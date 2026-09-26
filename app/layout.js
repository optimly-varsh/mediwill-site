import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mediwill Life Sciences | Pharmaceutical Company in India",

  description:
    "Mediwill Life Sciences is an Indian pharmaceutical company specializing in cardiac, diabetes, orthopedic, and anti-infective medicines.",

  keywords: [
    "Mediwill Life Sciences",
    "Pharma company India",
    "Cardiac medicines",
    "Diabetes medicines",
    "Orthopedic pharma",
    "Anti-infective drugs",
  ],

  authors: [
    {
      name: "Mediwill Life Sciences",
    },
  ],

  metadataBase: new URL("https://www.mediwill.in"),

  alternates: {
    canonical: "https://www.mediwill.in",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Mediwill Life Sciences",

    description:
      "Precision healthcare across cardiac, diabetes, and orthopedic care.",

    url: "https://www.mediwill.in",

    siteName: "Mediwill Life Sciences",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mediwill Life Sciences",

    description:
      "Precision healthcare solutions across cardiac, diabetes, and orthopedic care.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full bg-black text-white">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}