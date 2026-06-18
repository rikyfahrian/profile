/** @format */

import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamad Riki Fahrian",
  description: "Frontend Developer",
  keywords: ["Frontend Developer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Mohamad Riki Fahrian" }],
  creator: "Mohamad Riki Fahrian",

  openGraph: {
    title: "Mohamad Riki Fahrian",
    description: "Frontend Developer",
    url: "https://rikyfahrian.vercel.app",
    siteName: "Mohamad Riki Fahrian",
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://rikyfahrian.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-zinc-50 font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
