"use client"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Hero from "@/components/core/Hero"
import Navbar from "@/components/core/Navbar"
import CockTails from "@/components/core/CockTails"
import About from "@/components/core/About"
import Art from "@/components/core/Art"
import Menu from "@/components/core/Menu"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}
