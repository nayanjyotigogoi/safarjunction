'use client'

import Header from '@/components/Header'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-28 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* HEADER */}
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
            <p className="text-foreground/60">
              Everything you need to know before planning your journey with
              The Junction of Journey.
            </p>
          </header>

          {/* GENERAL */}
          <FAQSection title="General Questions">
            <FAQ
              q="What is The Junction of Journey?"
              a="The Junction of Journey is a travel hub specialising in curated journeys across Northeast India. We focus on meaningful, slow, and experience-led travel rather than mass tourism."
            />
            <FAQ
              q="Do you operate group tours or private journeys?"
              a="We primarily design private and customised journeys. Select group departures may be available during festivals or peak seasons."
            />
            <FAQ
              q="Which regions do you cover?"
              a="We operate across all seven Northeast Indian states — Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, and Tripura."
            />
          </FAQSection>

          {/* BOOKINGS */}
          <FAQSection title="Booking & Payments">
            <FAQ
              q="How do I confirm a booking?"
              a="A booking is confirmed once 50% advance payment is received. The remaining balance is payable as per the agreed schedule."
            />
            <FAQ
              q="What payment methods are accepted?"
              a="We accept online payments, bank transfers, and other mutually agreed payment methods."
            />
            <FAQ
              q="Are prices fixed after booking?"
              a="Prices are locked after booking confirmation unless changes occur due to government taxes, fuel surcharge, or significant operational factors."
            />
          </FAQSection>

          {/* CANCELLATION */}
          <FAQSection title="Cancellation & Refunds">
            <FAQ
              q="What is your cancellation policy?"
              a="Cancellations made 30+ days before travel are eligible for 80% refund, 15–29 days for 50% refund, and less than 15 days are non-refundable."
            />
            <FAQ
              q="How long do refunds take to process?"
              a="Approved refunds are processed within 7–10 business days to the original payment method."
            />
            <FAQ
              q="What happens if you cancel the tour?"
              a="In rare cases of company cancellation, customers will receive a full refund or be offered an alternative tour of equal value."
            />
          </FAQSection>

          {/* TRAVEL & PERMITS */}
          <FAQSection title="Travel, Permits & Documentation">
            <FAQ
              q="Is an Inner Line Permit (ILP) required?"
              a="Yes. Certain states such as Arunachal Pradesh, Nagaland, and Mizoram require an Inner Line Permit. We guide customers through the process, but obtaining valid permits is the traveler’s responsibility."
            />
            <FAQ
              q="What documents should I carry?"
              a="Valid government-issued photo ID is mandatory. International travelers must carry passport, visa, and relevant permits."
            />
          </FAQSection>

          {/* SAFETY */}
          <FAQSection title="Safety, Health & Insurance">
            <FAQ
              q="Is travel in Northeast India safe?"
              a="Yes, when planned responsibly. We work with trusted local partners and design routes prioritising safety and comfort."
            />
            <FAQ
              q="Do I need travel insurance?"
              a="Travel insurance is strongly recommended and should cover medical emergencies, cancellations, and loss of belongings."
            />
            <FAQ
              q="Are the journeys physically demanding?"
              a="Some journeys involve long drives, walking, or remote locations. We clearly communicate difficulty levels before booking."
            />
          </FAQSection>

          {/* ACCOMMODATION */}
          <FAQSection title="Accommodation & Experience">
            <FAQ
              q="What type of accommodation do you offer?"
              a="We curate boutique hotels, heritage stays, premium lodges, and locally integrated properties prioritising experience over luxury labels."
            />
            <FAQ
              q="Can itineraries be customised?"
              a="Yes. Every journey can be customised based on interests, pace, comfort preferences, and travel style."
            />
          </FAQSection>

          {/* LIABILITY */}
          <FAQSection title="Liability & Responsibility">
            <FAQ
              q="Are you responsible for third-party services?"
              a="We act as coordinators and facilitators. Hotels, transport providers, and activity operators remain responsible for their respective services."
            />
            <FAQ
              q="What happens in case of unforeseen events?"
              a="Weather, political situations, or natural disruptions may require itinerary changes. Such decisions are made in the best interest of safety."
            />
          </FAQSection>

        </div>
      </main>

    </div>
  )
}

/* ---------- COMPONENTS ---------- */

function FAQSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">{q}</h3>
      <p className="text-foreground/70 leading-relaxed">{a}</p>
    </div>
  )
}
