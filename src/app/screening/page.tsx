'use client'

import { Button } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { GlobalStateContext, INIT_SCREENING } from '../global-state'
import formImg from '../images/screening_form.svg'
import HeaderVisual from '../common/components/header-visual/header-visual'
import { useTranslation, withTranslation } from 'react-i18next'

const Screening = () => {
  const [state, dispatch] = useContext(GlobalStateContext) as any

  const isScreeningInProgress = !!state.screening.latestQuestionId
  const { t } = useTranslation()

  const resetScreening = () => {
    dispatch({ type: INIT_SCREENING, payload: {} })
  }

  return (
    <div className="h-full">
      <Head>
        <title>{t('screening.title')}</title>
      </Head>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-center h-full">
          <HeaderVisual visual={formImg} />
          <div className="text-lg text-center font-bold mt-16">
            {t('screening.title')}
          </div>
          <p className="mt-6">{t('screening.description')}</p>
          <p className="mt-6">{t('screening.aboutForm')}</p>
        </div>
        <div>
          {false ? (
            <Link href="/screening/questions" className="w-full">
              <Button
                block
                className="h-12 bg-red-400 text-white rounded-3xl text-base"
              >
                {t('screening.startBtn')}
              </Button>
            </Link>
          ) : (
            <div>
              {isScreeningInProgress ? (
                <div>
                  <Link href="/screening/questions" className="w-full">
                    <Button
                      block
                      className="h-12 bg-red-400 text-white rounded-3xl text-base"
                    >
                      {t('screening.continueBtn')}
                    </Button>
                  </Link>
                  <Link href="/screening/questions" className="w-full">
                    <Button
                      onClick={resetScreening}
                      block
                      className="h-12 rounded-3xl text-base mt-4"
                    >
                      {t('screening.restartBtn')}
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link href="/screening/questions" className="w-full">
                  <Button
                    block
                    className="h-12 bg-red-400 text-white rounded-3xl text-base mt-4"
                  >
                    {t('screening.startBtn')}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Screening)
