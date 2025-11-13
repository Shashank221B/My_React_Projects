import React, { useState } from 'react'
import ModalView from './components/ModalView'

const App = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-7xl mb-10 font-bold text-blue-800'>E_Modal</h1>
      <button onClick={()=>{setOpenModal(true)}} className='border-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-900 text-white text-2xl font-semibold cursor-pointer hover:scale-200'>ShowModal</button>
      {openModal && <ModalView closeModal={()=>{setOpenModal(false)}}/>}
    </div>
  )
}

export default App