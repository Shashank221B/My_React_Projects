import React, { useEffect, useState } from 'react'
import LazyLoad from './LazyLoad';

const FetchData = () => {

    const [images,setImages] = useState([]);

    useEffect(()=>{

        const fetchImages = async()=>{
            try{
                let response  = await fetch("https://picsum.photos/v2/list?page=1&limit=60");
                let data = await response.json();

                setImages(data);
            }catch(err){
                console.log("Something failed",err);
            }
        }

        fetchImages();

    },[])

  return (
    <div>

        <h1 className='text-3xl text-center font-semibold'>Lazy Loaded Gallery!</h1>

        <div className='grid grid-cols-3 max-w-[800px] mx-auto'>
            {images.map((img,idx)=>{
                const {author,download_url} = img;
               return <LazyLoad src={download_url} alt={`${author}_${idx}`}/>
                
            })
        }
        </div>

    </div>
  )
}

export default FetchData;