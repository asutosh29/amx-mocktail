"use client"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import About from "@/components/core/About"
import Art from "@/components/core/Art"
import CockTails from "@/components/core/CockTails"
import Hero from "@/components/core/Hero"
import Menu from "@/components/core/Menu"
import Navbar from "@/components/core/Navbar"
import Contact from "@/components/core/Contact"

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
      <Contact />
    </main>
  )
}
