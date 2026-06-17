import CartItem from "./CartItem";
import Summary from "./Summary";

function CartContent({ cart=[]}) {
  let content;

  if (cart.length === 0) {
    content = <p className="text-center text-gray-400 py-10">Cart is empty</p>;
  } else {
    content = cart.map((product, index) => (
      <CartItem
        key={index}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    ));
  }

  return (                                        
    <div className="container mx-auto mt-8">
      <div className="flex gap-2">
        <div className="border border-gray-300 bg-gray-100 rounded-md flex-1">
          <ul className="flex justify-between px-10 py-4 font-bold text-lg">
            <li>Product</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>
          {content}                              
        </div>
        <Summary />
      </div>
    </div>
  );
}                                                

export default CartContent;