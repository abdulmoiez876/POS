import React from 'react'
import AddCard from '../../AddProduct/AddCard'
import classes from "./Feature.module.css"

const Feature = () => {
  return (
    <div className={classes.box}>
      <AddCard></AddCard>
    </div>
  )
}

export default Feature