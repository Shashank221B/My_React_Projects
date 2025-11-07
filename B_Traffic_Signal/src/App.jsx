import React from 'react'
import TrafficLights from './components/TrafficLights'

const App = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center p-4'>
      
      <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-center'>
        <span className='text-orange-500'>Traffic</span> <span className='text-green-500'>Lights</span>
      </h1>

      <TrafficLights />
    </div>
  )
}

export default App
