import React, { useEffect, useState } from 'react'

const TrafficLights = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3)
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='border-2 rounded-xl p-4 flex justify-center items-center'>
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-9'>
        {/* Red Light */}
        <div className={`${active === 0 ? "bg-red-700" : "bg-red-100"} w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-full`}></div>
        
        {/* Orange Light */}
        <div className={`${active === 1 ? "bg-orange-500" : "bg-red-100"} w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-full`}></div>
        
        {/* Green Light */}
        <div className={`${active === 2 ? "bg-green-700" : "bg-red-100"} w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-full`}></div>
      </div>
    </div>
  )
}

export default TrafficLights;
