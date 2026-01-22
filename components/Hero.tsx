'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/assam.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse delay-1000" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="inline-block">
          <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold border border-white/30 backdrop-blur">
            Begin. Connect. Discover.
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Seven Worlds.
          <br />
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            One Journey.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Explore Northeast India as seven distinct worlds. Immersive experiences,
          untold stories, and landscapes that redefine adventure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          {/* Start Exploring → Journey */}
          <Link
            href="/journeys"
            className="group px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
          >
            Start Exploring
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Learn Our Story → About */}
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-white/40 hover:border-white text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300"
          >
            Learn Our Story
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="pt-12 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '7', label: 'Sister States' },
            { number: '∞', label: 'Experiences' },
            { number: '8', label: 'Journeys' },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-4xl font-bold text-accent">{stat.number}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm text-white/70 mb-2">Scroll to explore</p>
        <svg
          className="w-6 h-6 text-accent mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
