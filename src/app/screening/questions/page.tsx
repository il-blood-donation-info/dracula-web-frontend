'use client'

import { Button, Progress, Radio, Card, RadioChangeEvent, Space } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import isEmpty from 'lodash/isEmpty'
import isArray from 'lodash/isArray'
import formData from './form'
import { useContext, useState } from 'react'
import size from 'lodash/size'
import findKey from 'lodash/findKey'
import filter from 'lodash/filter'
import keys from 'lodash/keys'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import {
  GlobalStateContext,
  SCREENING_CONCLUDE,
  SCREENING_POST_ANSWER,
} from '../../global-state'
import { ScreeningConclusion } from '@/app/common/constants/screening'
import { RightOutlined } from '@ant-design/icons'
import { Answer } from '@/app/types/screening'

const firstQuestionId = findKey(
  formData(() => { }),
  'isFirst'
)
const topQuestionsCount = size(
  filter(keys(formData(() => { })), (key) => !key.includes('.'))
)

export default function Screening() {
  const [answerConfirmationStage, setAnswerConfirmationStage] =
    useState<Answer>()
  const [
    {
      screening: { answers, latestQuestionId },
    },
    dispatch,
  ] = useContext(GlobalStateContext) as any
  const [currentQuestionId, setCurrentQuestionId] = useState(
    latestQuestionId || firstQuestionId
  )
  const router = useRouter()
  const { t } = useTranslation()

  // @ts-ignore
  const questionData = formData(t)[currentQuestionId]
  // @ts-ignore
  const selectedAnswerId = answers?.[currentQuestionId]?.answer

  const onPrevClicked = () => {
    setAnswerConfirmationStage(undefined)
    setCurrentQuestionId(questionData.prev)
  }

  const continueToNextQuestion = (answerData: Answer) => {
    if (questionData.isFinal) {
      dispatch({
        type: SCREENING_POST_ANSWER,
        payload: { questionId: currentQuestionId, answerId: answerData.id },
      })
      dispatch({
        type: SCREENING_CONCLUDE,
        payload: { status: ScreeningConclusion.Approved },
      })
      router.push('/screening/conclusion')
    } else {
      dispatch({
        type: SCREENING_POST_ANSWER,
        payload: { questionId: currentQuestionId, answerId: answerData.id },
      })
      setCurrentQuestionId(answerData.next || questionData.next)
    }
  }

  const onAnswerSelected = (answerId: string) => {
    setAnswerConfirmationStage(undefined)

    const answerData = questionData.answers.find(
      ({ id }: { id: string }) => id === answerId
    )
    if (answerData.confirmationText) {
      setAnswerConfirmationStage(answerData)
    } else {
      continueToNextQuestion(answerData)
    }
  }

  const onConfirmationClicked = () => {
    const answerData = questionData.answers.find(
      ({ id }: { id: string }) => id === answerConfirmationStage?.id
    )
    setAnswerConfirmationStage(undefined)

    if (answerData.isTerminal) {
      dispatch({
        type: SCREENING_CONCLUDE,
        payload: {
          status: ScreeningConclusion.Rejected,
          // @ts-ignore
          comments: [answerConfirmationStage.comment],
        },
      })
      router.push('/screening/conclusion')
    } else {
      continueToNextQuestion(answerData)
    }
  }

  return (
    <div className="h-full">
      <Head>
        <title>האם אני זכאי לתרום דם?</title>
      </Head>
      <div className="flex flex-col justify-between h-full">
        <div className="px-4 w-full">
          <div className="flex justify-between items-center py-6">
            <Button
              disabled={!questionData.prev}
              onClick={onPrevClicked}
              shape="circle"
              icon={<RightOutlined />}
              size="small"
              className="ml-3 mt-1"
              style={{ color: 'white', backgroundColor: 'black' }}
            />
            <Progress
              size="default"
              showInfo={false}
              className="mx-4 mt-2"
              status="exception"
              percent={Math.round(
                (size(filter(keys(answers), (key) => !key.includes('.'))) /
                  topQuestionsCount) *
                100
              )}
            />
            <Link href="/">
              <Button className="text-black text-base" type="link">
                {t('wizard.finishBtn')}
              </Button>
            </Link>
          </div>
          <p className="text-lg">{questionData.questionText}</p>

          {questionData.descriptionList ? (
            <Card className="text-base bg-gray-200 overflow-y-scroll max-h-40 w-full">
              {questionData.description.split(',').map((item: string) => (
                <div key={item}>{item}</div>
              ))}
            </Card>
          ) : (
            <p
              className="text-base"
              dangerouslySetInnerHTML={{ __html: questionData.description }}
            />
          )}
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            {questionData.answers.map(
              ({ id, answerText }: { id: string; answerText: string }) => {
                const isSelectedAnswer =
                  id === (answerConfirmationStage?.id || selectedAnswerId)
                return (
                  <Button
                    key={id}
                    onClick={() => onAnswerSelected(id)}
                    className={`w-full h-20 text-base whitespace-normal border-2 shadow-lg rounded-lg`}
                    style={{
                      borderColor: isSelectedAnswer ? 'red' : '',
                      color: isSelectedAnswer ? 'black' : '',
                    }}
                  >
                    {answerText}
                  </Button>
                )
              }
            )}
            {!isEmpty(answerConfirmationStage) && (
              <Card className="text-base bg-gray-200 w-full">
                {answerConfirmationStage?.confirmationText}
              </Card>
            )}
          </div>
        </div>
        <div className="px-4 py-6">
          {!isEmpty(answerConfirmationStage) && (
            <Button
              onClick={onConfirmationClicked}
              className="h-12 bg-red-400 text-white rounded-xl text-base w-full ml-4 "
            >
              {answerConfirmationStage.isTerminal
                ? t('wizard.finishBtn')
                : t('wizard.nextQ')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
