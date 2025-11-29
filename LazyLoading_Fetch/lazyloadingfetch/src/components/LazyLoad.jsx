import React, { useEffect, useRef, useState } from 'react'

const LazyLoad = ({src,alt}) => {

    const [isVisible,setIsvisible] = useState(false);
    const imageRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                setIsvisible(true);
                observer.disconnect();
            }
        })

        observer.observe(imageRef.current);
    },[])
  return (
    <div className='m-3 rounded-full overflow-hidden'>
        <img
            ref={imageRef}
            src={isVisible?src:""}
            alt={alt}
            className="w-full h-[200px] object-cover bg-gray-200"
        
        />

    </div>
  )
}

export default LazyLoad;