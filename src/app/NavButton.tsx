import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function NavButton({ children }: Props) {
  return (
    <span className="bg-white font-semibold py-2 px-4 border border-white hover:border-gray-500 rounded shadow">
      {children}
    </span>
  )
}
