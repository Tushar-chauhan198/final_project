import React from 'react'
import Product from './Product'

export default function RenderProducts({ productData }) {
    return (
        <div>
            <h1 style={{ marginTop: "100px" }}>E-Commerce Website</h1>
            <div className='product-container'>
                {productData && productData.map(prod => <Product {...prod} key={prod.id} />)}
            </div>
        </div >
    )
}
