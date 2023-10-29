import React from 'react'

const BulletSVG = ({ classes }: Props) => {
  return (
    <svg className={`align-middle overflow-hidden ${classes}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 640c-70.656 0-128-57.344-128-128s57.344-128 128-128 128 57.344 128 128-57.344 128-128 128z" fill="" /></svg>
  )
}

export default BulletSVG

type Props = {
  classes: string
}