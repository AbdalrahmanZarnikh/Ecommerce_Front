
const Container = ({children}) => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 py-4 flex flex-col gap-10'>
        {children}
    </div>
  )
}

export default Container