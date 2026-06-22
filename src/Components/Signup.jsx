import googlelogo from "../assets/images/google-color-icon.png"
import signup from "../assets/images/signup.png"

function Signup({image}) {
  return (
    <div className="container mx-auto px-6">
      <div className="flex gap-10 items-center min-h-[90vh]">

        <div className="w-full lg:w-[50%] flex flex-col gap-3">
          <div className="text-center"><h1 className="text-black font-bold text-4xl ">Create An Account</h1></div>
          
          <div className="flex gap-2">
            
            <button className="border-gray-300 py-2 border rounded-xl w-[50%]">
              <input type="text" placeholder="First Name" className="outline-none w-full px-2" />
            </button>
            <button className="border-gray-300 border rounded-xl w-[50%]">
              <input type="text" placeholder="Last Name" className="outline-none w-full px-2" />
            </button>
          </div>

          <div>
            <button className="border-gray-300 border rounded-xl py-2 mt-2 w-full">
              <input type="email" name="" id="" placeholder="Email Address" className="outline-none w-full px-2" />
            </button>
          </div>

          <div>
            <button className="border-gray-300 border rounded-xl py-2 mt-2 w-full">
              <input type="number" name="" id="" placeholder="Phone Number" className="outline-none w-full px-2" />
            </button>
          </div>

          <div>
            <button className="border-gray-300 border rounded-xl py-2 mt-2 w-full">
              <input type="password" name="" id="" placeholder="Password" className="outline-none w-full px-2" />
            </button>
          </div>

          <div>
            <button className="border-gray-300 border rounded-xl py-2 mt-2 w-full">
              <input type="password" name="" id="" placeholder="Confirm Password" className="outline-none w-full px-2" />
            </button>
          </div>

          <div>
            <button className="bg-teal-400 text-white font-bold rounded-xl py-3 mt-2 w-full text-lg text-center">
              Create Account
            </button>
  
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

         
          <div className="mt-2">
            <button className="border-gray-300 border rounded-xl px-6 py-2 flex items-center justify-center gap-2 w-full">
              <img src={googlelogo} alt="google logo" className="w-6 h-6" />
              <span className="text-blue-400 font-bold">Sign Up With Google</span>
            </button>
          </div>

          <div className="mt-2 mb-2 text-center">
            <p>Already Have An Account?
              <span className="text-teal-500 font-semibold cursor-pointer"> Log in</span>
            </p>
          </div>

        </div>

      </div>
       <div className="hidden lg:block lg:w-[50%]">
          <img src={signup} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
export default Signup;