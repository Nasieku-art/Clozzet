import unisex from "../assets/shop-images/unisex.png";
import { ChevronDown } from "lucide-react";
import {ShoppingCart} from "lucide-react"
import heart from "../assets/images/heart.png"

function Singleproduct() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-6">
        <div className="mt-8">
          <img src={unisex} alt="" />
        </div>
        <div className="mt-15 mb-4 flex-1">
          <h1 className="text-teal-400">SHOES</h1>

          <h1 className="text-black text-2xl text-nowrap font-bold">
            Unisex Airforce Sneakers
          </h1>
          <div className="border-b-4 w-[20%] mt-2"></div>
          <p className="font-bold mt-6">Ksh 3500</p>
          <p className="text-balance text-black">
            <p>The sneaker has all sizes which fits to normal size,it is suitable</p>
            <p>for all weather conditions, it is light in weight making it</p>
            <p>comfortable for a long wear. The shoe can be worn by both gender. It</p>
            <p>is suitable for outdoor activities. Buy from our shop, get it</p>
            <p>delivered to your doorstep and slay the whole day.</p>
          </p>
          <div className="flex gap-25 mt-7">
            <div>
              <h2>SELECT SIZE</h2>
              <div className="flex gap-12 border-2 rounded-2xl px-2 items-center border-gray-200 w-fit">
                <p className="pr-3 border-r border-gray-400">40</p>{" "}
                <span className="pl-3">
                  <ChevronDown />
                </span>
              </div>
            </div>
            <div>
              <h2>QUANTITY</h2>
              <div className="flex gap-4 border-gray-200 border-2 rounded-2xl px-3">
                <span className="pr-3 border-r border-gray-400">-</span>
                <p>1</p>
                <span className="pl-3 border-l border-gray-400">+</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button className="bg-teal-300 rounded px-3 flex gap-2 py-2"><span><ShoppingCart /></span>ADD TO CART</button>
<div>
            <button className="flex gap-2 border-2 border-gray-300 text-nowrap px-3 py-2 rounded"><span><img src={heart} alt="" className="w-7" /></span>SAVE TO WISHLIST</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Singleproduct;
