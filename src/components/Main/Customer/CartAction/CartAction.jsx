import React, { useState } from 'react'
import classes from "./CartAction.module.css"
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/cart-slice';
import Pay from './CartActionModels/Pay/Pay';

const CartAction = () => {
  const dispatch = useDispatch();
  const [showPay,setShowPay] = useState(false);

  const emptyCartHandler =()=>{
    dispatch(cartActions.emptyCart());
  };

  const onPayHandler = ()=>{
    setShowPay(true);
  }

  const hidePay = () => {
    setShowPay(false);
  }

  return (
    <>
      <div className={classes.box}>
        <div className={classes.empty}>
          <button className={classes.emptyCart} onClick={emptyCartHandler}>Empty</button>
        </div>
        <div className={classes.btns}>
          <button className={`${classes.btn} ${classes.note}`}>Add Note</button>
          <button className={`${classes.btn} ${classes.discount}`}>ADD FEE OR DISCOUNT</button>
          <button className={`${classes.btn} ${classes.coupan}`}>APPLY COUPAN</button>
          <button className={`${classes.btn} ${classes.shipping}`}>SHIPPING</button>
          <button className={`${classes.btn} ${classes.suspend}`}>SUSPEND AND SAVE CART</button>
          <button className={classes.pay} onClick={onPayHandler}>PAY</button>
        </div>
      </div>
      {showPay&&<Pay onClose={hidePay}/>}
    </>
  )
}

export default CartAction