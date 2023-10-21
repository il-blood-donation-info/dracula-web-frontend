import Head from 'next/head'

import LocationBox from './components/location-box'
import Toolbar from '../common/components/toolbar/toolbar'
import { Location } from './types'
import { MainTitle } from '../common/components/titles/main-title'
import search from '../images/search.svg'
import Image from 'next/image'

const locations : Location[] = [{
  name: 'תל אביב - ביה״ס שבח מופת',
  address: 'המסגר 7, תל אביב',
  dateFrom: new Date('2023-10-19T15:00:00.905Z'),
  dateTo: new Date('2023-10-19T19:00:00.905Z'),
  isOpen: true
}, {
  name: 'תל אביב - עזריאלי',
  address: 'בגין 10, בת אביב',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  name: 'ירושלים',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
},{
  name: 'תל אביב - ביה״ס שבח מופת',
  address: 'המסגר 7, תל אביב',
  dateFrom: new Date('2023-10-19T15:00:00.905Z'),
  dateTo: new Date('2023-10-19T19:00:00.905Z'),
  isOpen: true
}, {
  name: 'תל אביב - עזריאלי',
  address: 'בגין 10, בת אביב',
  dateFrom: new Date('2023-10-18T15:00:00.905Z'),
  dateTo: new Date('2023-10-18T17:00:00.905Z'),
  isOpen: false
}, {
  name: 'ירושלים',
  address: 'היכל הפיס ארנה - הכניסה הראשית - זו כתובת ארוכה מאוד',
  dateFrom: new Date('2023-10-20T15:00:00.905Z'),
  dateTo: new Date('2023-10-20T16:00:00.905Z'),
  isOpen: false
}]

export default function Where() {
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
        <div className="flex w-full rounded-lg pr-2 mb-6 shadow-md">
            <Image src={search} alt="search icon"/>
            <input 
              type="search" 
              name="name" 
              placeholder="באיזה עיר אני רוצה לתרום?" 
              className="w-full rounded-lg p-2" />
        </div>

        <div className="flex flex-col gap-2">
          {
            locations.map((location) => (
              <LocationBox key={location.name} location={location} />
              ))
            }
        </div>
      </div>
    </div>
  )
}