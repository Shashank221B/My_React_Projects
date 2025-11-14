import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const baseClass = 'cursor-pointer hover:scale-125'
  const activeClass = 'text-yellow-500 scale-110'

  return (
    <div className='px-1 sm:px-10 md:px-20 lg:px-40'>
      <ul className='flex flex-col gap-y-3 items-center lg:flex-row justify-between ml-20 bg-blue-500 px-4 py-4 w-[90%] mt-4 rounded-xl text-white font-semibold text-3xl'>
        <li>
          <NavLink to="/" className={({isActive})=>`${baseClass} ${isActive?activeClass:""}`}>
          HOME
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({isActive})=>`${baseClass} ${isActive?activeClass:""}`}>
          ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={({isActive})=>`${baseClass} ${isActive?activeClass:""}`}>
          PRODUCTS
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({isActive})=>`${baseClass} ${isActive?activeClass:""}`}>
          CART
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar