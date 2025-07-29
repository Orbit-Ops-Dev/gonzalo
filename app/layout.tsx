import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Mayoko Photos - Fotografía Profesional Binacional | Rio Grande Valley",
    template: "%s | Mayoko Photos"
  },
  description: "Fotografía profesional de bodas, retratos y eventos sirviendo a la comunidad del Valle del Río Grande. Disponible en Matamoros, México y Brownsville, Texas. Professional wedding, portrait, and event photography serving the Rio Grande Valley community.",
  keywords: ["photographer", "photography", "portfolio", "portraits", "wedding photography", "Rio Grande Valley", "Matamoros", "Brownsville", "Texas", "Mexico", "bilingual photographer", "fotografo", "fotografia", "bodas"],
  authors: [{ name: "Mayoko Photos - Valeria" }],
  creator: "Mayoko Photos",
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: "https://mayokophotos.com",
    siteName: "Mayoko Photos",
    title: "Mayoko Photos - Fotografía Profesional Binacional | Rio Grande Valley",
    description: "Fotografía profesional que captura la esencia de momentos únicos con calidez y autenticidad para la comunidad del Valle del Río Grande.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mayoko Photos - Professional Photography Rio Grande Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayoko Photos - Fotografía Profesional Binacional",
    description: "Fotografía profesional que captura la esencia de momentos únicos para la comunidad del Valle del Río Grande.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <head>
        <link rel="canonical" href="https://mayokophotos.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Valeria - Mayoko Photos",
              jobTitle: "Professional Photographer / Fotógrafa Profesional",
              description: "Professional wedding, portrait, and event photographer serving the Rio Grande Valley community. Based in Matamoros, Mexico, originally from McAllen, Texas. Fotógrafa profesional de bodas, retratos y eventos sirviendo a la comunidad del Valle del Río Grande.",
              url: "https://mayokophotos.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Matamoros",
                addressRegion: "Tamaulipas",
                addressCountry: "Mexico"
              },
              serviceArea: [
                {
                  "@type": "City",
                  name: "Matamoros, Tamaulipas, Mexico"
                },
                {
                  "@type": "City", 
                  name: "Brownsville, Texas, USA"
                },
                {
                  "@type": "Region",
                  name: "Rio Grande Valley, Texas"
                }
              ],
              sameAs: [
                "https://instagram.com/mayokophotos",
              ],
              knowsAbout: ["Wedding Photography", "Portrait Photography", "Event Photography", "Cross-border Photography Services", "Fotografía de Bodas", "Retratos", "Eventos"],
              knowsLanguage: ["Spanish", "English", "Español", "Inglés"],
            }),
          }}
        />
      </body>
    </html>
  );
}
