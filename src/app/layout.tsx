'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import GlobalState from './global-state'

// dam.org.il site mainly uses Heebo font.
// mdais.org site mainly uses Assistant font.
// (Both are under Open Font License)
const heebo = Heebo({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className={`${heebo.className} h-full`}>
        <GlobalState>
          {children}
        </GlobalState>
      </body>
    </html>
  )
}
