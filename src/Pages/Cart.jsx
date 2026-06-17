import CartContent from "../Components/CartContent";
import CartItem from "../Components/CartItem";
function Cart({Cart}) {
  return (
    <div>
      <CartContent Cart={Cart} />
    </div>
  );
}
export default Cart;
