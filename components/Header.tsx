'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Destinations', href: '/destinations' },
    { label: 'Journeys', href: '/journeys' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          {/* Logo Image */}
          <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center border border-border shadow-sm">
  <Image
    src="logo.png"
    alt="Safar Junction Logo"
    width={26}
    height={26}
    className="object-contain"
    priority
  />
</div>


          {/* Brand Text (optional but premium) */}
          <div className="hidden sm:block leading-tight">
            <h1 className="text-lg font-bold text-foreground">
              Safar Junction
            </h1>
            <p className="text-xs text-muted-foreground">
              Your Path. Our Passion.
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:shadow-lg transition"
          >
            Plan Journey
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-4 py-5 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-foreground/80 hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold"
            >
              Plan Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
