import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0F17] text-white overflow-hidden">
      <Header />
      <HeroSection />
    </main>
  )
}