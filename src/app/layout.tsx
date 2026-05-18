import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const GA_MEASUREMENT_ID = "G-XP8E45R1L7";
const SITE_URL = "https://zenithai.ca";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Zenith AI — AI-powered marketing for Ottawa small businesses";
const DESCRIPTION =
  "Websites, SEO, and social media for Ottawa small businesses — built faster, priced for what local businesses can actually afford. Based in Ottawa, Canada.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Zenith AI",
  },
  description: DESCRIPTION,
  applicationName: "Zenith AI",
  authors: [{ name: "Zenith AI", url: SITE_URL }],
  creator: "Zenith AI",
  publisher: "Zenith AI",
  keywords: [
    "Ottawa marketing agency",
    "Ottawa small business marketing",
    "Ottawa web design",
    "Ottawa SEO",
    "local SEO Ottawa",
    "Ottawa social media management",
    "AI marketing Ottawa",
    "small business websites Ottawa",
    "Google Business Profile Ottawa",
    "Ottawa Canada digital marketing",
  ],
  category: "Marketing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Zenith AI",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zenith AI — AI-powered marketing for Ottawa small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// LocalBusiness JSON-LD — helps Google understand who/where we are for
// local SEO, knowledge panel eligibility, and "businesses near me" results.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Zenith AI",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.svg`,
  image: `${SITE_URL}/og-image.svg`,
  description: DESCRIPTION,
  email: "hello@zenithai.ca",
  telephone: "+16134165158",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5516 Osgoode Main St, Unit 101",
    addressLocality: "Osgoode",
    addressRegion: "ON",
    postalCode: "K0A 2W0",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "Ottawa",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+16134165158",
      contactType: "customer service",
      email: "hello@zenithai.ca",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+16136686851",
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design",
          description:
            "Modern, mobile-first websites built fast for Ottawa small businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
          description:
            "Google Business Profile setup and local content to rank in Ottawa search results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management",
          description:
            "Fully managed Instagram and Facebook content for Ottawa businesses.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070910]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
