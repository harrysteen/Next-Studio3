import { Bai_Jamjuree, Albert_Sans, Bakbak_One } from "next/font/google";
import "./globals.css";
import BottomNav from "../components/BottomNav/BottomNav";

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
  title: "Studio Dezu | Premium UI/UX & Digital Design Agency",
  description: "Studio Dezu is a full-cycle design partner for companies that win. We specialize in UI/UX design, branding, product design, and scalable web development to drive impact and decisive momentum.",
  keywords: ["UI/UX design", "product design", "branding agency", "web development", "Studio Dezu", "design partner", "SaaS design", "digital agency"],
  authors: [{ name: "Kumarraju", url: "https://studiodezu.com" }],
  creator: "Kumarraju from Studio Dezu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studiodezu.com",
    title: "Studio Dezu | UI/UX & Digital Design Agency",
    description: "A full-cycle design partner for companies that win. Elevate your digital presence with Studio Dezu.",
    siteName: "Studio Dezu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Dezu | UI/UX & Digital Design Agency",
    description: "A full-cycle design partner for companies that win.",
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
      </body>
    </html>
  );
}
