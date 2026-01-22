import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InteractiveMap from '@/components/InteractiveMap'
import JourneyCards from '@/components/JourneyCards'
import About from '@/components/About'


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Hero />
        <JourneyCards />
        <InteractiveMap />
        <About />
      </main>
    </div>
  )
}
