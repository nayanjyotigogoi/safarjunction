import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Globe, Users, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Experience-First',
      description: 'We believe travel is about creating transformative experiences, not just checking boxes. Every journey with Safar Junction is designed to touch your soul.',
    },
    {
      icon: Globe,
      title: 'Cultural Respect',
      description: 'We approach every destination and community with deep respect. Our guides are trained to honor local traditions and ensure sustainable, responsible tourism.',
    },
    {
      icon: Users,
      title: 'Authentic Discovery',
      description: 'Beyond tourist spots, we unveil the true soul of Northeast India. Small group sizes ensure intimate cultural exchanges and meaningful connections.',
    },
    {
      icon: Lightbulb,
      title: 'Community Impact',
      description: 'A portion of every journey supports local communities through sustainable initiatives. Your travel makes a positive difference.',
    },
  ]

  const stats = [
    { number: '7', label: 'States Explored', description: 'All of Northeast India' },
    { number: '8', label: 'Curated Journeys', description: 'Carefully designed experiences' },
    { number: '4,500+', label: 'Happy Travelers', description: 'From 35+ countries' },
    { number: '100%', label: 'Experience-Driven', description: 'No generic tours' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">Our Story</h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Safar Junction was born from a simple belief: Northeast India is not seven separate states, but seven distinct worlds waiting to be discovered. Our mission is to transform how the world experiences this magical region.
            </p>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
              <p>
                Safar Junction was founded with a singular vision: to reimagine Northeast India tourism. For too long, this magical region was treated as a destination to "tick off," with travelers rushing through multiple states without truly understanding them. We saw an opportunity to change that.
              </p>
              <p>
                Our founder, a native of the Northeast, realized that the region's true magic lies not in grand monuments or commercial attractions, but in the intimate experiences—the conversations with tribal elders, the misty mornings in sacred groves, the warmth of a family meal in a village home, the spiritual awakening in a monastery.
              </p>
              <p>
                Safar Junction doesn't offer tours; we offer transformations. We meticulously craft each journey to reveal the soul of Northeast India—its people, cultures, spirituality, and untamed nature. We believe that when travelers truly understand a place, they become its ambassadors.
              </p>
              <p>
                Today, Safar Junction has welcomed over 4,500 travelers from more than 35 countries. Each journey leaves a lasting impact on travelers while supporting local communities and preserving cultural heritage. We're not just building a travel brand; we're creating a movement to appreciate and protect Northeast India.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="rounded-2xl bg-background p-8 border border-border space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold">{value.title}</h3>
                    </div>
                    <p className="text-foreground/80">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-2xl bg-secondary/20 p-8 border border-border text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">{stat.number}</div>
                  <div className="font-semibold">{stat.label}</div>
                  <p className="text-sm text-foreground/60">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Seven Worlds */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">The Seven Worlds</h2>
            <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto">
              We don't see Northeast India as a single region—we see it as seven distinct worlds, each with its own essence, energy, and story.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                'Assam - The Land of Giants',
                'Meghalaya - The Abode of Clouds',
                'Arunachal Pradesh - Land of the Dawn',
                'Nagaland - Land of Warriors',
                'Manipur - The Jewel of India',
                'Mizoram - Land of Blue Mountains',
                'Tripura - Kingdom of Heritage',
              ].map((state, index) => (
                <div key={index} className="rounded-xl bg-background p-6 border border-border text-center">
                  <p className="font-semibold text-foreground">{state}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center">Our Commitment to Sustainability</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Sustainable tourism is not a buzzword for us—it's the foundation of everything we do. We are committed to:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <span>Supporting local economies by employing local guides, staying in local accommodations, and partnering with community-based tourism initiatives.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <span>Preserving cultural heritage through respectful tourism practices and support for indigenous communities.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <span>Protecting natural environments through responsible travel practices and conservation partnerships.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <span>Educating travelers about the importance of ethical tourism and cultural sensitivity.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">•</span>
                  <span>Maintaining small group sizes to minimize environmental impact and ensure quality experiences.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team & Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center">Our Team & Philosophy</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Every member of the Safar Junction team is passionate about Northeast India. Our guides are not just experts in their regions—they are storytellers, cultural ambassadors, and guardians of their homeland. Many are born and raised in the communities they guide.
              </p>
              <p>
                We believe that authentic travel experiences come from genuine human connections. That's why we invest heavily in guide training, cultural sensitivity, and continuous learning. Your journey is shaped by people who truly love and understand their land.
              </p>
              <p>
                We're building a community of responsible travelers who understand that their journeys have impact. We're not just creating memories; we're creating change—one traveler, one story, one connection at a time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Join the Safar Junction Community</h2>
            <p className="text-lg text-foreground/70">
              Be part of a movement that's transforming how the world experiences Northeast India. Every journey with us is a step toward deeper understanding, cultural appreciation, and meaningful change.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Start Your Journey Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
