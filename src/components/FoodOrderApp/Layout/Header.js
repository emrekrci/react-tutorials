import React from "react";
import foodImage from "../assests/meals.jpg"
import headerStyle from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={headerStyle.header}>
          <h1>React Meals</h1>
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={headerStyle["main-image"]}>
        <img src={foodImage} alt ="A table full of delicious food!"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
