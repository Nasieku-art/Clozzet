import logo from "../assets/images/logo.svg";
import Email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";

function Footer1() {
  return (
    <div className="container mx-auto">
    <div className="bg-gray-200">

  
      <div className="text-center py-10 px-4">
        <h2 className="font-serif text-3xl font-semibold mb-6">
          Subscribe & get up to 30% OFF
        </h2>
        <div className="flex justify-center gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 border-teal-400 bg-white rounded-full px-6 py-3 w-80 outline-none"
          />
          <button className="px-6 py-3 bg-teal-400 text-white rounded-full font-medium hover:bg-teal-500 transition">
            Subscribe
          </button>
        </div>
      </div>


      <div className="flex flex-wrap gap-8 px-10 pb-10">

     
        <div className="flex-1 ">
          <img src={logo} alt="Clozzet logo" className="mb-4 w-32" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Offering a unique and stylish perspective on fashion is our number
            one priority. Confuse your mirror by our trendy outfits.
          </p>
        </div>


        <div className="flex-1">
          <h2 className="font-serif font-bold text-base mb-4">Store</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Store Sale</li>
            <li>Collections</li>
          </ul>
        </div>

  
        <div className="flex-1">
          <h2 className="font-serif font-bold text-base mb-4">Help</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Track Your Order</li>
          </ul>
        </div>

      
        <div className="flex-1 ">
          <h2 className="font-bold text-base mb-4">Contact Us</h2>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <img src={Email} alt="email" className="w-5 h-5" />
            <span>contact@clozzet.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
            <img src={phone} alt="phone" className="w-5 h-5" />
            <span>254-700-333-333</span>
          </div>
          <p className="text-sm font-medium mb-2">Follow Us</p>
          <div className="flex gap-3">
            <img src={facebook} alt="facebook" className="w-8 h-8" />
            <img src={instagram} alt="instagram" className="w-8 h-8" />
            <img src={twitter} alt="twitter" className="w-8 h-8" />
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Footer1;