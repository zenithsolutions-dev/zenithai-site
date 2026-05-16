import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-XP8E45R1L7";
const SITE_URL = "https://zenithai.ca";

const geistSans = Geist({
  variable: "--font-geist-sans",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
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
