import React, { useState } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    
    return (
    <div>
        <CartItem/>
    </div>
    )
}
