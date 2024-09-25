import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Shop from '../Components/Shop/Shop'
import Singlepage from '../Components/Singlepage/Singlepage'
import Cart from '../Components/Cart/Cart'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Singlepage />} />
      </Routes>
    </div>
  )
}

export default Routing
