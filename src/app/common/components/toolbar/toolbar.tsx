import Image from 'next/image'

import logo from '../../../images/logo_min.svg'

// TODO move texts into i18n data
/* eslint-disable react/no-unescaped-entities */

export default function Toolbar() {
      return (
            <div>
                  <Image src={logo} alt="" />
            </div>
      )
}
