import mission from "../assets/images/Mission.png";
import vision from "../assets/images/vision.png";
import value from "../assets/images/values.png"

function Cardy() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-20 justify-center mt-5 mb-5">

       
        <div className="bg-gray-100 rounded-xl shadow-md p-6 flex-1 flex flex-col items-center text-center">
          <div className="bg-teal-400 rounded-full p-6 mb-4"> <img src={mission} alt="Mission" className="" /></div>
          <h3 className="font-bold text-lg mt-2 mb-2">Mission</h3>
          <p className="text-wrap">
            To innovate, to lead, to enhance, to provide best-value products and
            services to global customers and enhance the quality of life for our
            customers and employees.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md p-6 flex-1 flex flex-col items-center text-center">
          <div className="bg-teal-400 rounded-full p-6 mb-4"><img src={vision} alt="Vision" className="" /></div>
          <h3 className="font-bold text-lg mt-2 mb-2">Vision</h3>
          <p>
            To be a global leader in fashionknit & fashion outerwear by
            empowering innovation and design to provide total customer
            satisfaction.
          </p>
        </div>

        
        <div className="bg-gray-100 rounded-xl shadow-md p-6 flex-1 flex flex-col items-center text-center">
          <div className="bg-teal-400 rounded-full p-6 mb-4"><img src={value} alt="" className="" /></div>
  <h3 className="font-bold text-lg mt-2 mb-2">Core Values</h3>
  <ul className="text-center list-disc">
    <li>Passion</li>
    <li>Performance</li>
    <li>Simplicity</li>
    <li>Togetherness</li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default Cardy;