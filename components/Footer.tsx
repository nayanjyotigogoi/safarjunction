'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 70990 50077',
      href: 'tel:+917099050077',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'connect@safarjunction.com',
      href: 'mailto:connect@safarjunction.com',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Northeast India',
      href: '#',
    },
  ]

  const quickLinks = [
    { label: 'Destinations', href: '/destinations' },
    { label: 'Journeys', href: '/journeys' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQs', href: '/faq' },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/10 border-t border-border">

      {/* ================= CONTACT + NEWSLETTER ================= */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Begin?
              <br />
              <span className="text-accent">Let’s Connect</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Questions, custom journeys, or just travel inspiration — we’re here.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <a
                  key={i}
                  href={method.href}
                  className="p-6 rounded-2xl border border-accent/20 bg-card/50 hover:border-accent transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{method.label}</p>
                      <p className="font-semibold">{method.value}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Newsletter */}
          <div className="p-8 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold">Get Travel Inspiration</h3>
              <p className="text-foreground/70">
                Stories, tips & exclusive Northeast India journeys.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setLoading(true)
                  try {
                    const res = await fetch('/api/newsletter', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: newsletterEmail }),
                    })
                    const data = await res.json()
                    if (!data.success) throw new Error()
                    setSuccess(true)
                    setNewsletterEmail('')
                    setTimeout(() => setSuccess(false), 4000)
                  } catch {
                    alert('Subscription failed. Try again.')
                  } finally {
                    setLoading(false)
                  }
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full border border-border bg-background"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? 'Subscribing…' : 'Subscribe'}
                  <ArrowRight size={18} />
                </button>
              </form>

              {success && (
                <p className="text-sm text-accent mt-2">
                  Thanks for subscribing 🌿
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-2xl border border-border bg-background">
                <Image
                  src="/logo.png"
                  alt="Safar Junction Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Safar Junction</h3>
                <p className="text-xs text-foreground/60">
                  The Junction of Journey
                </p>
              </div>
            </div>

            <p className="text-sm text-foreground/60">
              Discover Northeast India through meaningful journeys.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s, i) => {
                const Icon = s.icon
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div>
            <h4 className="font-bold mb-3">Seven States</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Assam</li>
              <li>Meghalaya</li>
              <li>Arunachal Pradesh</li>
              <li>Nagaland</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">&nbsp;</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Manipur</li>
              <li>Mizoram</li>
              <li>Tripura</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© 2024 Safar Junction. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-accent">Terms</a>
            <a href="/privacy-policy" className="hover:text-accent">Privacy</a>
            <a href="/disclaimer" className="hover:text-accent">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
