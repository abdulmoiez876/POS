import React,{ useState} from 'react';
import styles from './CartItem.module.css';
import cross from '../../../../../assets/crossBlack.png'

export default function CartItem(props) {
    const [quantity, setQuantity] = useState(1);
    return (
    <div className={styles.cartItem}>
        <img className={`${styles.flexItem} ${styles.pointer}`} src={cross} alt="cross" width="12" height="12"/>
        <img className={styles.flexItem} src={props.src} alt="item" width="50" height="30" />
        <h3 className={styles.flexItem}>{props.title}</h3>
        <div className={`${styles.flexItem} ${styles.centreButtons}`}>
            <button className={`${styles.button} ${styles.pointer}`}
                onClick={() => {
                    setQuantity(quantity - 1);
                }}
            >-</button>
            <h3>{quantity}</h3>
            <button className={`${styles.button} ${styles.pointer}`}
                onClick={() => {
                    setQuantity(quantity + 1);
                }}
            >+</button>
        </div>
        <h4 className={styles.flexItem}>$ {props.price}</h4>
        <h2 className={styles.flexItem}>$ {props.total}</h2>
    </div>
    )
}
