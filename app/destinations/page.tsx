'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { destinations } from '@/data/destinations'

export default function DestinationsPage() {
  const states = Object.values(destinations)

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />

      {/* SUBTLE BACKGROUND TEXTURE */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <main className="relative pt-28 pb-32">

        {/* HEADER */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="block text-sm tracking-widest uppercase text-foreground/40 mb-6">
              Destinations
            </span>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
              Discover the Seven Worlds
            </h1>

            <p className="mt-8 text-xl text-foreground/60 max-w-2xl">
              Seven distinct landscapes and cultural identities across Northeast India —
              each crafted for slow, meaningful exploration.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="mt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {states.map((state) => (
              <Link href={`/destinations/${state.id}`} key={state.id}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="group cursor-pointer"
                >
                  {/* CARD — UNCHANGED */}
                  <div className="relative overflow-hidden rounded-2xl h-96 mb-5">
                    <Image
                      src={state.image}
                      alt={state.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3
                        className="text-3xl font-semibold text-white mb-3"
                        style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
                      >
                        {state.name}
                      </h3>

                      <div className="flex gap-2 flex-wrap">
                        {state.keywords.slice(0, 4).map((keyword) => (
                          <span
                            key={keyword}
                            className="text-xs px-3 py-1 rounded-full bg-white/90 text-black backdrop-blur shadow-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed max-w-sm">
                    {state.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
