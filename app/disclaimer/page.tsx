'use client'

import Header from '@/components/Header'


export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-28 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          <header>
            <h1 className="text-4xl font-semibold mb-4">Disclaimer</h1>
            <p className="text-foreground/60">
              The Junction of Journey (A Travel Hub)
            </p>
          </header>

          <section className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              The Junction of Journey acts as a travel facilitator and
              coordinator. We do not directly operate hotels, transport
              services, or third-party activities.
            </p>

            <p>
              We are not responsible for delays, injuries, losses, or damages
              caused by:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Natural disasters or weather conditions</li>
              <li>Political situations or government restrictions</li>
              <li>Third-party service failures</li>
            </ul>

            <p>
              Tour itineraries, pricing, and inclusions are subject to change
              without prior notice due to operational or external factors.
            </p>

            <p>
              Participation in any tour is at the customer’s own discretion
              and risk. Customers are advised to assess personal health,
              fitness, and safety before booking.
            </p>
          </section>

        </div>
      </main>


    </div>
  )
}
