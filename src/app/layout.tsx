import type { Metadata } from "next";
import localFont from "next/font/local";
import {Mona_Sans, DM_Serif_Text} from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";

// Custom Fonts setup
const modernNegra = localFont({
  src: "../../public/fonts/ModernNegraDemo.ttf",
  variable: "--font-modern-negra",
  display: "swap",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Velvet Pour",
  description: "A Cocktail store with a modern twist",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", modernNegra.variable, monaSans.variable, dmSerifText.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
