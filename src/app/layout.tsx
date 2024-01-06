import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../component/navbar'

export const metadata: Metadata = {
  title: `Elsa's Personal Web`,
  description: 'A Developer based on Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
