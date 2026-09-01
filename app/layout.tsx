import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Teddy Otieno | Web Developer & ICT Solutions Builder",
    template: "%s | Teddy Otieno",
  },
  description:
    "Teddy Otieno is a web developer and ICT solutions builder creating modern websites, web applications and practical digital systems.",
  keywords: [
    "Teddy Otieno",
    "Web Developer",
    "ICT Solutions",
    "Web Development",
    "Website Development",
    "Web Applications",
    "Software Development",
    "Kenya Web Developer",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [
    {
      name: "Teddy Otieno",
    },
  ],
  creator: "Teddy Otieno",
  applicationName: "Teddy Otieno",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Teddy Otieno | Web Developer & ICT Solutions Builder",
    description:
      "Modern websites, web applications and practical digital solutions built by Teddy Otieno.",
    type: "website",
    locale: "en_KE",
    siteName: "Teddy Otieno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy Otieno | Web Developer & ICT Solutions Builder",
    description:
      "Modern websites, web applications and practical digital solutions built by Teddy Otieno.",
  },
  robots: {
    index: true,
    follow: true,
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
        <WhatsAppButton />
      </body>
    </html>
  );
}