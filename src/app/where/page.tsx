import Head from 'next/head'

import LocationBox from './components/location-box'

export default function Where() {
  const locations = [{
    name: 'תל אביב - ביה״ס שבח מופת',
    address: 'המסגר 7, תל אביב',
    dateFrom: '2023-10-15T15:00-19:00',
    isOpen: true
  }, {
    name: 'תל אביב - עזריאלי',
    address: 'בגין 10, בת אביב',
    dateFrom: '2023-10-15T15:00-19:00',
    isOpen: false
  }]
  return (
    <div>
      <Head>
        <title>נקודות התרמה</title>
      </Head>
      <div className='font-medium text-xl'>Logo and such</div>
      <div>Donate in one of:</div>
      <div>
        {
          locations.map(({ name }) => (
            <LocationBox key={name} name={name} />
          ))
        }
      </div>
    </div>
  )
}
