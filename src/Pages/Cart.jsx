import CartContent from "../Components/CartContent";
import CartItem from "../Components/CartItem";
import { useState } from "react";
import { useEffect } from "react";

import { StateContext } from "../Context/state";
import { useContext } from "react";

function Cart() {
  const {cart,setCartCopy}=useContext(StateContext)

  useEffect(() => {
    setCartCopy([...cart])
  }, []);
  return (
    <div>
      <CartContent  />
    </div>
  );
}
export default Cart;
