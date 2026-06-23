import login from "../assets/images/login.png";
import google from "../assets/images/google-color-icon.png";
import { Link } from "lucide-react";

function Loginpage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex gap-10 items-center min-h-[90vh]">

        <div className="hidden lg:block lg:w-[50%]">
          <img src={login} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>

        <div className="flex-1 flex flex-col gap-3">
           <div className="text-center flex-1">
          <h1 className="text-black font-bold text-4xl">
           
          </h1>
        </div>
          <button className="border-gray-300 border rounded-xl py-2 mt-2 w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none w-full px-2"
            />
          </button>

          <button className="border-gray-300 border rounded-xl py-2 mt-2 w-full">
            <input
              type="password"
              placeholder="Password"
              className="outline-none w-full px-2"
            />
          </button>

          <button className="bg-teal-400 text-white font-bold rounded-xl py-3 mt-2 w-full text-lg text-center">
            Login to your Account
          </button>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="mt-2">
            <button className="border-gray-300 border rounded-xl px-6 py-2 flex items-center justify-center gap-2 w-full">
              <img src={google} alt="google logo" className="w-6 h-6" />
              <span className="text-blue-400 font-bold">Sign Up With Google</span>
            </button>
          </div>

          <div className="mt-2 mb-2 text-center">
            <p>
              Do you Have An Account?
              <Link to ="/signupage"> <span className="text-teal-500 font-semibold cursor-pointer"> Sign Up for Free</span></Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Loginpage;