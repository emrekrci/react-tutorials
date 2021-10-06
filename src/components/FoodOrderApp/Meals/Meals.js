import React from "react";
import CartProvider from "../store/CartProvider";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <CartProvider>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </CartProvider>
  );
};

export default Meals;
