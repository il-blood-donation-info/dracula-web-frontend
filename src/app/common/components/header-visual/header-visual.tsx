import Image from 'next/image'
import backdropImg from '../../../images/backdrop.svg'

interface Props {
  visual: string
}

const HeaderVisual = ({ visual }: Props) => {
  return (
    <div className="fixed w-full top-0 left-0 right-0">
      <Image src={backdropImg} className="absolute top-0 left-0 right-0 w-full z-0" alt="" />
      <Image src={visual} className="absolute z-10" alt="" />
    </div>
  )
}

export default HeaderVisual