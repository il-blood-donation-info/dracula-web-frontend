// Want all data on-device. Simplest to not deal with Next's server-side rendering for now?
// TODO: This still does SSR on initial load.
'use client'

import Head from "next/head"
import Link from "next/link"
import { Button } from "antd"
import logo_b from './images/logo_b.svg'
import Image from 'next/image'
import Toolbar from "./common/components/toolbar/toolbar"

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>תרומת דם</title>
      </Head>
      <div className="h-full">
        <Toolbar />
        <div className="flex flex-col items-center h-full justify-start mt-20">
          <Image src={logo_b} alt="" />
          <div className="text-2xl font-bold">מתגייסים לחזית תורמי הדם</div>
          <div className="text-base font-normal mt-6">כל המידע על נקודות התרמה,</div>
          <div className="text-base font-normal">הנחיות לתורמים ועדכוני מצב במקום אחד.</div>
        </div>
      </div>
      <div className="h-1/6 flex flex-col justify-center items-center">
        <Link href="/screening" className="w-full">
          <Button block className="h-12 bg-red-400 text-white rounded-3xl text-base">
            האם אני יכול לתרום?
          </Button >
        </Link>
        <Link href="/where" className="w-full mt-4">
          <Button block className="h-12 border-red-400 text-red-400 rounded-3xl text-base">
            איפה תורמים?
          </Button>
        </Link>
      </div>
    </div>
  )
}
