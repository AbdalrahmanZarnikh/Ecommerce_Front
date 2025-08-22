
const Feature = ({children , title ,desc}) => {
  return (
    <div className="flex gap-[7px] mb-[10px]">
        <div>{children}</div>
        <div><h1 className="font-medium mb-[5px] dark:text-white">{title}</h1>
        <p className="text-sm text-gray-600 dark:text-white/40">{desc}</p></div>
    </div>
  )
}

export default Feature