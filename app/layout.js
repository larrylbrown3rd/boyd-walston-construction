import {
  Bebas_Neue,
  Inter,
  Barlow_Condensed,
  Lato,
} from "next/font/google";
import PageTransition from "@/components/PageTransition";
import StickyCTA from "@/components/StickyCTA";
import StructuredData from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const lato = Lato({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = createMetadata("/");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${barlowCondensed.variable} ${lato.variable} h-full antialiased`}
    >
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${barlowCondensed.variable} ${lato.variable} font-lato min-h-full flex flex-col bg-white text-[#111111]`}
      >
        <StructuredData includeFaq />
        <PageTransition>{children}</PageTransition>
        <StickyCTA />
      </body>
    </html>
  );
}
