import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Products from "./Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./UI/Notification";
import { fetchCartData, sendCartdata } from "./store/cart-actions";

let initialState = true;

function App12() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if(initialState){
      initialState = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartdata(cart));
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App12;
