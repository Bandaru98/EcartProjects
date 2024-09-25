import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Cart from '../Components/Cart/Cart'
import Singlepage from '../Components/Singlepage/Singlepage'
import Fetchdata from '../Components/Fetchdata/Fetchdata'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Fetchdata />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:id' element={<Singlepage />} />

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </>
    )
}

export default Routing
