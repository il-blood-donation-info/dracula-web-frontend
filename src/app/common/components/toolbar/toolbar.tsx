import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../images/logo_min.svg'

// TODO move texts into i18n data
/* eslint-disable react/no-unescaped-entities */

export default function Toolbar() {
      return (
            <div className="px-4">
                  <Link href="/" className="w-full">
                        <Image src={logo} alt="" />
                  </Link>
            </div>
      )
}
