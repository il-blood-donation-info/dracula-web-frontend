'use client'

import Toolbar from "../../common/components/toolbar/toolbar"
import { Button } from "antd"
import isEmpty from 'lodash/isEmpty'
import Head from "next/head"
import { useContext } from "react"
import { GlobalStateContext } from "../../global-state"
import Link from "next/link"
import { ScreeningConclusion } from "../../../app/common/constants/screening"

export default function Screening() {
  const [state, dispatch] = useContext(GlobalStateContext) as any

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
            <div className="h-1/6 flex flex-col justify-center items-center">
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
