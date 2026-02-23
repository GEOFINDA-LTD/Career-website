import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "GEOFINDA Tech Hub Career Portal — Academic/Proffessional Internship Tracks",
  description:
    "GEOFINDA Tech Hub Career Portal: Apply for 30+ academic internship tracks across five technology domains. Build real projects, get mentored, and launch your tech career from Kigali, Rwanda.",
  keywords: [
    "tech careers",
    "academic internship",
    "GEOFINDA Tech Hub",
    "Rwanda",
    "technology internship",
    "career portal",
  ],
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "GEOFINDA Tech Hub Career Portal — Academic Internships",
    description:
      "Apply for academic internship tracks in software, infrastructure, electronics, AI, and creative technology.",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4CC3E0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
