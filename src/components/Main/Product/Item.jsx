import React from 'react'
import classes from './Item.module.css'

const Item = (props) => {
  const clickHandler = () => {
    if(props.cat) {
      props.itemsToBeDisplayed(props.details);
      props.onClick();
    }
    else {
      console.log('item');
      console.log(props.title);
    }
    
  }
  
  return (
    <div className={classes.item} onClick={clickHandler}>
      <img src={props.src} alt="foodpicture" className={classes.pic} />
      <div className={classes.tag}>
          <p>{props.title}</p>
          {!props.cat&&<p>Rs {props.price}</p>}
      </div>
    </div>
  )
}

export default Item