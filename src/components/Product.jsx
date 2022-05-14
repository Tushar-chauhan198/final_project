import axios from 'axios'
import React from 'react'

export default function Product({ title, image, rating, description, id }) {

    async function handleAddToCart(payload) {
        await axios.post("http://localhost:8080/cart", payload);
    }

    return (
        < div className="product" >
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <button onClick={() => handleAddToCart({ product_id: id, quantity: 1, image, title })}>Add to Cart</button>
            <h4>{title}</h4>
            <p>{description}</p>
        </div >
    )
};
