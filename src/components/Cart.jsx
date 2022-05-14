import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

export default function Cart() {
    const URL = "http://localhost:8080/cart";

    const [cartData, setCartData] = useState([]);

    // useEffect(() => getCartData(), []);


    async function getCartData() {
        const files = await axios.get(URL);
        setCartData(files.data);
    }

    console.log(cartData);
    return (
        <>
            <h1 style={{ marginTop: "100px" }}>Welcome to your cart</h1>
            {/* {cartData.map(elem => <CartItem {...elem} />)} */}
        </>
    )
}
