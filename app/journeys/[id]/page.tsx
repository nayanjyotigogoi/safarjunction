'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  Zap,
  CheckCircle,
} from 'lucide-react'
import { journeys } from '@/data/journeys'
import { useState } from 'react'
import { motion } from 'framer-motion'


const difficultyColors = {
  Easy: '#10B981',
  Moderate: '#F59E0B',
  Adventure: '#EF4444',
}

type HotelCategory = 'standard' | 'deluxe' | 'luxury'
type MealPlan = 'cpai' | 'mpai' | 'mapai'

export default function JourneyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const journey = journeys[id]

  const [hotel, setHotel] = useState<HotelCategory>('standard')
  const [meal, setMeal] = useState<MealPlan>('cpai')

  if (!journey) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold">Journey not found</h1>
          <Link href="/journeys" className="text-accent underline">
            Back to Journeys
          </Link>
        </div>
 
      </div>
    )
  }

  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] min-h-[520px]">
        <Image
          src={journey.image}
          alt={journey.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="absolute bottom-10 left-0 right-0 px-6">
          <div className="max-w-6xl mx-auto text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              {journey.title}
            </h1>

            <p className="text-lg text-white/80 max-w-2xl">
              {journey.description}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <HeroStat icon={<Clock />} label={journey.duration} />
              <HeroStat icon={<MapPin />} label={journey.region} />
              <HeroStat
                icon={<Zap />}
                label={journey.difficulty}
                color={difficultyColors[journey.difficulty]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-14">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2 space-y-20">

            {/* OVERVIEW */}
            <Section title="Journey Overview">
              <p className="text-lg text-foreground/80">
                {journey.fullDescription}
              </p>
            </Section>

            {/* ROUTE */}

{'route' in journey && (
  <Section title="Journey Route">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="flex flex-wrap items-center gap-6"
    >
      {journey.route.map((stop, i) => (
        <motion.div
          key={`${stop}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-4"
        >
          {/* NODE */}
          <div className="flex items-center gap-3">
            <span className="relative flex items-center justify-center h-9 w-9 rounded-full bg-accent/10 border border-accent">
              <MapPin size={16} className="text-accent" />
            </span>

            <span className="px-4 py-2 rounded-full bg-secondary/20 text-sm font-medium">
              {stop}
            </span>
          </div>

          {/* CONNECTOR */}
          {i !== journey.route.length - 1 && (
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="hidden sm:block h-[1px] w-10 bg-foreground/30 origin-left"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  </Section>
)}


            {/* ITINERARY */}
            {journey.itinerary && (
              <Section title="Day-wise Itinerary">
                <div className="space-y-6">
                  {journey.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="relative pl-10 border-l border-foreground/10"
                    >
                      <span className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-accent" />
                      <h4 className="font-semibold text-lg">
                        Day {day.day}: {day.title}
                      </h4>
                      <p className="text-foreground/70 mt-2">
                        {day.description}
                      </p>
                      <p className="text-sm text-foreground/50 mt-1">
                        Meals: {day.meals.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* HIGHLIGHTS */}
            <Section title="Journey Highlights">
              <div className="grid sm:grid-cols-2 gap-4">
                {journey.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/10"
                  >
                    <CheckCircle className="text-accent" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Section>  

            {/* ================= PRICING ================= */}
            {'pricingTable' in journey && (
              <Section title="Package Pricing">
                <div className="space-y-10">

                  {/* HOTEL CATEGORY */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Choose Hotel Category</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {(['standard', 'deluxe', 'luxury'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setHotel(cat)}
                          className={`rounded-xl border p-5 text-left transition ${
                            hotel === cat
                              ? 'border-accent bg-accent/10'
                              : 'hover:border-foreground/20'
                          }`}
                        >
                          <p className="text-sm text-foreground/60 uppercase">
                            {cat}
                          </p>
                          <p className="text-base font-semibold mt-1">
                            {cat === 'standard' && 'Comfortable & Clean'}
                            {cat === 'deluxe' && 'Enhanced Comfort'}
                            {cat === 'luxury' && 'Premium Handpicked Stays'}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* MEAL PLAN */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Select Meal Plan</h4>
                    <div className="flex flex-wrap gap-3">
                      {(['cpai', 'mpai', 'mapai'] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setMeal(m)}
                          className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                            meal === m
                              ? 'bg-accent text-accent-foreground border-accent'
                              : 'hover:bg-secondary'
                          }`}
                        >
                          {m.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* PRICING GRID */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">
                      Price Per Person (INR)
                    </h4>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {journey.pricingTable.map((row) => {
                        const price = row[hotel]?.[meal]

                        if (!price) return null

                        return (
                          <div
                            key={row.pax}
                            className="rounded-xl border p-5 hover:shadow-md transition"
                          >
                            <p className="text-sm text-foreground/60">
                              Group of {row.pax}
                            </p>
                            <p className="text-2xl font-bold text-accent mt-1">
                              ₹{price.toLocaleString('en-IN')}
                            </p>
                            <p className="text-xs text-foreground/50 mt-1">
                              Per person
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* NOTE */}
                  <p className="text-sm text-foreground/50">
                    Prices are indicative and may vary based on travel dates, availability,
                    and customization.
                  </p>

                </div>
              </Section>
            )}


          </div>

          {/* ================= RIGHT CTA ================= */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border bg-background p-6 space-y-6 shadow-lg">
              <div>
                <p className="text-sm text-foreground/60">Starting from</p>
                <p className="text-3xl font-bold text-accent">
                  ₹{journey.price.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-foreground/50">
                  Per person · Base package
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg transition"
                >
                  Enquire Now
                </Link>

                <a
                  href="https://wa.me/9101810169"
                  target="_blank"
                  className="block text-center px-6 py-4 rounded-full border font-semibold hover:bg-secondary transition"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="pt-4 border-t text-sm text-foreground/60">
                ✔ Customizable itinerary  
                <br />✔ Trusted local experts  
                <br />✔ Transparent pricing
              </div>
            </div>
          </aside>

        </div>
      </main>

    </div>
  )
}

/* ================= UI HELPERS ================= */

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      {children}
    </div>
  )
}

function HeroStat({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color?: string
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span style={{ color }}>{icon}</span>
      <span>{label}</span>
    </div>
  )
}

function Selector({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (v: any) => void
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border px-4 py-2 bg-background"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}
