type Props = {
  name: string
}

export default function LocationBox({ name }: Props) {
  return (
    <div className='rounded-xl'>
      {name}
    </div>
  )
}
