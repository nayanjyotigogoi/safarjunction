'use client'

import React from "react"

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    journeyDuration: '',
    travelers: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        honeypot: "",
      }),
    })

    const data = await res.json()

    if (!data.success) {
      throw new Error(data.error || "Submission failed")
    }

    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      journeyDuration: '',
      travelers: '',
      message: '',
    })

    setTimeout(() => setSubmitted(false), 5000)
  } catch (err) {
    alert("Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}


  const destinations = [
    'Assam',
    'Meghalaya',
    'Arunachal Pradesh',
    'Nagaland',
    'Manipur',
    'Mizoram',
    'Tripura',
    'Multiple States',
    'I need help choosing',
  ]

  const durations = [
    '2-3 days',
    '4-6 days',
    '7-10 days',
    '10+ days',
    'Flexible',
  ]

  const travelersCount = [
    '1 person (Solo)',
    '2 people (Couple)',
    '3-4 people',
    '5-8 people (Group)',
    '8+ people (Large Group)',
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">Let's Plan Your Journey</h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Have questions or ready to book? Our travel experts are here to help you craft the perfect Northeast India experience.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-foreground/70">+91 70990 50077</p>
                    <p className="text-foreground/70">+91 91018 10169</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-foreground/70">connect@safarjunction.com</p>
                    {/* <p className="text-foreground/70">support@safarjunction.com</p> */}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Location</p>
                    <p className="text-foreground/70">H/No-30, Bikrampur Road, Japorigog</p>
                    <p className="text-foreground/70">Assam, India 781005</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-foreground/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-lg mb-4">Response Time</h3>
                <p className="text-foreground/70">
                  We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-secondary/20 p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Plan Your Journey</h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle size={32} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-foreground/70">
                      Your inquiry has been received. Our travel experts will contact you within 24 hours to help plan your perfect Northeast India experience.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label htmlFor="destination" className="block text-sm font-semibold mb-2">
                        Which states interest you? *
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select a destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Journey Duration */}
                    <div>
                      <label htmlFor="journeyDuration" className="block text-sm font-semibold mb-2">
                        How long can you travel? *
                      </label>
                      <select
                        id="journeyDuration"
                        name="journeyDuration"
                        value={formData.journeyDuration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select duration</option>
                        {durations.map((duration) => (
                          <option key={duration} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Number of Travelers */}
                    <div>
                      <label htmlFor="travelers" className="block text-sm font-semibold mb-2">
                        How many travelers? *
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select number</option>
                        {travelersCount.map((count) => (
                          <option key={count} value={count}>
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Tell us about your ideal journey
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                        placeholder="Share your interests, preferences, and any special requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-accent-foreground rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-accent-foreground border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-sm text-foreground/60 text-center">
                      We respect your privacy. Your information is secure and will only be used to help plan your journey.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'What is the best time to visit Northeast India?',
                  a: 'Generally October to April offers pleasant weather. However, each state has its own ideal season.',
                },
                {
                  q: 'Do I need special permits for Northeast India?',
                  a: 'Some regions require permits. Our team handles all documentation.',
                },
                {
                  q: 'Can you customize journeys?',
                  a: 'Absolutely! All our journeys can be tailored to your preferences.',
                },
                {
                  q: 'What about travel insurance?',
                  a: 'Travel insurance is included in our packages.',
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-xl bg-background p-6 border border-border space-y-3">
                  <h3 className="font-semibold text-accent">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
