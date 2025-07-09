import Image from 'next/image'
import JoinForm from './JoinForm'
import Header from './Header'

export default function HeroSection() {
    return (
        <section className="w-full h-screen relative flex items-center justify-center text-center">
            <Image
                src="/ai-vs-human-showdown.jpg"
                alt="AI vs Human Showdown"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/0 z-0" />
            <Header />
            <div className="relative z-10 px-6 max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4">
                    Sabotage the Impostors
                    <span className="animate-blink text-[#00FFF7]">|</span>
                </h1>
                <p className="text-lg md:text-xl font-inter mb-8 text-gray-300">
                    Deepfakes. Voice clones. Scripted lies.<br className="hidden md:block" />
                    Nobluff hunts them down in real-time.
                </p>
                <JoinForm />
                <p className="mt-4 text-sm text-gray-400 font-inter">
                    Join the waitlist for early access and intel.
                </p>
            </div>
        </section>
    )
}
