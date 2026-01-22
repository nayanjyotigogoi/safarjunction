'use client'

import Header from '@/components/Header'


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-28 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* TITLE */}
          <section>
            <h1 className="text-4xl font-semibold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-foreground/60">
              The Junction of Journey (A Travel Hub)
            </p>
          </section>

          {/* TERMS */}
          <Section title="Booking & Payment">
            <ul className="list-disc pl-6 space-y-2">
              <li>Bookings are confirmed only after receipt of 50% advance payment.</li>
              <li>Payments can be made via online platforms, bank transfer, or other accepted modes.</li>
              <li>All prices are quoted in INR unless stated otherwise.</li>
              <li>Prices may change due to fuel surcharge, taxes, or operational costs.</li>
            </ul>
          </Section>

          <Section title="Cancellation & Refund Policy">
            <h4 className="font-medium mb-2">Customer Cancellation</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>30+ days before tour: 80% refund</li>
              <li>15–29 days before tour: 50% refund</li>
              <li>Less than 15 days: No refund</li>
            </ul>

            <h4 className="font-medium mt-4 mb-2">Company Cancellation</h4>
            <p>
              Customers will receive either a full refund or an alternative tour of equal value.
            </p>
          </Section>

          <Section title="Refund Processing">
            <p>Approved refunds are processed within 7–10 business days to the original payment method.</p>
          </Section>

          <Section title="Itinerary Changes">
            <p>
              We reserve the right to modify itineraries due to weather, political situations,
              operational challenges, or safety concerns.
            </p>
          </Section>

          <Section title="Responsibilities">
            <h4 className="font-medium mb-2">Our Responsibility</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Curated travel experiences with trusted local partners</li>
              <li>Focus on safety, comfort, and quality</li>
            </ul>

            <h4 className="font-medium mt-4 mb-2">Customer Responsibility</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Carry valid government-issued ID</li>
              <li>Obtain necessary permits (e.g. ILP)</li>
              <li>Follow local laws and guide instructions</li>
            </ul>
          </Section>

          <Section title="Travel Insurance">
            <p>
              Customers are strongly advised to obtain travel insurance covering medical emergencies,
              cancellations, and loss of belongings.
            </p>
          </Section>

          <Section title="Health & Fitness">
            <p>
              Customers must assess their physical and mental fitness before booking.
              Some tours involve long journeys, trekking, or remote locations.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              The Junction of Journey is not liable for losses, delays, injuries, or damages caused by
              circumstances beyond our control including natural disasters or political disruptions.
            </p>
          </Section>

          <Section title="Governing Law & Jurisdiction">
            <p>
              These terms are governed by Indian law. Jurisdiction lies with courts in Guwahati, Assam.
            </p>
          </Section>

          <Section title="Contact for Queries">
            <p>
              📞 +91-9101810169 / 9864090668 / 8638722715<br />
              📧 journeyjunction6482@gmail.com
            </p>
          </Section>

          {/* PRIVACY */}
          <Section title="Privacy Policy">
            <p>
              Personal data collected during booking is used only for travel arrangements,
              legal compliance, and service delivery. Data is never sold or rented.
            </p>
            <p className="mt-2">
              Information may be shared only with hotels, transport providers,
              and authorities when legally required.
            </p>
          </Section>

          {/* DISCLAIMER */}
          <Section title="Disclaimer">
            <p>
              The Junction of Journey acts as a travel facilitator and is not responsible
              for third-party service failures, delays, injuries, or losses.
            </p>
            <p className="mt-2">
              Participation in tours is at the customer’s own risk.
            </p>
          </Section>

        </div>
      </main>


    </div>
  )
}

/* ---------- HELPER ---------- */

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-foreground/70 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
