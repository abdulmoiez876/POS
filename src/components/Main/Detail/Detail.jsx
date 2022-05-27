import React from "react";
import classes from "./Detail.module.css"
import Item from "../Product/Item";

const Detail = (props) => {
  const detailsArray = props.itemsToBeDisplayed;
  
  return (
    <div className={classes.container}>
        <div className={classes.back} onClick={props.onBack}>
          Back
        </div>
      <div className={classes.box}>
        {
          detailsArray.map((item) => {
            return (
              <Item
                src={item.src}
                title={item.title}
                price={item.price}
                cat={item.cat}
                key={item.title}
              />
            )
          })
        }
        {/* <Item src={smoothie} title="Strawberry Shake" price="250" cat={false}></Item>
        <Item src={bshake} title="Banana Shake" price="450" cat={false}></Item> */}
      </div>
    </div>
  );
};

export default Detail;
