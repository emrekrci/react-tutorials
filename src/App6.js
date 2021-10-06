import React, {useState} from "react";
import Cart from "./components/FoodOrderApp/Cart/Cart";
import Header from "./components/FoodOrderApp/Layout/Header";
import Meals from "./components/FoodOrderApp/Meals/Meals";
import CartProvider from "./components/FoodOrderApp/store/CartProvider";

function App6() {

  const[cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} ></Header>
      <main>
      <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App6;
