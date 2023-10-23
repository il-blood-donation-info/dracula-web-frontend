'use client'

import { Button } from "antd"
import Head from "next/head"
import Link from "next/link"
import { useContext, useEffect } from "react";
import Image from 'next/image'
import { GlobalStateContext, INIT_SCREENING } from "../global-state"
import intro from '../images/screening_intro.svg'

export default function Screening() {
  const [state, dispatch] = useContext(GlobalStateContext) as any

  useEffect(() => {
    dispatch({ type: INIT_SCREENING })
  }, [dispatch])

  return (
    <div className="h-full">
      <Head>
        <title>סימולציית התאמה לתרומת דם</title>
      </Head>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div>
            <Image src={intro} alt="" />
          </div>
          <div className="text-lg text-center font-bold mt-8">
            סימולציית התאמה לתרומת דם
          </div>
          <p className="mt-6">
            מטרת הסימולציה היא לוודא שאתם עומדים בקריטריונים של מד”א לתרומת דם. במידה ותימצאו מתאימים מומלץ להגיע לעמדת התרמה, שם יהיה עליכם למלא הצהרת בריאות, ולעבור בדיקה נוספת (לחץ דם והמוגלובין).
          </p>
          <p className="mt-6">
            טופס זה מבוסס על טופס מד&quot;א והם יהיו הגורם שיקבע סופית את ההתאמה שלכם לתרומת דם.
          </p>
        </div>
        <div>
          {
            false ? (
              <Link href="/screening/questions" className="w-full">
                <Button block className="h-12 bg-red-400 text-white rounded-3xl text-base">
                  להתחיל
                </Button>
              </Link>
            ) : (
              <div>
                <Link href="/screening/questions" className="w-full">
                  <Button block className="h-12 bg-red-400 text-white rounded-3xl text-base">
                    להמשיך מאיפה שעצרתי
                  </Button>
                </Link>
                <Link href="/screening/questions" className="w-full">
                  <Button block className="h-12 rounded-3xl text-base">
                    להתחיל מחדש
                  </Button>
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </div >
  )
}
