import { useState } from 'react';
import Header from './Components/Layout/Header';
import Cigars from './Components/Cigars/Cigars';
import Cart from './Components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  //Controlling visibility of ModalCart via props
  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart
       onHide={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} ></Header>
      <main>
        <Cigars/>
      </main>
    </CartProvider>
  );
}

export default App;
