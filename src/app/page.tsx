"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.from("#gsap-heading", {
      x: -500,
      duration: 3,
    })
  })

  return (
    <div>
      <main>
        <div ref={mainRef} className="flex-center min-h-screen">
          <span
            id="gsap-heading"
            className="border border-gray-300 text-4xl font-bold"
          >
            GSAP Starter
          </span>
        </div>
      </main>
    </div>
  )
}
