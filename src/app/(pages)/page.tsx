"use client"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Hero from "@/components/core/Hero"
import Navbar from "@/components/core/Navbar"
import CockTails from "@/components/core/CockTails"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
      <div className="h-dvh"></div>
    </main>
  )
}
