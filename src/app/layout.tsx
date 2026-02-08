import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GA_MEASUREMENT_ID = "G-K0TDWLQM7R";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Astrolog Demet Baltacı | Burç Yorumları ve Danışmanlık",
    template: "%s | Astrolog Demet Baltacı",
  },
  description:
    "Astrolog Demet Baltacı ile günlük, haftalık, aylık burç yorumları. Doğum haritası analizi, ilişki uyumu ve kişisel danışmanlık hizmetleri.",
  keywords: [
    "astrolog",
    "demet baltacı",
    "burç yorumları",
    "günlük burç",
    "doğum haritası",
    "astroloji",
  ],
  authors: [{ name: "Demet Baltacı" }],
  creator: "Demet Baltacı",
  publisher: "Demet Baltacı",
  metadataBase: new URL("https://www.demetbaltaci.com"),
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://www.demetbaltaci.com",
    siteName: "Astrolog Demet Baltacı",
    title: "Astrolog Demet Baltacı | Burç Yorumları ve Danışmanlık",
    description:
      "Astrolog Demet Baltacı ile günlük, haftalık, aylık burç yorumları. Doğum haritası analizi ve kişisel danışmanlık.",
    images: [
      {
        url: "/images/demet.png",
        width: 1200,
        height: 630,
        alt: "Astrolog Demet Baltacı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrolog Demet Baltacı",
    description: "Burç yorumları ve astroloji danışmanlığı",
    images: ["/images/demet.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "eWQfwoM3FwTKlKUlAaYDQIYubuSthsTo0xjdsJuJtVk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Demet Baltacı",
              alternateName: "Astrolog Demet Baltacı",
              url: "https://www.demetbaltaci.com",
              jobTitle: "Astrolog",
              description:
                "Profesyonel astrolog, doğum haritası analizi ve burç yorumları uzmanı",
              sameAs: [
                "https://www.youtube.com/@demet.baltaci",
                "https://www.instagram.com/demetbaltaci_",
                "https://www.facebook.com/demet.baltaci.astroloji",
                "https://x.com/demetbaltaci",
                "https://www.linkedin.com/in/astrolog-demet-baltac%C4%B1-astroloji/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Astrolog Demet Baltacı - Astroloji Danışmanlık",
              description: "Doğum haritası analizi, sinastri, solar return ve astroloji eğitimi hizmetleri",
              url: "https://www.demetbaltaci.com",
              telephone: "+905076075017",
              priceRange: "₺₺",
              areaServed: {
                "@type": "Country",
                name: "Türkiye"
              },
              serviceType: ["Astroloji Danışmanlık", "Doğum Haritası Analizi", "Sinastri", "Astroloji Eğitimi"],
              provider: {
                "@type": "Person",
                name: "Demet Baltacı"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
