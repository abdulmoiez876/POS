import React from 'react'
import classes from "./CartTotal.module.css"
const CartTotal = () => {
  return (
    <div className={classes.box}>
        <div className={classes.subtotal}>
            <span>Subtotal</span>
            <span>Rs 0.00</span>
        </div>
        <hr className={classes.line}></hr>
        <div className={classes.total}>
            <h1>Total</h1>
            <h1>Rs 0.00</h1>
        </div>
    </div>
  )
}

export default CartTotal