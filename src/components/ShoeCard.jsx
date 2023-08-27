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
        ShoeCard
    </div>
  )
}

export default ShoeCard