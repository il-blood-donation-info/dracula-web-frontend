'use client'

import Toolbar from "../../common/components/toolbar/toolbar"
import { Button, Progress, Radio, Space } from "antd"
import Head from "next/head"
import Link from "next/link"
import formData from "./form.json"
import { useEffect, useState } from "react"
import size from 'lodash/size'
import isEmpty from 'lodash/isEmpty'

export default function Screening() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [response, setResponse] = useState([] as Array<any>)
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (response[currentQuestionIndex]) {
      setSelectedAnswer(response[currentQuestionIndex])
    }
  }, [currentQuestionIndex, response])

  const onNextClicked = () => {
    setResponse([...response, selectedAnswer])
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setSelectedAnswer(null)
  }

  const onPrevClicked = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  const onAnswerSelected = (e: RadioChangeEvent) => {
    setSelectedAnswer(e.target.value);
  }
  const questionData = formData[currentQuestionIndex]

  if (currentQuestionIndex === size(formData)) {
    return (<div>Done {size(formData)} {currentQuestionIndex} {JSON.stringify(response)}</div>)
  }

  return (
    <div className="h-full">
      <Head>
        <title>האם אני זכאי לתרום דם?</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col justify-between h-full">
        <div>
          <Progress percent={currentQuestionIndex / size(formData) * 100} />
          <p className="text-lg">
            {questionData.questionText}
          </p>
          <Radio.Group onChange={onAnswerSelected} value={selectedAnswer}>
            <Space direction="vertical">
              {
                questionData.answers.map(({ answerText }) => (
                  <Radio key={answerText} value={answerText} className="text-base">{answerText}</Radio>
                ))
              }
            </Space>
          </Radio.Group>
        </div>
        <div className="h-1/6 flex flex justify-center items-center">
          <Button
            disabled={currentQuestionIndex === 0}
            onClick={onPrevClicked}
            className="h-12 bg-red-400 text-white rounded-3xl text-base w-full ml-4"
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
