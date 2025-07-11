import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ message: 'Missing email' }, { status: 400 })
    }

    const response = await fetch('https://script.google.com/macros/s/AKfycbyLJkoYSgWwxd_YUSVCPdPVEIqT-FF9xdn1MyRk-bPfSJrs6LWPlVwHl5vbRFro9j11/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const result = await response.text()
    return NextResponse.json({ message: result })
  } catch (err: unknown) {
    console.error('API Route Error:', err)
    const errorMessage = err instanceof Error ? err.message : 'Server error'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
