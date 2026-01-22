'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Heart, Compass, Users, ArrowRight } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Compass,
      title: 'Experience-First',
      description:
        'We believe travel is about stories, not schedules. Every journey is an emotional narrative waiting to unfold.',
    },
    {
      icon: Heart,
      title: 'Cultural Respect',
      description:
        'We honor the traditions, communities, and heritage of Northeast India with deep authenticity and reverence.',
    },
    {
      icon: MapPin,
      title: 'Authentic Discovery',
      description:
        'Beyond tourist trails, we unveil the real Northeast—untouched landscapes and genuine human connections.',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description:
        'Our journeys directly support local communities, ensuring your travels create positive lasting change.',
    },
  ]

  const galleryImages = [
    '/images/wildlife.jpg',
    '/images/tawang-kaziranga.jpg',
     '/images/manipur.jpg',
    '/images/meghalaya.jpg',
    '/images/assam.jpg',
    '/images/northeast.jpg',
    '/images/kaziranga.jpg',
    '/images/arunachal1.jpg',
   

  ]

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto space-y-28">

        {/* ================= HORIZONTAL EDITORIAL SCROLL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold">
            Our World
          </span>

          <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight">
            Northeast India
            <br />
            <span className="text-accent">Through Our Lens</span>
          </h2>

          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 snap-x snap-mandatory scrollbar-hide">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="relative min-w-[240px] sm:min-w-[280px] h-[320px] snap-start rounded-3xl overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt="Safar Junction Destination"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= VALUES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl p-8 bg-accent/5 hover:bg-accent/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-foreground/65 leading-loose">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 rounded-3xl bg-accent/5">
          {[
            { number: '7', label: 'Sister States' },
            { number: '8', label: 'Signature Journeys' },
            { number: '4,500+', label: 'Travelers Transformed' },
            { number: '100%', label: 'Experience-Driven' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg transition-all"
          >
            Read Our Full Story
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}
