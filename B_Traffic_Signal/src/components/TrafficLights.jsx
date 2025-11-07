import React, { useEffect, useState } from 'react'

const TrafficLights = () => {

    const [active,setActive] = useState(1);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setActive((prev)=>(prev+1)%3)
        },1000)

        return ()=>clearInterval(interval);
    },[])

  return (
    <div className='border-2 rounded-xl'>
        <div className='flex gap-9 m-10'>
            <div className={`${active===0?"bg-red-700" : "bg-red-100"} size-30 border-2 rounded-full text-white`}></div>
            <div className={`${active===1?"bg-orange-500" : "bg-red-100"} size-30 border-2 rounded-full text-white`}></div>
            <div className={`${active===2?"bg-green-700" : "bg-red-100"} size-30 border-2 rounded-full text-white`}></div>
            
        </div>
    </div>
  )
}

export default TrafficLights;