import about from "../assets/images/about-bg.jpg"

function About() {
  return (
    <div className="container mx-auto">
        <div className="relative">
  <img src={about} alt="" className="w-full mt-8" />
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <h1 className="text-black text-6xl font-bold bg-amber-50">About Us</h1>
  </div>
</div>
    </div>
  );
}
export default About;
