import React from 'react'

const ModalView = ({closeModal}) => {
  return (
    <div className='bg-blue-200 fixed w-3/4 h-1/2 flex flex-col justify-center items-center rounded-2xl'>
        
        <h1 className='text-4xl font-semibold m-5'>Inside Modal view</h1>
        <button onClick={()=>closeModal()} className='border-2 font-semibold text-3xl px-5 py-2 cursor-pointer hover:scale-125 m-2 rounded-lg bg-red-700 text-white'>Close it</button>
    </div>
  )
}

export default ModalView