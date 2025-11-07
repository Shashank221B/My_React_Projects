import React from 'react'
import TrafficLights from './components/TrafficLights'


const App = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center mb-10'>
      
      <h1 className='text-9xl font-bold m-10 text-red-700'>C_<span className='text-orange-500'>Traffic</span> <span className='text-green-500'>Lights</span></h1>
      <TrafficLights/>
    </div>
  )
}

export default App