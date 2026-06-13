import { Inter, Playfair_Display } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import StickyCTA from "@/components/StickyCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Boyd Walston Construction",
  description: "Quality residential and commercial construction in Pike Road, Alabama.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${playfair.variable} font-inter min-h-full flex flex-col bg-white text-[#111111]`}>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <StickyCTA />
      </body>
    </html>
  );
}
