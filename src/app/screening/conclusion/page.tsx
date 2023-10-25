'use client'

import Toolbar from "../../common/components/toolbar/toolbar"
import { Button, Card } from "antd"
import isEmpty from 'lodash/isEmpty'
import Head from "next/head"
import { useContext } from "react"
import { GlobalStateContext } from "../../global-state"
import Link from "next/link"
import { ScreeningConclusion } from "../../../app/common/constants/screening"
import screeningApproved from '../../images/screening_approved.svg'
import screeningRejected from '../../images/screening_rejected.svg'
import HeaderVisual from "@/app/common/components/header-visual/header-visual"

export default function Screening() {
  const [state, _dispatch] = useContext(GlobalStateContext) as any

  const { screening: { conclusion: { status, comments }, } } = state
  return (
    <div className="h-full">
      <Head>
        <title>סיכום שאלון רפואי</title>
      </Head>
      <div className="flex flex-col justify-between h-full">
        {
          status === ScreeningConclusion.Approved && (
            <div className="h-full flex flex-col justify-between items-center">
              <HeaderVisual visual={screeningApproved} />
              <div className="mt-16 h-full flex flex-col justify-center">
                <div className="text-lg text-center font-bold ">
                  אפשר ללכת לתרום דם!
                </div>
                <div className="mt-6">
                  על בסיס הנתונים שמילאתם אתם מתאימים לתרום דם. ניתן לגשת לעמדת ההתרמה הקרובה, שם תתבקשו להשלים טפסים ובדיקות נוספות תרם התרומה.
                </div>
                <div>
                  {
                    comments && comments.map((comment: string) => (
                      <Card key={comment} className="text-base bg-gray-200">{comment}</Card>
                    ))
                  }
                </div>
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
            <div className="h-full flex flex-col justify-between items-center">
              <HeaderVisual visual={screeningRejected} />
              <div className="mt-16 h-full flex flex-col justify-center">
                <div className="text-lg text-center font-bold ">
                  כרגע לא ניתן לתרום דם
                </div>
                <div>
                  תודה על הנכונות לתרום ולהציל חיים. מצאנו שאינכם מתאימים כרגע לתרומת דם.
                                </div>
                <div className="mt-8">
                  {
                    comments && comments.map((comment: string) => (
                      <Card key={comment} className="text-base bg-gray-200">{comment}</Card>
                    ))
                  }
                </div>
              </div>
              <Link href="/" className="w-full">
                <Button block className="h-12 rounded-3xl text-base mt-4">
                  למסך הראשי
                </Button>
              </Link>
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
