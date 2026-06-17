import stripsweater from "../assets/shop-images/knitted-sweater.png";

function CartItem({image,title,price}) {
  return (
    <div className="container mx-auto">
      <div className="flex gap-2 justify-between mt-8 border-t-2 ">
        <div className="flex mt-2 gap-2">
          <img
            src={stripsweater}
            alt="Strip Knitted Sweater"
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-gray-400 text-sm">Size: XL</p>
          </div>
        </div>

        <div className="flex items-center rounded-md overflow-hidden">
          <button className="px-3 py-1 border text-lg hover:bg-gray-100">−</button>
          <span className="px-4 py-1 border-x text-sm">1</span>
          <button className="px-3 py-1 text-lg hover:bg-gray-100">+</button>
        </div>

        <p className="font-semibold mt-6">{price}</p>
      </div>
    </div>
  );
}
export default CartItem;
