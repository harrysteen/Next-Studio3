import { Bai_Jamjuree, Albert_Sans, Bakbak_One } from "next/font/google";
import "./globals.css";
import BottomNav from "../components/BottomNav/BottomNav";
import { Analytics } from "@vercel/analytics/next";

const albertSans = Albert_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-albert",
});

const baiJamjuree = Bai_Jamjuree({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
});

const bakbakOne = Bakbak_One({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-bakbak",
});

export const metadata = {
  title: {
    default: "STUDIO DEZU | Design, Product and Technology Company",
    template: "%s | Studio Dezu",
  },
  description: "STUDIO DEZU | Design, Product and Technology Company",
  keywords: ["Design", "Product Design", "Technology Company", "UI/UX design", "branding agency", "web development", "Studio Dezu", "digital agency"],
  authors: [{ name: "Kumarraju", url: "https://studiodezu.com" }],
  creator: "Studio Dezu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studiodezu.com",
    title: "STUDIO DEZU | Design, Product and Technology Company",
    description: "STUDIO DEZU | Design, Product and Technology Company",
    siteName: "Studio Dezu",
  },
  twitter: {
    card: "summary_large_image",
    title: "STUDIO DEZU | Design, Product and Technology Company",
    description: "STUDIO DEZU | Design, Product and Technology Company",
    creator: "@studiodezu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${baiJamjuree.variable} ${bakbakOne.variable}`}>
      <body>
        {children}
        <BottomNav />
        <Analytics />
      </body>
    </html>
  );
}
