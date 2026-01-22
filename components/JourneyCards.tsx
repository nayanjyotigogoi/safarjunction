'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { journeys } from '../data/journeys'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { useCallback } from 'react'

export default function JourneyCards() {
  const journeyList = Object.values(journeys)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="journeys" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Header + Arrows */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold">
              Curated <span className="text-accent">Journeys</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Handcrafted routes designed for depth, comfort, and discovery.
            </p>
          </div>

          {/* Arrow Controls */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={scrollNext}
              className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
{journeyList.map((journey) => (
  <motion.div
    key={journey.id}
    whileHover={{ y: -6 }}
    className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px]"
  >
    <Link
      href={`/journeys/${journey.id}`}
      className="block h-full"
    >
      <div className="group h-full rounded-2xl overflow-hidden border bg-background hover:shadow-2xl transition cursor-pointer">

        {/* Image */}
        <div className="relative h-64">
          <Image
            src={journey.image}
            alt={journey.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Floating Meta */}
          <div className="absolute top-4 left-4 right-4 flex justify-between text-xs text-white">
            <span className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full">
              <Calendar size={14} />
              {journey.duration}
            </span>
            <span
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/40"
              style={{ color: journey.color }}
            >
              <Zap size={14} />
              {journey.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
              {journey.title}
            </h3>
            <p className="text-sm text-foreground/60">
              {journey.region}
            </p>
          </div>

          <p className="text-sm text-foreground/75 line-clamp-3">
            {journey.description}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-xs text-foreground/60">
                Starting from
              </p>
              <p className="text-lg font-bold text-foreground">
                {journey.price}
              </p>
            </div>

            {/* Book Now button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.location.href = `/journeys/${journey.id}`
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:shadow-lg transition"
            >
              Book Now
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </Link>
  </motion.div>
))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-16 border-t text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Need help choosing the right journey?
          </h3>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg transition"
          >
            Talk to a Travel Expert
          </Link>
        </div>

      </div>
    </section>
  )
}
