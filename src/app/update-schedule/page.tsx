'use client'

import Head from 'next/head'
import { Flex, Input, Spin, Modal, Button } from 'antd';

import Toolbar from '../common/components/toolbar/toolbar'
import { MainTitle } from '../common/components/titles/main-title'
import { uniq } from 'lodash'
import { Location } from '../types/location'
import { useEffect, useState } from 'react'
import { getSchedule, updateSchedule } from '../api/api'
import LocationBox from '../common/components/location-box/location-box'


const adaptToLocations = (incomingData: scheduleDTO[]): Location[] => {
  return incomingData.map((data) => {
    return {
      id: `${data.station_id}_${data.address}_${data.date}_${data.open_time}_${data.close_time}`,
      name: data.name,
      address: data.address,
      city: data.address,
      openTime: new Date(`${data.date}T${data.open_time}`),
      closeTime: new Date(`${data.date}T${data.close_time}`),
      isOpen: data.is_open
    }
  })

}

export default function Where() {
  const [loading, setLoading] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [schedule, setSchedule] = useState<Array<Location>>()
  const [selectedStation, setSelectedStation] = useState<Location>()


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const fetchSchedule = await getSchedule()
        setLoading(false)
        const schedule = adaptToLocations(fetchSchedule)
        setSchedule(schedule)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])

  const filteredSchdules = schedule?.filter(({ name }) => {
    return name.toLowerCase().includes(nameFilter.toLowerCase())
  })

  const onUpdateConfirmed = async () => {
    await updateSchedule(selectedStation.id, !selectedStation.isOpen)
  }

  return (
    <div>
      <Head>
        <title>עדכון נקודת התרמה</title>
      </Head>
      <Toolbar />
      <div className="px-4 pb-6">
        <div className="mb-3">
          <MainTitle>
            עדכון נקודת התרמה
          </MainTitle>
        </div>
        <div>
          <Input className="mb-3" placeholder='חפש נקודה' value={nameFilter} onChange={(event) => setNameFilter(event.target.value)} />
        </div>
        {loading &&
          <Flex justify='center' align="center" gap="middle">
            <Spin size="large" />
          </Flex>
        }
        {
          !loading && schedule?.length > 0 && (<div className="flex flex-col gap-2">
            {
              filteredSchdules.map((scheduleItem) => (
                <LocationBox
                  key={scheduleItem.id}
                  location={scheduleItem}
                  onClick={() => setSelectedStation(scheduleItem)}
                />
              ))
            }
          </div>)
        }
        {
          !loading && schedule?.length === 0 && (
            <div className="flex flex-col items-center pt-12">
              <div>
                כרגע לא נמצאו נקודות בעיר זו,
              </div>
              <div>
                נסו לחפש בעיר אחרת.
              </div>
            </div>
          )
        }

        {
          selectedStation && (
            <Modal footer={null} title="אישור עדכון" open onCancel={() => { setSelectedStation(null) }}>
              <p> לעדכן את תחנה <strong>{selectedStation.name}</strong> למצב <strong>{selectedStation.isOpen ? 'סגור' : 'פתוח'}</strong></p>
              <Button
                block
                className="h-12 bg-red-400 text-white rounded-xl text-base mt-4"
                onClick={onUpdateConfirmed}
              >
                אישור
              </Button>
            </Modal>
          )
        }
      </div>
    </div>
  )
}
