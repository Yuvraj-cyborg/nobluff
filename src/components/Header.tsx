export default function Header() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 backdrop-blur-xs rounded-full px-8 py-3 flex items-center gap-8">
      <span className="font-orbitron font-bold text-xl text-white tracking-widest">NoBluff</span>
      <a href="#" className="text-white/90 hover:text-[#00FFF7] font-inter transition-colors">Home</a>
      <a href="#" className="text-white/90 hover:text-[#00FFF7] font-inter transition-colors">About</a>
      <a href="#" className="text-white/90 hover:text-[#00FFF7] font-inter transition-colors">Contact</a>
    </nav>
  )
}