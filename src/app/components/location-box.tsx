import Image from 'next/image'

type Props = {
  name: string
}

export default function Home({ name }: Props) {
  return (
    <div className='rounded-xl'>
      {name}
    </div>
  )
}
