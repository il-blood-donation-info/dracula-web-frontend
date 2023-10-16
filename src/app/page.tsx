// Want all data on-device. Simplest to not deal with Next's server-side rendering for now?
// TODO: This still does SSR on initial load.
'use client'

import Head from "next/head"
import Link from "next/link"

import NavButton from "./NavButton"

export default function Home() {
  return (
    <div>
      <Head>
        <title>תרומת דם</title>
      </Head>
      <NavButton>
        <Link href="/who" className="btn">
          מי יכול לתרום
        </Link>
      </NavButton>
      <NavButton>
        <Link href="/where" className="btn">
          איפה תורמים
        </Link>
      </NavButton>
    </div>
  )
}
