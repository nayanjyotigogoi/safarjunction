'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const SLIDE_DURATION = 2000 // 6s per image

export default function Hero() {
  const images = [
    '/images/mizoram2.jpg',
    '/images/tawang-kaziranga.jpg',
    '/images/bg-2.jpg',
    '/images/wildlife.jpg',

  ]

  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto slide
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
      setProgress(0)
    }, SLIDE_DURATION)

    return () => clearInterval(slideTimer)
  }, [images.length])

  // // Progress bar animation
  // useEffect(() => {
  //   const progressTimer = setInterval(() => {
  //     setProgress((p) => (p >= 100 ? 100 : p + 1))
  //   }, SLIDE_DURATION / 100)

  //   return () => clearInterval(progressTimer)
  // }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 🌄 BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={false}
            animate={{
              x: index === current ? '0%' : index < current ? '-100%' : '100%',
            }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-semibold border border-white/30 backdrop-blur">
            Begin. Connect. Discover.
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Seven Worlds.
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              One Journey.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Explore Northeast India as seven distinct worlds. Immersive experiences,
            untold stories, and landscapes that redefine adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/journeys"
              className="group px-8 py-4 bg-accent rounded-full font-semibold flex items-center gap-2"
            >
              Start Exploring
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white/40 rounded-full font-semibold"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i)
              setProgress(0)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* 📊 PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

    </section>
  )
}
