import React from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons/index'
const Hero = () => {
  return (
    <section id="home" className='w-full p-2 flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className=''>Our Summer Collection</p>
        <h1 className=''>
          <span>The New Arrival</span>   
          <br/>
          <span className=''>Nike</span>
          Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight}/>
      </div>
    </section>
  )
}

export default Hero