import { StateContext } from "../Context/State";
import { useContext } from "react";

function Summary() {
  const { cartCopy } = useContext(StateContext);

  const deliveryFee = 450;
  const subtotal = cartCopy.reduce((acc, curr) => acc + curr.price, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-gray-300 rounded-md pb-2 w-72 shrink-0 p-4">
      <aside>
        <h1 className="font-bold mt-2 text-lg">Cart Summary</h1>
        <p className="text-sm mt-1">Have a promo code? Apply here</p>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Promo code(optional)"
            className="bg-gray-50 rounded-md px-2 py-1 text-sm flex-1"
          />
          <button className="bg-teal-300 px-4 rounded-md">Apply</button>
        </div>

        <div className="flex justify-between mt-3">
          <p>Subtotal</p>
          <p>{`KSh ${subtotal.toLocaleString()}`}</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>{`KSh ${deliveryFee.toLocaleString()}`}</p>
        </div>

        <div className="border-t-2 font-bold mt-2 flex justify-between">
          <p>Total</p>
          <p>{`KSh ${total.toLocaleString()}`}</p>
        </div>

        <button className="bg-teal-300 w-full py-2 rounded-md font-bold mt-3">
          Checkout
        </button>
      </aside>
    </div>
  );
}

export default Summary;
