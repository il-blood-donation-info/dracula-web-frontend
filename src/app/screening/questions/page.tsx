'use client'

import Toolbar from "../../common/components/toolbar/toolbar"
import { Button, Progress, Radio, RadioChangeEvent, Space } from "antd"
import Head from "next/head"
import formData from "./form"
import { useContext, useState } from "react"
import size from 'lodash/size'
import findKey from 'lodash/findKey'
import { useRouter } from 'next/navigation'

import { GlobalStateContext, SCREENING_CONCLUDE, SCREENING_POST_ANSWER } from "../../global-state"
import { ScreeningConclusion } from "@/app/common/constants/screening"

const firstQuestionId = findKey(formData, 'isFirst')

export default function Screening() {
  const [currentQuestionId, setCurrentQuestionId] = useState(firstQuestionId)
  const [{ screening: { answers } }, dispatch] = useContext(GlobalStateContext) as any
  const router = useRouter()

  // @ts-ignore
  const questionData = formData[currentQuestionId]
  const selectedAnswer = answers?.[questionData?.id]?.answer

  const onPrevClicked = () => {
    setCurrentQuestionId(questionData.prev)
  }

  const onAnswerSelected = (answerId: string) => {
    console.log('debug ansse', questionData, answerId)
    dispatch({ type: SCREENING_POST_ANSWER, payload: { questionId: currentQuestionId, answerId } })
    const answerData = questionData.answers.find(({ id }: { id: string }) => id === answerId)
    if (answerData.isTerminal) {
      dispatch({
        type: SCREENING_CONCLUDE, payload: {
          status: ScreeningConclusion.Rejected,
          // @ts-ignore
          comments: [answerData.comment],
        }
      })
      router.push('/screening/conclusion')
    } else if (questionData.isFinal) {
      dispatch({ type: SCREENING_CONCLUDE, payload: { status: ScreeningConclusion.Approved } })
      router.push('/screening/conclusion')
    } else {
      setCurrentQuestionId(answerData.next || questionData.next)
    }
  }
console.log('debug prog', answers)
  return (
    <div className="h-full">
      <Head>
        <title>האם אני זכאי לתרום דם?</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col justify-between h-full">
        <div>
          <Progress percent={Math.round(size(answers) / size(formData) * 100)} />
          <p className="text-lg">
            {questionData.questionText}
          </p>
          <p className="text-base">
            {questionData.description}
          </p>
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            {
              questionData.answers.map(({ id, answerText }: { id: string, answerText: string }) => (
                <Button
                  key={id}
                  onClick={() => onAnswerSelected(id)}
                  className={`${id === selectedAnswer ? 'border-red' : ''} w-full h-16 text-base whitespace-normal`}
                >
                  {answerText}
                </Button>
              ))
            }
          </div>
        </div>
        <div className="h-1/6 flex flex justify-center items-center">
          <Button
            disabled={currentQuestionId === firstQuestionId}
            onClick={onPrevClicked}
            className="h-12 rounded-3xl text-base w-full ml-4"
          >
            שאלה קודמת
          </Button>
        </div>
      </div>
    </div>
  )
}
