
export const CardTitle = ({ children }: Props) => {
  return (
        <h3 className="flex-auto text-base font-semibold text-slate-900">
              {children}
        </h3>
  )
}


type Props = {
      children: string | JSX.Element | JSX.Element[]
}