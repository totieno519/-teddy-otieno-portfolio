import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Teddy Otieno | Web Developer & Digital Solutions Builder",
    template: "%s | Teddy Otieno",
  },

  description:
    "Teddy Otieno is a web developer and digital solutions builder creating modern websites, web applications and practical digital systems.",

  keywords: [
    "Teddy Otieno",
    "Mr. Ted",
    "Web Developer",
    "Digital Solutions Builder",
    "ICT Solutions",
    "Web Development",
    "Website Development",
    "Web Applications",
    "Software Development",
    "Kenya Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Database Systems",
    "NOERMS",
  ],

  authors: [
    {
      name: "Teddy Otieno",
    },
  ],

  creator: "Teddy Otieno",
  publisher: "Teddy Otieno",
  applicationName: "Teddy Otieno",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Teddy Otieno | Web Developer & Digital Solutions Builder",
    description:
      "Modern websites, web applications and practical digital solutions built by Teddy Otieno.",
    type: "website",
    locale: "en_KE",
    siteName: "Teddy Otieno",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Teddy Otieno | Web Developer & Digital Solutions Builder",
    description:
      "Modern websites, web applications and practical digital solutions built by Teddy Otieno.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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