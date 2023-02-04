import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    var cartItems = <ul className={classes['cart-items']}>
        {
            [{id: 'm1', name: 'Cohiba',price: 22.99,}].map(
            c => <li key={c.id}>{c.name}</li>)
            }
    </ul>
  return (
    <Modal onClickBackdrop={props.onHide}>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.55</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart