import CartContext from "./cart-contex";

const CartProvider = (props) => {

    const addItemCartHandler = itrem => {};
    const removeItemCartHandler = itrem => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;