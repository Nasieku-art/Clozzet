function Summary() {
  return (
    <div className=" bg-gray-300 rounded-md justify-center pb-2">
      <aside>
        <h1 className="font-bold mt-2">Cart Summary</h1>
        <p>Have a promo code? Apply here</p>
        <div className="flex gap-2  rounded-2xl">
          <button className="bg-gray-50 rounded-md">
            <input type="text" placeholder="Promo code(optional)" />
          </button>
          <button className="bg-teal-300 px-4">Apply</button>
        </div>
        <p>Subtotal</p>
        <p>Delivery Fee</p>
        <div className="border-t-2 font-bold">
          <p>Total</p>
        </div>
        <button className="bg-teal-300 justify-center items-center">
          Checkout
        </button>
      </aside>
    </div>
  );
}

export default Summary;
