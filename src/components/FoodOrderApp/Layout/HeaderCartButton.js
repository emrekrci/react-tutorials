import { useContext, useEffect, useState } from "react/cjs/react.development";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

import classes from "./HeaderCartButton.module.css"


const HeaderCartButton = (props) => {
    const [btnIsHigh, setBtnHigh] = useState(false);
    const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
   }, 0);

   const {items} = cartCtx

   const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ''}`;

   useEffect(() => {
       if(items.length === 0){
           return;
       }
    setBtnHigh(true);
    const timer = setTimeout(()=> {
        setBtnHigh(false);
    }, 300)

    return ()=> {
        clearTimeout(timer)
    }
   }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
            
        </button>
    );
}

export default HeaderCartButton;