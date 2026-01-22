'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function Footer() {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 70990 50077',
      href: 'tel:+91',
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
    { label: 'Destinations', href: '#destinations' },
    { label: 'Journeys', href: '#journeys' },
    { label: 'About Us', href: '#about' },
    { label: 'FAQs', href: '#' },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-background to-secondary/10 border-t border-border">
      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Contact Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground">
              Ready to Begin?
              <br />
              <span className="text-accent">Let's Connect</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether you have questions, custom journey requests, or just want to chat about Northeast India—we're here to help craft your perfect adventure.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border-2 border-accent/20 bg-card/50 hover:border-accent hover:bg-accent/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-all">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">{method.label}</p>
                      <p className="font-semibold text-foreground">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10"
          >
            <div className="max-w-2xl mx-auto space-y-4 text-center">
              <h3 className="text-2xl font-bold text-foreground">Get Travel Inspiration</h3>
              <p className="text-foreground/70">
                Subscribe to receive stories, travel tips, and exclusive offers from Northeast India
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-background/50 border border-border focus:border-accent focus:outline-none text-foreground placeholder:text-foreground/40 transition-all"
                />
                <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-xl flex items-center gap-2">
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <span className="text-background font-bold text-sm">SJ</span>
                </div>
                <h3 className="font-bold text-foreground">Safar Junction</h3>
              </div>
              <p className="text-sm text-foreground/60">Your path to discovering the true Northeast India. Begin. Connect. Discover.</p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 flex items-center justify-center"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Explore</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* States */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">The Seven States</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>Assam</li>
                <li>Meghalaya</li>
                <li>Arunachal Pradesh</li>
                <li>Nagaland</li>
              </ul>
            </div>

            {/* More States */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">&nbsp;</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>Manipur</li>
                <li>Mizoram</li>
                <li>Tripura</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60 text-center md:text-left">
              © 2024 Safar Junction. All rights reserved. Crafted for explorers, by explorers.
            </p>
            <div className="flex gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
