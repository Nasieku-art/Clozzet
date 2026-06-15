import logo from "../assets/images/logo.svg";
import { ShoppingCart, Menu } from "lucide-react";
import herobackground from "../assets/images/hero-background.png";

function Nav({cartCount}) {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <img src={logo} alt="" width={100} />
            <ul className="hidden lg:flex gap-7 items-center">
              <li>Home</li>
              <li>About Us</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative text-sm/4">
            <ShoppingCart />
            
          <span className="absolute -right-1 -top-1 bg-teal-200 rounded-2xl px-1">0</span></div>
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
