import axios from 'axios';
import React, { useState } from 'react'

export default function QuantityCounter({ id, quantity }) {

    async function changeQuantity(id, num) {
        await axios.patch(`http://localhost:8080/cart/${id}`, { quantity: num });
    }

    const [num, setNum] = useState(quantity)

    async function handleDeleteItem() {
        await axios.delete(`http://localhost:8080/cart/${id}`);
    }


    function handleQuantityChange(val) {
        setNum(num + val);
        changeQuantity(id, num)
    }

    return (
        <div className='counter'>
            <button className='counter__button' onClick={() => handleQuantityChange(-1)} disabled={num === 1}>-</button>
            <div className="counter__value">{num}</div>
            <button className='counter__button' onClick={() => handleQuantityChange(1)} >+</button>
            <button className='counter__button' onClick={handleDeleteItem} >X</button>
        </div>
    )
}
