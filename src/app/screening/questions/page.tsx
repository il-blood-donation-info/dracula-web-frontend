'use client'

import Toolbar from "../../common/components/toolbar/toolbar"
import { Button, Progress, Radio, RadioChangeEvent, Space } from "antd"
import Head from "next/head"
import formData from "./form"
import { useContext, useEffect, useState } from "react"
import size from 'lodash/size'
import isEmpty from 'lodash/isEmpty'
import { useRouter } from 'next/navigation'

import { GlobalStateContext, SCREENING_CONCLUDE, SCREENING_POST_ANSWER } from "../../global-state"
import { ScreeningConclusion } from "@/app/common/constants/screening"

export default function Screening() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [{ screening: { answers } }, dispatch] = useContext(GlobalStateContext) as any
  const router = useRouter()

  const questionData = formData[currentQuestionIndex]
  const selectedAnswer = answers?.[questionData?.id]?.answer

  useEffect(() => {
    const prevQuestion = formData[currentQuestionIndex - 1]
    if (prevQuestion) {
      const answerId = answers[prevQuestion.id].answer
      if (currentQuestionIndex === size(formData)) {
        dispatch({ type: SCREENING_CONCLUDE, payload: { status: ScreeningConclusion.Approved } })
        router.push('/screening/conclusion')
      }
      const answerData = prevQuestion.answers.find(({ id }) => id === answerId)
      if (answerData.isTerminal) {
        dispatch({
          type: SCREENING_CONCLUDE, payload: {
            status: ScreeningConclusion.Rejected,
            comments: [answerData.terminalMessage],
          }
        })
        router.push('/screening/conclusion')
      }
    }
  }, [currentQuestionIndex])

  const onNextClicked = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onPrevClicked = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  if (currentQuestionIndex === size(formData)) {
    return (<div>סיימנו!</div>)
  }

  const onAnswerSelected = (e: RadioChangeEvent) => {
    const answerId = e.target.value
    dispatch({ type: SCREENING_POST_ANSWER, payload: { questionId: questionData.id, answerId } })
  }

  return (
    <div className="h-full">
      <Head>
        <title>האם אני זכאי לתרום דם?</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col justify-between h-full">
        <div>
          <Progress percent={Math.round(currentQuestionIndex / size(formData) * 100)} />
          <p className="text-lg">
            {questionData.questionText}
          </p>
          <p className="text-base">
            {questionData.description}
          </p>
          <Radio.Group onChange={onAnswerSelected} value={selectedAnswer}>
            <Space direction="vertical">
              {
                questionData.answers.map(({ id, answerText }) => (
                  <Radio key={id} value={id} className="text-base">{answerText}</Radio>
                ))
              }
            </Space>
          </Radio.Group>
        </div>
        <div className="h-1/6 flex flex justify-center items-center">
          <Button
            disabled={currentQuestionIndex === 0}
            onClick={onPrevClicked}
            className="h-12 rounded-3xl text-base w-full ml-4"
          >
            קודם
          </Button>
          <Button
            disabled={isEmpty(selectedAnswer)}
            onClick={onNextClicked}
            className="h-12 bg-red-400 text-white rounded-3xl text-base w-full"
          >
            הבא
          </Button>
        </div>
      </div>
    </div>
  )
}
