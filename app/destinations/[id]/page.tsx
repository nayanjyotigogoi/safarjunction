'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, Heart } from 'lucide-react'
import { destinations } from '@/data/destinations'

export default function DestinationDetailPage() {
  const params = useParams()
  const id = params?.id as string

  const destination = destinations[id]

  if (!destination) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold">Destination not found</h1>
          <Link
            href="/destinations"
            className="text-accent underline mt-4 block"
          >
            Back to Destinations
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        {/* HERO */}
        <section className="relative h-[420px] w-full">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-8 left-8 max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-2">
              {destination.name}
            </h1>
            <p className="text-white/80 max-w-xl">
              {destination.description}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20">

            {/* OVERVIEW */}
            <Section title="Destination Overview">
              <p className="text-lg text-foreground/80">
                {destination.fullDescription}
              </p>
              {destination.longDescription && (
                <p className="text-foreground/60 mt-4">
                  {destination.longDescription}
                </p>
              )}
            </Section>

            {/* INFO */}
            <Section title="Travel Info">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoItem
                  icon={<Calendar size={20} style={{ color: destination.color }} />}
                  label="Best Time to Visit"
                  value={destination.bestTime}
                />
                {destination.duration && (
                  <InfoItem
                    icon={<MapPin size={20} style={{ color: destination.color }} />}
                    label="Recommended Duration"
                    value={destination.duration}
                  />
                )}
              </div>
            </Section>

            {/* HIGHLIGHTS */}
            <Section title="Highlights">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 rounded-xl bg-secondary/10"
                  >
                    <Heart size={20} style={{ color: destination.color }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* CTA */}
            <div className="text-center pt-10 border-t">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-accent text-accent-foreground rounded-full font-semibold"
              >
                Plan This Destination
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* ---------- UI HELPERS ---------- */

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

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex gap-3 items-center p-4 rounded-xl bg-secondary/10">
      {icon}
      <div>
        <p className="text-sm text-foreground/60">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  )
}
