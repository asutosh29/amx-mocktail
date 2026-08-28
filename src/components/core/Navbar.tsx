"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { useRef } from "react"

import { navLinks } from "@/lib/constants"

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        start: "top -50",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    })

    navTween.fromTo(
      navRef.current,
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        ease: "power1.out",
        duration: 0.4,
      },
    )
  })

  return (
    <nav ref={navRef}>
      <div>
        <a href="#home" className="flex items-center gap-2">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" />
          {/* Logo Text */}
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target={link.target}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
