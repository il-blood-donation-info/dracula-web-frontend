'use client'

import Toolbar from '../../common/components/toolbar/toolbar'
import { Button, Card } from 'antd'
import isEmpty from 'lodash/isEmpty'
import Head from 'next/head'
import { useContext } from 'react'
import { GlobalStateContext } from '../../global-state'
import Link from 'next/link'
import { ScreeningConclusion } from '../../../app/common/constants/screening'
import screeningApproved from '../../images/screening_approved.svg'
import screeningRejected from '../../images/screening_rejected.svg'
import HeaderVisual from '@/app/common/components/header-visual/header-visual'
import { useTranslation } from 'react-i18next'

export default function Screening() {
  const [state, _dispatch] = useContext(GlobalStateContext) as any
  const { t } = useTranslation()

  const {
    screening: {
      conclusion: { status, comments },
    },
  } = state
  return (
    <div className="h-full">
      <Head>
        <title>{t('conclusion.title')}</title>
      </Head>
      <div className="flex flex-col justify-between h-full">
        {status === ScreeningConclusion.Approved && (
          <div className="h-full flex flex-col justify-between items-center">
            <HeaderVisual visual={screeningApproved} />
            <div className="mt-16 h-full flex flex-col justify-center px-4">
              <div className="text-xl text-center font-bold ">
                {t('conclusion.approve.title')}
              </div>
              <div className="mt-6">{t('conclusion.approve.description')}</div>
              <div>
                {comments &&
                  comments.map((comment: string) => (
                    <Card key={comment} className="text-base bg-gray-200">
                      {comment}
                    </Card>
                  ))}
              </div>
            </div>
            <div className="py-6 px-4 w-full">
              <Link href="/where" className="w-full">
                <Button className="h-12 bg-red-400 text-white rounded-xl text-base w-full mt-8">
                  {t('conclusion.approve.locationsLink')}
                </Button>
              </Link>
            </div>
          </div>
        )}
        {status === ScreeningConclusion.Rejected && (
          <div className="h-full flex flex-col justify-between items-center">
            <HeaderVisual visual={screeningRejected} />
            <div className="mt-16 h-full flex flex-col justify-center mx-4">
              <div className="text-xl text-center font-bold ">
                {t('conclusion.reject.title')}
              </div>
              <div>{t('conclusion.reject.description')}</div>
              <div className="mt-8">
                {comments &&
                  comments.map((comment: string) => (
                    <Card key={comment} className="text-base bg-gray-200">
                      {comment}
                    </Card>
                  ))}
              </div>
            </div>
            <div className="py-6 px-4 w-full">
              <Link href="/" className="w-full">
                <Button block className="h-12 bg-red-400 text-white rounded-xl text-base mt-4">
                  {t('conclusion.homepageBtn')}
                </Button>
              </Link>
            </div>
          </div>
        )}
        {isEmpty(state.screening.conclusion) && (
          <div className="h-1/6 flex flex-col justify-center items-center px-4 py-6">
            <div className="text-xl">{t('conclusion.didntFinish')}</div>
            <Link href="/screening" className="w-full">
              <Button className="h-12 bg-red-400 text-white rounded-xl text-base w-full mt-8">
                {t('conclusion.letsStart')}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
