import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nobluff | Human vs Machine</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Orbitron:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className="relative min-h-screen bg-[#0B0F17] text-white overflow-hidden">
        <Header />
        <HeroSection />
      </main>
    </>
  )
}