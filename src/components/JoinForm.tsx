"use client"
import { useState } from 'react'

export default function JoinForm() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log('API response:', data)

    if (!res.ok) throw new Error(data.message || 'Unknown error')

    setEmail('')
    alert('Submitted!')
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Submission failed:', errorMessage)
    alert(`Error: ${errorMessage}`)
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 flex-wrap"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] text-white placeholder-gray-400 font-inter backdrop-blur-md transition-all"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-full bg-[#00FFF7] text-black font-semibold font-inter hover:shadow-[0_0_10px_2px_#00FFF7] transition-shadow"
      >
        Join
      </button>
    </form>
  )
}