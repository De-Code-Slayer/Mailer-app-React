import React from 'react'

const AppContainer = ({children}) => {
  return (
    <div className='w-[100wh] h-[100vh] inset-0 bg-primary flex justify-center items-center font-popins'>
        <div className='w-[80%] h-[90%] bg-white flex justify-center items-center rounded-2xl'>{children}</div>
    </div>
  )
}

export default AppContainer