import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, BigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${BigShoeImg === imgURL ?'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}>
        <div className='flex justify-center items-center bg-card bg-cover bg-center rounded-xl sm:h-40 sm:w-40 max-sm:p-4'>
          <img src={imgURL.thumbnail} alt='shoe collection' width={120} height={103} className='object-contain'/>
        </div>
    </div>
  )
}

export default ShoeCard