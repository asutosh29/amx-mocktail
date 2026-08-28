"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { useRef, useState } from "react"

const ASSETS = [
  "/videos/output.mp4",
  "/images/hero-left-leaf.png",
  "/images/hero-right-leaf.png",
  "/images/noise.png",
  "/images/logo.png",
]

const preloadAsset = (src: string) => {
  return new Promise<void>((resolve) => {
    if (src.endsWith(".mp4")) {
      const video = document.createElement("video")
      video.preload = "auto"
      video.muted = true
      const onReady = () => {
        video.removeEventListener("canplaythrough", onReady)
        video.removeEventListener("loadedmetadata", onReady)
        resolve()
      }
      video.addEventListener("canplaythrough", onReady, { once: true })
      video.addEventListener("loadedmetadata", onReady, { once: true })
      video.onerror = () => resolve()
      video.src = src
      return
    }
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

const Preloader = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useGSAP(
    () => {
      // Keep the page from scrolling while the preloader is visible.
      document.body.style.overflow = "hidden"

      // 1. Count up 0 -> 100 while the real assets are fetched in the background.
      const counterProxy = { value: 0 }
      const counterTween = gsap.to(counterProxy, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          setCount(Math.round(counterProxy.value))
        },
      })

      // 2. Fade the brand wordmarks in once the counter starts.
      const wordmarks = rootRef.current!.querySelectorAll(
        "[data-preloader-word]",
      )
      gsap.from(wordmarks, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
      })

      // 3. Reveal the page: slide the two panels away and lift the content.
      const overlay = rootRef.current!.querySelector("[data-preloader-panels]")
      const content = rootRef.current!.querySelector("[data-preloader-content]")

      const exitTween = gsap.timeline({
        delay: 0.3,
        onComplete: () => {
          document.body.style.overflow = ""
          rootRef.current?.remove()
        },
      })
      exitTween
        .to(content, { opacity: 0, y: -40, duration: 0.4, ease: "power2.in" })
        .to(overlay, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        })

      // Release the counter the moment every asset is ready.
      Promise.all(ASSETS.map(preloadAsset)).then(() => {
        if (counterTween.progress() >= 1) {
          exitTween.play()
          return
        }
        counterTween.eventCallback("onComplete", () => exitTween.play())
      })

      return () => {
        document.body.style.overflow = ""
      }
    },
    { scope: rootRef },
  )

  return (
    <div
      ref={rootRef}
      data-preloader
      aria-hidden="true"
      className="preloader fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Curtain panels that split open on exit */}
      <div data-preloader-panels className="absolute inset-0 flex">
        <div className="h-full w-1/2 bg-black" />
        <div className="h-full w-1/2 bg-black" />
      </div>

      {/* Centered brand content */}
      <div
        data-preloader-content
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <p
          data-preloader-word
          className="font-modern-negra text-yellow text-5xl md:text-7xl"
        >
          Velvet Pour
        </p>
        <p
          data-preloader-word
          className="preloader-sub font-serif text-xl text-white/60 uppercase"
        >
          Shaking things up
        </p>
        <span ref={counterRef} className="font-mono text-sm text-white/40">
          {count}%
        </span>
      </div>
    </div>
  )
}

export default Preloader
