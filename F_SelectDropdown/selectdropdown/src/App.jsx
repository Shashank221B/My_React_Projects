import React from 'react'
import Dropdown from './components/Dropdown'

const App = () => {
  return (
    <div className='relative h-screen w-full flex  flex-col justify-center items-center'>
      <h1 className='text-2xl sm:text-3xl md: text-4xl lg:text-6xl font-bold text-blue-900 fixed top-10'>F_Select Dropdown</h1>
      <Dropdown/>
    </div>
  )
}

export default App