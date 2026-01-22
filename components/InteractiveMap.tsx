'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface State {
  id: string
  name: string
  color: string
  keywords: string[]
  description: string
  cardImage: string
  panelImage: string
}

const states: State[] = [
  {
    id: 'assam',
    name: 'Assam',
    color: '#F59E0B',
    keywords: ['Wildlife', 'Tea Gardens', 'Heritage'],
    description:
      'Land of one-horned rhinos, verdant tea gardens, and spiritual journeys',
    cardImage: '/images/assam.jpg',
    panelImage: '/images/wildlife.jpg',
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    color: '#EC4899',
    keywords: ['Cherrapunjee', 'Clouds', 'Culture'],
    description:
      'The wettest place on Earth, where clouds touch the ground',
    cardImage: '/images/meghalaya.jpg',
    panelImage: '/images/meghalaya1.jpg',
  },
  {
    id: 'arunachal',
    name: 'Arunachal Pradesh',
    color: '#8B5CF6',
    keywords: ['Tawang', 'Mountains', 'Adventure'],
    description:
      'Land of the dawn, nestled in the Eastern Himalayas',
    cardImage: '/images/arunachal.jpg',
    panelImage: '/images/arunachal1.jpg',
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    color: '#06B6D4',
    keywords: ['Tribes', 'Festivals', 'Tradition'],
    description:
      'Land of fierce tribal warriors and vibrant Hornbill festivals',
    cardImage: '/images/nagaland.jpg',
    panelImage: '/images/nagaland1.jpg',
  },
  {
    id: 'manipur',
    name: 'Manipur',
    color: '#10B981',
    keywords: ['Loktak Lake', 'Dance', 'Serenity'],
    description:
      'Land of jewels, where water mirrors the sky',
    cardImage: '/images/manipur.jpg',
    panelImage: '/images/manipur1.jpg',
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    color: '#F97316',
    keywords: ['Lush Hills', 'Tranquility', 'Culture'],
    description:
      'Land of blue mountains and warm-hearted people',
    cardImage: '/images/mizoram.jpg',
    panelImage: '/images/mizoram2.jpg',
  },
  {
    id: 'tripura',
    name: 'Tripura',
    color: '#EF4444',
    keywords: ['Palaces', 'Heritage', 'Legends'],
    description:
      'Land of princely states and timeless beauty',
    cardImage: '/images/tripura.jpg',
    panelImage: '/images/tripura1.jpg',
  },
]

export default function InteractiveMap() {
  const [activeState, setActiveState] = useState<State | null>(null)
  const router = useRouter()

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold">
            Discover the <br />
            <span className="text-accent">Seven Worlds</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore Northeast India — one state at a time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* State Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-5">
            {states.map((state) => (
              <motion.div
                key={state.id}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveState(state)}
                onHoverEnd={() => setActiveState(null)}
                onClick={() => router.push(`/destinations/${state.id}`)}
                className="relative h-40 rounded-2xl overflow-hidden cursor-pointer border"
                style={{ borderColor: state.color }}
              >
                <Image
                  src={state.cardImage}
                  alt={state.name}
                  fill
                  className="object-cover brightness-[0.55]"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 h-full p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-white">
                    {state.name}
                  </h3>

                  <div className="flex flex-wrap gap-1">
                    {state.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[11px] px-2 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Panel */}
          <div className="relative h-[420px] hidden lg:block">
            <AnimatePresence mode="wait">
              {activeState ? (
                <motion.div
                  key={activeState.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border"
                  style={{ borderColor: activeState.color }}
                >
                  <Image
                    src={activeState.panelImage}
                    alt={activeState.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/55" />

                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {activeState.name}
                      </h3>
                      <p className="text-white/80 mb-4">
                        {activeState.description}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        router.push(`/destinations/${activeState.id}`)
                      }
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold"
                      style={{ backgroundColor: activeState.color }}
                    >
                      <MapPin size={16} />
                      Explore State
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full rounded-2xl border flex items-center justify-center text-center p-8"
                >
                  <p className="text-foreground/60">
                    Hover or tap a region to explore
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
