'use client'

import Head from 'next/head'

import LocationBox from './components/location-box'
import Toolbar from '../common/components/toolbar/toolbar'
import { Location } from './types'
import { MainTitle } from '../common/components/titles/main-title'
import { AutoComplete } from '../common/components/inputs/auto-complete'
import { uniq } from 'lodash'
import { useEffect, useState } from 'react'

type scheduleDTO = {
  address: string,
  close_time: string,
  date: string,
  is_open: boolean,
  name: string
  open_time: string
  station_id: number
}

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
  const [locations, setLocations] = useState<Array<Location>>([])
  const [filteredLocations, setFilteredLocations] = useState(locations)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`)
        const fetchLocation = await response.json()
        const locations = adaptToLocations(fetchLocation)
        setLocations(locations)
        setFilteredLocations(locations)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])

  return (
    <div>
      <Head>
        <title>נקודות התרמה</title>
      </Head>
      <Toolbar />
      <div className="px-4 pb-6">
        <div className="mb-3">
          <MainTitle>
            חיפוש נקודת התרמה
          </MainTitle>
        </div>
        <AutoComplete
          options={uniq(locations.map((loc => loc.city)))}
          onSelectOption={(option: string) => {
            setFilteredLocations(locations.filter((loc) => loc.city.includes(option)))
          }
          }
          placeholder="באיזה עיר אני רוצה לתרום?"
        />
        {filteredLocations.length > 0 ? (<div className="flex flex-col gap-2">
          {
            filteredLocations.map((location) => (
              <LocationBox key={location.id} location={location} />
            ))
          }
        </div>) : (
          <div className="flex flex-col items-center pt-12">
            <div>
              כרגע לא נמצאו נקודות בעיר זו,
            </div>
            <div>
              נסו לחפש בעיר אחרת.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
