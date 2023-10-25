
export const MainTitle = ({ children }: Props) => {
  return (
        <h1 className="flex-auto text-xl font-semibold text-slate-900">
              {children}
        </h1>
  )
}


type Props = {
      children: string | JSX.Element | JSX.Element[]
}