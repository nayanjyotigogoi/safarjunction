'use client'

import { useMemo, useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Zap, Star } from 'lucide-react'
import { journeys } from '@/data/journeys'
import { motion } from 'framer-motion'

type SortOption = 'price-asc' | 'price-desc' | 'popularity'

export default function JourneysPage() {
  const journeyList = Object.values(journeys)

  /* ---------------- FILTER STATE ---------------- */
  const [difficulty, setDifficulty] = useState('all')
  const [region, setRegion] = useState('all')
  const [duration, setDuration] = useState('all')
  const [sort, setSort] = useState<SortOption>('popularity')

  /* ---------------- FILTER + SORT ---------------- */
  const filteredJourneys = useMemo(() => {
    let list = [...journeyList]

    if (difficulty !== 'all') {
      list = list.filter(j => j.difficulty === difficulty)
    }

    if (region !== 'all') {
      list = list.filter(j => j.region.includes(region))
    }

    if (duration !== 'all') {
      list = list.filter(j => j.duration === duration)
    }

    if (sort === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    }

    if (sort === 'popularity') {
      list.sort((a, b) => b.popularity - a.popularity)
    }

    return list
  }, [difficulty, region, duration, sort, journeyList])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-20">

        {/* HEADER */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Curated Journeys
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Compare journeys by duration, difficulty, and experience level.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-b">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">

            <Select label="Difficulty" value={difficulty} onChange={setDifficulty}
              options={['all', 'Easy', 'Moderate', 'Adventure']} />

            <Select label="Duration" value={duration} onChange={setDuration}
              options={['all', ...new Set(journeyList.map(j => j.duration))]} />

            <Select label="Region" value={region} onChange={setRegion}
              options={['all', ...new Set(journeyList.map(j => j.region))]} />

            <Select label="Sort By" value={sort} onChange={setSort}
              options={[
                { label: 'Popularity', value: 'popularity' },
                { label: 'Price: Low to High', value: 'price-asc' },
                { label: 'Price: High to Low', value: 'price-desc' },
              ]} />

          </div>
        </section>

        {/* JOURNEY GRID */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredJourneys.map((journey) => (
              <motion.div key={journey.id} whileHover={{ y: -6 }}>
                <Link href={`/journeys/${journey.id}`} className="block h-full">
                  <div className="group rounded-2xl overflow-hidden border bg-background hover:shadow-2xl transition flex flex-col">

                    {/* IMAGE */}
                    <div className="relative h-64">
                      <Image
                        src={journey.image}
                        alt={journey.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/35" />

                      {/* BADGE */}
                      {journey.bestSeller && (
                        <span className="absolute top-4 left-4 flex items-center gap-1 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full">
                          <Star size={12} />
                          Best Seller
                        </span>
                      )}

                      {/* META */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 text-xs text-white">
                        <span className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full">
                          <Calendar size={14} />
                          {journey.duration}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/40">
                          <Zap size={14} />
                          {journey.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col flex-1">

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {journey.title}
                        </h3>

                        <p className="text-sm text-foreground/60">
                          {journey.region}
                        </p>

                        <p className="text-sm text-foreground/75 line-clamp-3">
                          {journey.description}
                        </p>
                      </div>

                      {/* PUSH FOOTER DOWN */}
                      <div className="flex-1" />

                      {/* PRICE + BUTTONS */}
                      <div className="pt-4 border-t flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs text-foreground/60">
                            Starting from
                          </p>
                          <p className="text-lg font-bold">
                            ₹{journey.price.toLocaleString()}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.location.href = `/journeys/${journey.id}`
                            }}
                            className="px-4 py-2 text-sm rounded-full border font-semibold hover:bg-secondary transition"
                          >
                            Know More
                          </button>

                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.location.href = `/contact`
                            }}
                            className="px-4 py-2 text-sm rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg transition"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </section>

      </main>

    </div>
  )
}

/* ---------------- SELECT COMPONENT ---------------- */

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: any) => void
  options: any[]
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border px-3 py-2 bg-background"
      >
        {options.map((opt) =>
          typeof opt === 'string' ? (
            <option key={opt} value={opt}>{opt}</option>
          ) : (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          )
        )}
      </select>
    </div>
  )
}
