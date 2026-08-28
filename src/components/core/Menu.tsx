"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { useRef, useState } from "react"

import { sliderLists } from "@/lib/constants"

const Menu = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useGSAP(() => {
    const menuTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 80%",
        end: "bottom 20%",
      },
    })

    menuTimeline
      .fromTo(
        ".cocktail img",
        { x: -200, opacity: 0 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" },
      )
      .fromTo(
        "#title",
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 0.67, ease: "power1.out" },
        "-=0.5",
      )
      .fromTo(
        ".details",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 0.67, ease: "power1.out" },
        "-=0.5",
      )
  }, [currentIndex])

  useGSAP(() => {
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    })
    leafTimeline.from("#m-left-leaf", { x: -50, y: 50 }, 0)
    leafTimeline.from("#m-right-leaf", { x: 50, y: 50 }, 0)
  }, [])

  const totalCocktails = sliderLists.length
  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails

    setCurrentIndex(newIndex)
  }
  const getCocktailAt = (indexOffset: number) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ]
  }

  const currentCocktail = getCocktailAt(0)
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)
  return (
    <section id="menu" aria-labelledby="menu-heading" className="px-20">
      <img
        src="/images/slider-left-leaf.png"

        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex

          return (
            <button
              key={cocktail.id}
              className={` ${
                isActive
                  ? "border-white text-white"
                  : "border-white/50 text-white/50"
              } `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          )
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
