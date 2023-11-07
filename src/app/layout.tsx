'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import GlobalState from './global-state'
import './i18n'
import { useTranslation } from 'react-i18next'

const rtlLanguages = ['ar', 'he']

// dam.org.il site mainly uses Heebo font.
// mdais.org site mainly uses Assistant font.
// (Both are under Open Font License)
const heebo = Heebo({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  const changeLanguageClicked = (lang: string) => {
    changeLanguage(lang)
  }

  const direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr'

  return (
    <html lang="he" dir={direction} className="h-full">
      <body className={`${heebo.className} h-full px-4 py-6`}>
        <GlobalState>
          {children}
          <div className="text-center mt-5">
            <button onClick={() => changeLanguageClicked('en')}>EN</button> /{' '}
            <button onClick={() => changeLanguageClicked('he')}>עב</button>
          </div>
        </GlobalState>
      </body>
    </html>
  )
}
