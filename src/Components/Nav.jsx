import logo from "../assets/images/logo.svg";
import { ShoppingCart, Menu } from "lucide-react";
import herobackground from "../assets/images/hero-background.png";
import { Link } from "react-router";

import { useContext } from "react";
import { StateContext } from "../Context/state";

function Nav({ cartCount }) {
  const { cart } = useContext(StateContext);
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <Link to="/">
              {" "}
              <img src={logo} alt="" width={100} />{" "}
            </Link>
            <ul className="hidden lg:flex gap-7 items-center">
              <Link to="/">Home</Link>
              <li>About Us</li>
              <Link to="/shop"> shop</Link>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative text-sm/4">
              <Link to="/cart">
                {" "}
                <ShoppingCart />
              </Link>

              <span className="absolute -right-1 -top-1 bg-teal-200 rounded-2xl px-1">
                {cart && cart.length}
              </span>
            </div>
            <button className="hidden lg:flex">Sign Up</button>
            <button className="hidden lg:flex border-2 rounded-xl  px-6">
              Log In
            </button>
            <Menu className="block lg:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
