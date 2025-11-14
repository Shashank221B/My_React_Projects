import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Products/> */}

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>

          <Route path='*' element={<Navigate to="/" replace />}/>

        </Routes>
      </main>

      
    </div>
  )
}

export default App