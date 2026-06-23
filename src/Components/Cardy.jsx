import mission from "../assets/images/Mission.png";
import vision from "../assets/images/vision.png";

function Cardy() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-20 justify-center">

       
        <div className="bg-pink-300 rounded p-4">
          <img src={mission} alt="Mission" className="mx-auto" />
          <h3 className="font-bold text-lg mt-2 mb-2">Mission</h3>
          <p className="text-wrap">
            To innovate, to lead, to enhance, to provide best-value products and
            services to global customers and enhance the quality of life for our
            customers and employees.
          </p>
        </div>

        <div className="bg-teal-300 rounded p-4">
          <img src={vision} alt="Vision" className="mx-auto" />
          <h3 className="font-bold text-lg mt-2 mb-2">Vision</h3>
          <p>
            To be a global leader in fashionknit & fashion outerwear by
            empowering innovation and design to provide total customer
            satisfaction.
          </p>
        </div>

        
        <div className="bg-amber-200 rounded p-4">
          <h3 className="font-bold text-lg mt-2 mb-2">Core Values</h3>
          <ul className="list-disc list-inside">
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