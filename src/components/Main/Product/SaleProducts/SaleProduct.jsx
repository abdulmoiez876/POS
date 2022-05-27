import React from 'react'
import classes from "./SaleProduct.module.css"
import smoothie from "../../../../assets/smoothie.jpg";
import fries from "../../../../assets/fries.jpg"
import Item from "../Item";
import AddCard from '../../AddProduct/AddCard';

const SaleProduct = () => {
  return (
    <div className={classes.box}>
      <Item src={smoothie} title="StrawBerry Smoothie" price="250" cat={false}></Item>
      <Item src={fries} title="Fries" price="100" cat={false}></Item>
      <AddCard></AddCard>
    </div>
  )
}

export default SaleProduct