import { DM_Serif_Display, DM_Sans } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import StickyCTA from "@/components/StickyCTA";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Boyd Walston Construction",
  description: "Quality residential and commercial construction in Pike Road, Alabama.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className={`${dmSerif.variable} ${dmSans.variable} font-sans min-h-full flex flex-col bg-white text-[#111111]`}>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <StickyCTA />
      </body>
    </html>
  );
}
