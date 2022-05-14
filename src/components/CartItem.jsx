import React from 'react'
import QuantityCounter from './QuantityCounter'

export default function CartItem({ productId, image, quantity, title, price, id }) {

    return (
        <div className='cartItem'>
            <div className="cartItem__img">
                <img src={image} alt="" />
            </div>
            <div className="cartItem__title">{title}</div>
            <QuantityCounter {...{ id, quantity }} />
        </div>
    )
}
