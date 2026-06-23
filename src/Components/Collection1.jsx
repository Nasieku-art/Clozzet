
function Collection1({ bg, image, label }) {
  return (
    <div
      className={`relative ${bg} rounded-lg overflow-hidden fle items-end h-64`}
    >
      <div className="absolute bottom-6 left-6 z-10 self-end">
        <p className="text-xs font-semibold">Collection</p>
        <p className="text-xl font-semibold mt-1">{label}</p>
        <button className="mt-2 text-sm font-bold flex items-center gap-1 ">
          Shop Now
        </button>
      </div>
<div className="col-start-2 flex items-end justify-center h-full"> <img
        src={image}
        alt={label}
        className="absolute right-0 bottom-0 h-full object-contain"
      /></div>
    </div>
  );
}

export default Collection1;
