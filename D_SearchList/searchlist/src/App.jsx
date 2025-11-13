import React from 'react'
import SearchBar from './components/SearchBar';
import { useState } from 'react';

const App = () => {

  const [searchName,setSearchName] = useState([]);

  return (
    <div className='flex flex-col min-h-screen w-full justify-center items-center'>
      <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-5 font-bold text-blue-800'>D_Search Your Name Here..</p>
      <SearchBar searchName={searchName} setSearchName={setSearchName}/>

    </div>
  )
}

export default App;