import React from 'react'

const SearchBar = ({searchName,setSearchName}) => {
    const names = ["Dhrishnav","Rakesh","Poorva","Srinivas","Shobha","Shashank"];

    const filteredNames = names.filter((name)=>name.toLowerCase().includes(searchName));

  return (
    <div className='flex flex-col'>
        <input value={searchName} onChange={(e)=>{setSearchName(e.target.value)}} className='w-3/4 sm:w-[1/2] md:w-[1/3] lg:w-[1/4] m-3 placeholder:text-xl sm:placeholder:text-base md:placeholder:text-md lg:placeholder:text-xl border-2 text-3xl px-4 py-2 rounded-xl text-blue-700 font-semibold' type='text' placeholder='Enter text here...'/>

        <div>
        {
            searchName!=="" && filteredNames.map((name,id)=>{
                return <div key={id} className='m-2 text-center p-3 bg-blue-300 text-3xl font-semibold rounded-2xl'>{name}</div>
            })
        }
        </div>
    </div>
  )
}

export default SearchBar;