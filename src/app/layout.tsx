import type { Metadata } from "next"

import { DM_Serif_Text, Mona_Sans } from "next/font/google"
import localFont from "next/font/local"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

// Custom Fonts setup
const modernNegra = localFont({
  src: "../../public/fonts/ModernNegraDemo.ttf",
  variable: "--font-modern-negra",
  display: "swap",
})

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
})

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Velvet Pour",
  description: "A Cocktail store with a modern twist",
  icons: {
    icon: "/images/logo.png",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        modernNegra.variable,
        monaSans.variable,
        dmSerifText.variable,
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
