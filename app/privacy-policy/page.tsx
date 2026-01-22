'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-28 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          <header>
            <h1 className="text-4xl font-semibold mb-4">Privacy Policy</h1>
            <p className="text-foreground/60">
              The Junction of Journey (A Travel Hub)
            </p>
          </header>

          <section className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              This Privacy Policy explains how The Junction of Journey collects,
              uses, and protects personal information provided by customers
              during bookings and enquiries.
            </p>

            <p>
              Personal information such as name, contact details, and
              government-issued identification is collected solely for:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Travel arrangements and bookings</li>
              <li>Legal and regulatory compliance</li>
              <li>Communication related to services</li>
            </ul>

            <p>
              Customer data is <strong>never sold, rented, or traded</strong>.
              Information may be shared only with:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Hotels and accommodation providers</li>
              <li>Transport and logistics partners</li>
              <li>Local authorities where legally required</li>
            </ul>

            <p>
              Payment details are processed through secure third-party
              payment gateways. The Junction of Journey does not store
              sensitive payment information.
            </p>

            <p>
              All customer information is handled with confidentiality and
              is used only to improve service delivery and customer experience.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
