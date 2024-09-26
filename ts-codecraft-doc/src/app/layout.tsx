import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TS CodeCraft - Essential TypeScript Utility Library",
  description:
    "TS CodeCraft is an open-source utility library providing essential, reusable TypeScript functions. Designed for developers to boost productivity, streamline workflows, and reduce boilerplate code with optimized and modular utilities.",
  keywords: [
    "TypeScript",
    "Utility Library",
    "Open Source",
    "TS CodeCraft",
    "Reusable Functions",
    "Modular Design",
    "TypeScript Utilities",
    "Productivity Tools",
  ],
  authors: [{ name: "Your Name", url: "https://your-website.com" }],
  creator: "Your Name",
  publisher: "TS CodeCraft",
  openGraph: {
    title: "TS CodeCraft - Essential TypeScript Utility Library",
    description:
      "Explore TS CodeCraft: a modular and high-performance TypeScript utility library designed to make your code cleaner and more efficient.",
    url: "https://ts-codecraft.com",
    siteName: "TS CodeCraft",
    images: [
      {
        url: "https://your-cdn-link/ts-codecraft-og-image.png", // Update with your image link
        width: 1200,
        height: 630,
        alt: "TS CodeCraft - Utility Library for TypeScript",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TS CodeCraft - Essential TypeScript Utility Library",
    description:
      "TS CodeCraft is an optimized utility library for TypeScript, offering essential functions to enhance your development experience.",
    site: "@your-twitter-handle", // Update with your Twitter handle
    creator: "@your-twitter-handle", // Update with your Twitter handle
    images: [
      {
        url: "https://your-cdn-link/ts-codecraft-twitter-image.png", // Update with your image link
        alt: "TS CodeCraft - TypeScript Utility Library",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#3178c6", // TypeScript primary color or your own brand color
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://ts-codecraft.com",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
