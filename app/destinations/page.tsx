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
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Discover the Seven Worlds
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Each state is a distinct world with its own soul, landscape, and stories. Explore them all.
            </p>
          </div>
        </section>

        {/* States Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.map((state) => (
              <Link href={`/destinations/${state.id}`} key={state.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl h-96 mb-4">
                    <Image
                      src={state.image}
                      alt={state.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {state.name}
                      </h3>

                      <div className="flex gap-2 flex-wrap">
                        {state.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 group-hover:text-foreground transition-colors">
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
