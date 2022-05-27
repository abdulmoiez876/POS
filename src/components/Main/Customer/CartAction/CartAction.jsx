import React from 'react'
import classes from "./CartAction.module.css"

const CartAction = () => {
  return (
    <div className={classes.box}>
        <div className={classes.empty}>
            <button className={classes.emptyCart}>Empty</button>
        </div>
        <div className={classes.btns}>
        <button className={`${classes.btn} ${classes.note}`}>Add Note</button>
        <button className={`${classes.btn} ${classes.discount}`}>ADD FEE OR DISCOUNT</button>
        <button className={`${classes.btn} ${classes.coupan}`}>APPLY COUPAN</button>
        <button className={`${classes.btn} ${classes.shipping}`}>SHIPPING</button>
        <button className={`${classes.btn} ${classes.suspend}`}>SUSPEND AND SAVE CART</button>
        <button className={classes.pay}>PAY</button>
        </div>
    </div>
  )
}

export default CartAction