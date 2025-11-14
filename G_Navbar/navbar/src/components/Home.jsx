import React from 'react'

const Home = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col md:flex-row justify-center items-center px-4 py-8">

      
      <div className="md:border-r-2 text-gray-500 md:pr-6 mb-8 md:mb-0">
        <img 
          className="w-[300px] h-[250px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px] object-cover rounded-lg"
          src="https://t4.ftcdn.net/jpg/00/90/67/29/360_F_90672947_9o36fMzvYpFoS2cvgxACFUR0wleV5Yq5.jpg" 
          alt="shopping_cart"
        />
      </div>

      
      <div className="text-center md:pl-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-500 italic leading-snug">
          Hello you, Welcome to 
          <span className="line-through text-red-600 mx-2">my</span>
          sorry your own shopping space!!
        </h1>
      </div>

    </div>
  )
}

export default Home
