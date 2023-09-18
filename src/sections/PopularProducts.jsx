import React from 'react'
import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'
import Button from '../components/Button'
const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
        <div className='flex flex-1 flex-col justify-start gap-5'>
          <div className='flex justify-between'>
            <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
            {/* <a className='grid justify-center items-center border border-2 pr-4 pl-4 border-coral-red rounded-lg'><p className='text-lg'>All products</p></a> */}
            <Button label="All products"/>
          </div>
          <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
            Experience top-notch quality and style with our sought-after selections.
            Discover a world of comfort, design, and value
          </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
       {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts