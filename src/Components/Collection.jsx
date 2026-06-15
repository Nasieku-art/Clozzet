
function Collection({ image, title, price,cart,setCart}) {
  
  const button = e.target;
  function handleAddToCart(e, product) {
    console.log(product);
    if (e.target.textContent.toLowerCase() === "add to cart") {
      setCart((prev) => [...prev, product]);
      e.target.textContent = "added to cart".toLocaleUpperCase();
    }
  }
  return (
    <div className="w-40 h-50">
      <div className="w-full h-full bg-gray-200 relative flex justify-center group">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <button
          onClick={(e) => handleAddToCart(e, { image, title, price })}
          className="bg-teal-300 rounded-b-xl absolute bottom-0 w-[93%] my-1 hidden group-hover:block"
        >
          ADD TO CART
        </button>
      </div>
      {console.log(cart)}
      <div className="flex">
        <p>{title}</p> <span className="bg-transparent opacity-40">🩶</span>
      </div>
      <p>{price}</p>
    </div>
  );
}

export default Collection;
