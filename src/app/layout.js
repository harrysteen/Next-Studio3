import { Geist, Geist_Mono, Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "StudioDezu",
  description: "A FULL-CYCLE DESIGN PARTNER FOR COMPANIES THAT WIN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
