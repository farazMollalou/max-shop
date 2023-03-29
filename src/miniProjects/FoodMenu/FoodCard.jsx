import React from 'react'
import { useId } from 'react'

function FoodCard({foodDetail}) {

  const cardId = useId()
  // const cardId2 = useId()

  console.log('card id = ', cardId)
  // console.log('img id = ', cardId2)

  return (
    <div className='FoodCard' id={cardId}>
        <img src={foodDetail.img} alt={foodDetail.title} />
        <div className="detail">
            <h4 className="title">{foodDetail.title}</h4>
            <p className="text">{foodDetail.text}</p>
            <span className='food-price'>{foodDetail.price} $</span>
        </div>
    </div>
  )
}

export default FoodCard