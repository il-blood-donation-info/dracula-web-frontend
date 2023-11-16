import { Location } from "../../../types/location"
import { CardTitle } from '../titles/card-title'
import { format, getDay, isToday, isTomorrow } from "date-fns"
import markerLocation from '../../../images/marker_location.svg'
import Image from "next/image"
import Link from "next/link"
import clock from '../../../images/clock.svg'
import BulletSVG from "../bullet-svg"

type Props = {
  location: Location
  onClick: () => {}
}

const displayDay = {
  0: 'ראשון',
  1: 'שני',
  2: 'שלישי',
  3: 'רביעי',
  4: 'חמישי',
  5: 'שישי',
  6: 'שבת',
}

export default function LocationBox({ onClick, location: { openTime, closeTime, name, address, isOpen } }: Props) {
  const isOpenToday = isToday(openTime)
  const isOpenTomorrow = isTomorrow(openTime)
  const openDay = displayDay[getDay(openTime)]
  const startTime = format(openTime, 'H:mm')
  const endTime = format(closeTime, 'H:mm')
  return (
    <div
      className="rounded-xl border-slate-200 border p-2"
      onClick={onClick}
    >
      <div className="flex gap-3">
        <div style={{ width: '20%' }}>
          {isOpenToday && 'היום'}
          {isOpenTomorrow && 'מחר'}
          {!isOpenToday && !isOpenTomorrow && openDay}
          <br />
          {format(openTime, 'dd.MM')}
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <div className="flex gap-2 justify-between items-baseline">
            <CardTitle>
              {name}
            </CardTitle>
            {isOpen ?
              <div className="rounded-full text-xs bg-green-200 text-green-700 pl-2 flex justify-center items-center flex-none ">
                <BulletSVG classes="fill-green-700 w-6 h-6" />
                <div>פעיל עכשיו</div>
              </div> :
              <div className="rounded-full text-xs bg-red-200 text-red-700 pl-2 flex justify-center items-center flex-none "
              >
                <BulletSVG classes="fill-red-700 w-6 h-6" />
                <div>סגור לקבלת קהל</div>
              </div>
            }
          </div>
          <div className="flex gap-2 text-slate-400">
            <Image src={clock} alt="clock icon" /> {startTime} - {endTime}
          </div>
          <div className="flex gap-2 items-start text-slate-500">
            <Image src={markerLocation} className="mt-0.5" alt="marker location icon" /> <Link href="/screening">
              {address}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}