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
  id: "1",
  name: 'תל אביב - ביה״ס שבח מופת',
  address: 'המסגר 7, תל אביב',
  city: 'תל אביב',
  openTime: new Date('2023-10-19T15:00:00.905Z'),
  closeTime: new Date('2023-10-19T19:00:00.905Z'),
  isOpen: true
}, {
  id: "16",
  name: 'תל אביב - עזריאלי',
  address: 'בגין 10, בת אביב',
  city: 'תל אביב',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  id: "2",
  name: 'ירושלים - מזרח',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'ירושלים',
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
},{
  id: "3",
  name: 'תל אביב',
  address: 'המסגר 7, תל אביב',
  city: 'תל אביב',
  openTime: new Date('2023-10-19T15:00:00.905Z'),
  closeTime: new Date('2023-10-19T19:00:00.905Z'),
  isOpen: true
}, {
  id: "4",
  name: 'תל אביב - עזריאלי - בניין עגול',
  address: 'בגין 10, בת אביב',
  city: 'תל אביב',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  id: "5",
  name: 'תל שבע',
  address: 'אבוחצירה 8, תל שבע',
  city: 'תל שבע',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  id: "6",
  name: 'הרצליה',
  address: 'אבוחצירה 8, הרצליה',
  city: 'הרצליה',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
},{
  id: "7",
  name: 'רעננה',
  address: 'אבוחצירה 8, רעננה',
  city: 'רעננה',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
},{
  id: "8",
  name: 'אשקלון',
  address: 'אבוחצירה 8, אשקלון',
  city: 'אשקלון',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
},{
  id: "9",
  name: 'קריית גת',
  address: 'אבוחצירה 8, קריית גת',
  city: 'קריית גת',
  openTime: new Date('2023-10-18T15:00:00.905Z'),
  closeTime: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  id: "10",
  name: 'ירושלים - מערב',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'ירושלים',
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  id: "11",
  name: 'תל אליעזר',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תל אליעזר',
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  id: "12",
  name: 'תל חדיד',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תל חדיד',
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  isOpen: false
}, {
  id: "13",
  name: 'תל שחר',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תל שחר',
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  id: "14",
  name: 'כרם שלום',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'כרם שלום',
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}, {
  id: "15",
  name: 'תל נסיון',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  city: 'תלל נסיון',
  openTime: new Date('2023-10-20T15:00:00.905Z'),
  closeTime: new Date('2023-10-20T16:00:00.905Z'),
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