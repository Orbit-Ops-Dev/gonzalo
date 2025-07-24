import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    default: "Mayoko Photos - Professional Photography Portfolio",
    template: "%s | Mayoko Photos"
  },
  description: "Capturing life's beautiful moments through moody, atmospheric photography with dramatic lighting. Professional photography services for portraits, lifestyle, and events.",
  keywords: ["photographer", "photography", "portfolio", "portraits", "lifestyle photography", "professional photographer"],
  authors: [{ name: "Mayoko Photos" }],
  creator: "Mayoko Photos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayokophotos.com",
    siteName: "Mayoko Photos",
    title: "Mayoko Photos - Professional Photography Portfolio",
    description: "Capturing life's beautiful moments through moody, atmospheric photography with dramatic lighting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mayoko Photos Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayoko Photos - Professional Photography Portfolio",
    description: "Capturing life's beautiful moments through moody, atmospheric photography with dramatic lighting.",
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
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayoko Photos",
              jobTitle: "Professional Photographer",
              description: "Professional photographer specializing in moody, atmospheric photography with dramatic lighting",
              url: "https://mayokophotos.com",
              sameAs: [
                "https://instagram.com/mayokophotos",
              ],
              knowsAbout: ["Photography", "Portrait Photography", "Lifestyle Photography", "Event Photography"],
            }),
          }}
        />
      </body>
    </html>
  );
}
