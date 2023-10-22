'use client'

import Toolbar from "../../common/components/toolbar/toolbar"
import { Button } from "antd"
import isEmpty from 'lodash/isEmpty'
import Head from "next/head"
import { useContext } from "react"
import { GlobalStateContext } from "../../global-state"
import Link from "next/link"
import { ScreeningConclusion } from "../../../app/common/constants/screening"
import Image from 'next/image'
import screeningSuccessMale from '../../images/screening_approved_male.svg'
import screeningSuccessFemale from '../../images/screening_approved_female.svg'
import screeningSuccessEllipse from '../../images/screening_approved_ellipse.svg'
import screeningSuccessDrop from '../../images/screening_approved_drop.svg'

export default function Screening() {
  const [state, _dispatch] = useContext(GlobalStateContext) as any

  const { screening: { conclusion: { status, comments }, } } = state
  return (
    <div className="h-full">
      <Head>
        <title>סיכום שאלון רפואי</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col justify-between h-full">
        {
          status === ScreeningConclusion.Approved && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image src={screeningSuccessEllipse} alt="" className="z-1"></Image>
                <Image src={screeningSuccessDrop} alt="" className="z-2 absolute bottom-0 left-1/2 w-1/2 h-1/2"></Image>
                <Image
                  src={state.screening.answers.gender === 'gender.male' ? screeningSuccessMale : screeningSuccessFemale} alt=""
                  className="w-full h-4/6 z-3 absolute bottom-0"
                />
              </div>
              <div>🥳 איזה כיף, עברת את השאלון בהצלחה!</div>
              <div>
                {
                  comments && comments.map((comment: string) => (
                    <div key={comment}>{comment}</div>
                  ))
                }
              </div>
              <Link href="/where" className="w-full">
                <Button
                  className="h-12 bg-red-400 text-white rounded-3xl text-base w-full mt-8"
                >
                  איפה תורמים?
                </Button>
              </Link>
            </div>
          )
        }
        {
          status === ScreeningConclusion.Rejected && (
            <div className="h-1/6 flex flex-col justify-center items-center">
              <div className="text-xl"> 😭 אין אישור לתרומת דם</div>
              <div className="mt-8">
                {
                  comments && comments.map((comment: string) => (
                    <div key={comment}>{comment}</div>
                  ))
                }
              </div>
            </div>
          )
        }
        {
          isEmpty(state.screening.conclusion) && (
            <div className="h-1/6 flex flex-col justify-center items-center">
              <div className="text-xl"> טרם מילאת את השאלון</div>
              <Link href="/screening" className="w-full">
                <Button
                  className="h-12 bg-red-400 text-white rounded-3xl text-base w-full mt-8"
                >
                  שנתחיל?
                </Button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
