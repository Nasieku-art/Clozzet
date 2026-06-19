import CartItem from "./CartItem";
import Summary from "./Summary";
import { Link } from "react-router";
import { StateContext } from "../Context/State";
import { useContext, useEffect } from "react";

function CartContent() {
  const { cart, setCart, cartCopy, setCartCopy } = useContext(StateContext);

  useEffect(() => {
    if (cartCopy !== 0) {
      localStorage.setItem("cartCopy", JSON.stringify(cartCopy));
    }
  }, [cartCopy]);

  useEffect(() => {
    const cartCopyItems = JSON.parse(localStorage.getItem("cartCopy"));
    if (cartCopyItems) {
      setCartCopy(cartCopyItems);
    } else {
      setCartCopy(cart);
    }
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {cart.length === 0 ? (
        <div>
          <p className="text-center">Your Cart is empty!</p>
          <div className="justify-items-center mt-6">
            <button className="flex bg-teal-300 rounded-md px-2 font-bold text-2xl">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 items-start">
          <div className="border rounded-md flex-1">
            <ul className="flex justify-between px-10 font-bold text-lg border-gray-300 bg-gray-100">
              <li>Product</li>
              <li>Quantity</li>
              <li>Price</li>
            </ul>
            {cart.map((product, index) => (
              <CartItem
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>

          <Summary />
        </div>
      )}
    </div>
  );
}

export default CartContent;
