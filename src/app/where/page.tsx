'use client'

import Head from 'next/head'

import LocationBox from './components/location-box'
import Toolbar from '../common/components/toolbar/toolbar'
import { Location } from './types'
import { MainTitle } from '../common/components/titles/main-title'
import { AutoComplete } from '../common/components/inputs/auto-complete'
import { uniq } from 'lodash'
import { useState } from 'react'

const locations : Location[] = [{
  name: 'תל אביב - ביה״ס שבח מופת',
  address: 'המסגר 7, תל אביב',
  city: 'תל אביב',
  dateFrom: new Date('2023-10-19T15:00:00.905Z'),
  dateTo: new Date('2023-10-19T19:00:00.905Z'),
  isOpen: true
}, {
  name: 'תל אביב - עזריאלי',
  address: 'בגין 10, בת אביב',
  city: 'תל אביב',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  name: 'ירושלים - מזרח',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'ירושלים',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
},{
  name: 'תל אביב',
  address: 'המסגר 7, תל אביב',
  city: 'תל אביב',
  dateFrom: new Date('2023-10-19T15:00:00.905Z'),
  dateTo: new Date('2023-10-19T19:00:00.905Z'),
  isOpen: true
}, {
  name: 'תל אביב - עזריאלי - בניין עגול',
  address: 'בגין 10, בת אביב',
  city: 'תל אביב',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  name: 'תל שבע',
  address: 'אבוחצירה 8, תל שבע',
  city: 'תל שבע',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  name: 'הרצליה',
  address: 'אבוחצירה 8, הרצליה',
  city: 'הרצליה',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
},{
  name: 'רעננה',
  address: 'אבוחצירה 8, רעננה',
  city: 'רעננה',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
},{
  name: 'אשקלון',
  address: 'אבוחצירה 8, אשקלון',
  city: 'אשקלון',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
},{
  name: 'קריית גת',
  address: 'אבוחצירה 8, קריית גת',
  city: 'קריית גת',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  name: 'ירושלים - מערב',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'ירושלים',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  name: 'תל אליעזר',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תל אליעזר',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  name: 'תל חדיד',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תל חדיד',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  name: 'תל שחר',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תל שחר',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  name: 'כרם שלום',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'כרם שלום',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  name: 'תל נסיון',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תלל נסיון',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}]

export default function Where() {
  const [filteredLocations, setFilteredLocations] = useState(locations)
  return (
    <div>
      <Head>
        <title>נקודות התרמה</title>
      </Head>
      <Toolbar />
      <div>
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
          />
        {filteredLocations.length > 0 ? (<div className="flex flex-col gap-2">
          {
            filteredLocations.map((location) => (
              <LocationBox key={`${location.name}_${location.address}`} location={location} />
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