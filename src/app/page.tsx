// Want all data on-device. Simplest to not deal with Next's server-side rendering for now?
// TODO: This still does SSR on initial load.
'use client'

import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'antd'
import logo_b from './images/logo_b.svg'
import Image from 'next/image'
import Toolbar from './common/components/toolbar/toolbar'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>תרומת דם</title>
      </Head>
      <div className="h-full">
        <Toolbar />
        <div className="flex flex-col items-center h-full justify-start mt-10">
          <Image src={logo_b} alt="" />
          <div className="text-2xl font-bold">{t('homepage.title')}</div>
          <div className="text-base font-normal mt-6 text-center">
            {t('homepage.subtitle')}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-6 px-4">
        <Link href="/screening" className="w-full">
          <Button
            block
            className="h-12 bg-red-400 text-white rounded-xl text-base"
          >
            {t('homepage.canDonateBtn')}
          </Button>
        </Link>
        <Link href="/where" className="w-full mt-4">
          <Button
            block
            className="h-12 border-red-400 text-red-400 rounded-xl text-base"
          >
            {t('homepage.whereDonateBtn')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
