import { StateContext } from "../Context/State";
import { useContext, useEffect } from "react";

function CartItem({ image, title, price }) {
  const { cart, cartCopy, setCartCopy } = useContext(StateContext);

  useEffect(() => {
    const cartCopyItems = JSON.parse(localStorage.getItem("cartCopy"));
    if (cartCopyItems) {
      setCartCopy(cartCopyItems);
    } else {
      setCartCopy(cart);
    }
  }, []);

  useEffect(() => {
    if (cartCopy.length !== 0) {
      localStorage.setItem("cartCopy", JSON.stringify(cartCopy));
    }
  }, [cartCopy]);

  function handleIncrement() {
    setCartCopy((prev) => [...prev, { image, title, price }]);
  }
  function handleDecrement(product) {
    const cartCopyDuplicate = [...cartCopy];
    const productIndex = cartCopyDuplicate.indexOf(product);
    cartCopyDuplicate.splice(productIndex, 1);
    setCartCopy(cartCopyDuplicate);
  }

  return (
    <div className="container mx-auto">
      <div className="flex gap-2 justify-between mt-8 border-t-2">
        <div className="flex mt-2 gap-2">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-cover rounded"
          />

          <div>
            <p className="font-bold">{title}</p>
            <p className="text-gray-400 text-sm">Size: XL</p>
          </div>
        </div>

        <div className="flex items-center rounded-md overflow-hidden">
          <button
            onClick={handleDecrement}
            disabled={
              cartCopy &&
              cartCopy.filter((item) => item.title === title).length === 1
            }
            className="px-3 py-1 border text-lg hover:bg-gray-100"
          >
            −
          </button>
          <span className="px-4 py-1 border-x text-sm">
            {cartCopy && cartCopy.filter((item) => item.title === title).length}
          </span>
          <button
            onClick={handleIncrement}
            className="px-3 py-1 border text-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <p className="font-semibold mt-6">
          {`Ksh ${
            cartCopy &&
            cartCopy
              .filter((item) => item.title === title)
              .reduce((acc, curr) => acc + curr.price, 0)
              .toLocaleString()
          }`}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
