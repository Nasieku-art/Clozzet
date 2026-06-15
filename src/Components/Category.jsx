import jacket from "../assets/images/jacket.png";
function Category({ image, title }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center ">
        <img src={image} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600 text-center capitalize ">
          {title}
        </p>
      </div>
    </div>
  );
}
export default Category;
