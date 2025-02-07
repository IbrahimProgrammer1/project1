import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cartpage from '../components/Cartpage'


const page = () => {
  return (
    <div>
        <Navbar/>
        <Cartpage/>
        <Footer/>
    </div>
  )
}

export default page