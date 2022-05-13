import React from 'react'

export default function Product({ title, image, rating, description }) {
    // { console.log(image) }
    return (
        < div className="product" >
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <button>Add to Cart</button>
            <h4>{title}</h4>
            <p>{description}</p>
        </div >
    )
};
