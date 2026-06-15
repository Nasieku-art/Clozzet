
function Collectionshop({ image, title, price}) {

  return (
    <div className="flex justify-center mt-10">
      <div className="w-40 h-50">
        <div className="w-full h-full relative flex justify-center group">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <button  className="bg-teal-300 rounded-b-xl absolute bottom-0 w-[93%] my-1 hidden group-hover:block">
            ADD TO CART
          </button>
        </div>
        <div className="flex">
          <p>{title}</p> <span className="bg-transparent opacity-40">🩶</span>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
}
export default Collectionshop;
