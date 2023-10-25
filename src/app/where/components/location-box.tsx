import { Location } from "../types"
import { CardTitle } from '../../common/components/titles/card-title'
import { format, getDay, isToday, isTomorrow } from "date-fns"
import clock from '../../images/clock.svg'
import markerLocation from '../../images/marker_location.svg'
import Image from "next/image"
import Link from "next/link"

type Props = {
  location: Location
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

export default function LocationBox({ location: { dateFrom, dateTo, name, address, isOpen} }: Props) {
  const isOpenToday = isToday(dateFrom)
  const isOpenTomorrow = isTomorrow(dateFrom)
  const openDay = displayDay[getDay(dateFrom)]
  const startTime = format(dateFrom, 'H:mm')
  const endTime = format(dateTo, 'H:mm')
  return (
        <div 
          className="rounded-3xl border-slate-200 border p-2" 
          >
          <div className="flex gap-3">
            <div style={{width: '20%'}}>
              {isOpenToday && 'היום'}
              {isOpenTomorrow && 'מחר'}
              {!isOpenToday && !isOpenTomorrow && openDay}
              <br />
              {format(dateFrom, 'dd.MM')}
            </div>
            <div className="w-full flex flex-col gap-1.5">
                <div className="flex gap-2 justify-between items-baseline">
                  <CardTitle>
                    {name}
                  </CardTitle>
                  {isOpen ? 
                    <div className="rounded-full text-xs bg-green-200 text-green-700  px-2 py-1"
                    >• פעיל עכשיו</div> : 
                    <div className="rounded-full text-xs bg-red-200 text-red-700 px-2 py-1"
                    >• סגור לקבלת קהל</div>
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