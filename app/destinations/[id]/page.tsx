'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/Header'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Star } from 'lucide-react'
import { destinations } from '@/data/destinations'

export default function DestinationDetailPage() {
  const { id } = useParams<{ id: string }>()
  const destination = destinations[id]

  if (!destination) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative h-[520px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white max-w-3xl">
            {destination.name}
          </h1>
          <p className="mt-3 text-white/80 max-w-xl">
            {destination.description}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="relative pt-16 pb-32">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* QUICK FACTS */}
          <div className="grid md:grid-cols-3 gap-6">
            <Fact label="Best Time" value={destination.bestTime} icon={<Calendar />} />
            {destination.duration && (
              <Fact label="Ideal Duration" value={destination.duration} icon={<MapPin />} />
            )}
            <Fact label="Travel Style" value={destination.keywords[0]} icon={<Star />} />
          </div>

          {/* OVERVIEW */}
          <Card>
            <h2 className="section-title">Overview</h2>
            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              {destination.fullDescription}
            </p>
            {destination.longDescription && (
              <p className="mt-4 text-foreground/60 max-w-3xl">
                {destination.longDescription}
              </p>
            )}
          </Card>

          {/* GEOGRAPHY – EDITORIAL SPLIT */}
          {destination.geographyAndNature && (
            <section className="grid md:grid-cols-2 gap-16 items-start">
              <h2 className="section-title">Geography & Natural Character</h2>
              <ul className="space-y-4 text-foreground/75">
                {destination.geographyAndNature.map((item, i) => (
                  <li key={i} className="border-l-2 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* EXPERIENCE STRIPS */}
          {destination.wildlifeExperiences && (
            <section className="space-y-10">
              <h2 className="section-title">Wildlife & Nature Experiences</h2>
              <div className="space-y-6">
                {destination.wildlifeExperiences.map((exp, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-muted/40"
                  >
                    <div className="md:w-1/3 font-semibold text-lg">
                      {exp.name}
                    </div>
                    <div className="md:w-2/3 text-foreground/70">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SPIRITUAL & HERITAGE – MINIMAL BLOCKS */}
          {destination.spiritualAndHeritageSites && (
            <section className="space-y-12">
              <h2 className="section-title">Spiritual & Heritage Significance</h2>
              <div className="grid md:grid-cols-2 gap-10">
                {destination.spiritualAndHeritageSites.map((site, i) => (
                  <div
                    key={i}
                    className="p-6 border border-border rounded-2xl"
                  >
                    <h3 className="font-medium mb-2">{site.name}</h3>
                    <p className="text-sm text-foreground/70">
                      {site.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TEA & CRAFT – INLINE LUXURY LIST */}
          {destination.teaAndCraftExperiences && (
            <section className="space-y-6">
              <h2 className="section-title">Tea, Craft & Slow Luxury</h2>
              <div className="flex flex-wrap gap-4">
                {destination.teaAndCraftExperiences.map((item, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 rounded-full bg-secondary/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* WHY IT MATTERS – FULL WIDTH */}
          {destination.whyItMatters && (
            <section className="rounded-3xl bg-accent/10 p-14 text-center">
              <p className="text-xl font-medium max-w-4xl mx-auto">
                {destination.whyItMatters}
              </p>
            </section>
          )}

          {/* HIGHLIGHTS – PREMIUM CHIPS */}
          <section className="space-y-6">
            <h2 className="section-title">Highlights</h2>
            <div className="flex flex-wrap gap-3">
              {destination.highlights.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-12">
            <Link
              href="/contact"
              className="inline-flex px-16 py-4 rounded-full bg-accent text-accent-foreground font-medium shadow-lg"
            >
              Plan This Journey
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}

/* ---------- COMPONENTS ---------- */

function Fact({ icon, label, value }: any) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur border p-6 flex gap-4">
      <div className="text-accent">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/90 backdrop-blur border p-10">
      {children}
    </div>
  )
}
