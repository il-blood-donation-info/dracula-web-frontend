import './globals.css'
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'

// dam.org.il site mainly uses Heebo font.
// mdais.org site mainly uses Assistant font.
// (Both are under Open Font License)
const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'תרומת דם',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className={`${heebo.className} h-full`}>{children}</body>
    </html>
  )
}
