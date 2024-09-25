import React from 'react'
import Card1 from '../../Components/Home/Card1/Card1'
import Card2 from '../../Components/Home/Card2/Card2'
import Card3 from '../../Components/Home/Card3/Card3'
import Carousel from '../../Components/Home/Carousel/Carousel'
import Card from '../../Components/Home/Card/Card'


const Homepage = () => {
  return (
    <>
    {/* Homepage */}
      <Carousel />
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </>
  )
}

export default Homepage
