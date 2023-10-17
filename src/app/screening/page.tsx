'use client'

import { Button } from "antd"
import Head from "next/head"
import Toolbar from "../common/components/toolbar/toolbar"
import Link from "next/link"
import { useContext, useEffect } from "react";
import { GlobalStateContext, INIT_SCREENING } from "../global-state"

export default function Screening() {
  const [state, dispatch] = useContext(GlobalStateContext) as any

  useEffect(() => {
    dispatch({ type: INIT_SCREENING })
  }, [])

  return (
    <div className="h-full">
      <Head>
        <title>האם אני זכאי לתרום דם?</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col justify-between">
        <div className="mb-10">
          <p >
            תורמ/ת דם נכבד/ת, אנו מודים לך על נכונותך לתרום דם.
          </p>
          <p className="mt-4">
            הטופס שלפניך יסייע לך לוודא שהינך עומד/ת בקריטריונים של תרומת דם. הקריטריונים נקבעו על ידי מד"א. טופס זה הינו טופס ראשוני בלבד, במידה ותימצא מתאים יהיה עליך למלא הצהרת בריאות, ולעבור בדיקה נוספת (לחץ דם, והמוגלובין) בעמדת ההתרמה.

          </p><p className="mt-4">
            טופס זה מבוסס על טופס מד"א "שאלון תורם דם" ובכל מקרה נציג מד"א הינו הקבוע סופית לגבי התאמתו או אי-התאמתו של תורם דם.
          </p>
        </div>
        <Link href="/screening/questions" className="w-full">
          <Button block className="h-12 bg-red-400 text-white rounded-3xl text-base">
            בואו נתחיל
          </Button>
        </Link>
      </div>
    </div >
  )
}
