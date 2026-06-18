import { Search } from "lucide-react";
function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="mt-10 w-[50%] sm:w-full">
            <h1 className="font-bold p-2 text-4xl">
              Choose the look <br></br>that{" "}
              <span className="text-teal-300">suits</span> you best
            </h1>
            <p className="p-4 leading-relaxed mx-w-md">
              Every day is a fashion show & the world is your runway. Clozzet will
              elevate your wardrobe with the best collections. Be exclusive, Be
              Devine, Be yourself. Explore outfits that will make you comfortably
              beautiful.True style never dies
            </p>
            <div className="flex gap-4">
              <button className="rounded-2xl px-12 bg-teal-300">
                Shop Now
              </button>
              <button className="border-gray-200 border rounded-2xl px-6">
                <span className="text-teal-300 font-bold">About Us</span>
              </button>
            </div>

            <br></br>
            <div className="flex gap-4 border-2 border-gray-200 rounded-full w-64 px-2 py-1">
              <search>
                <Search />
              </search>
              <input type="text" placeholder="search" />
            </div>
          </div>

          <div className="w-[50%] flex justify-center">
            <img src="src/assets/images/hero-image.png" alt="" className="h-[80vh] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;