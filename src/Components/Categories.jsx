import Category from "./Category";
import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import tshirt from "../assets/images/tshirt.png";
import dress from "../assets/images/dress.png";
import jeans from "../assets/images/jeans.png";
import shoe from "../assets/images/shoe.png";
import sweater from "../assets/images/sweater.png";

function Categories() {
  return (
    <section className=" Container ">
      <h2 className="text-center mt-6 p-2 font-bold">Top Categories</h2>
      <div className="flex justify-center gap-6 mt-15 flex-wrap">
        <Category image={jacket} title="jackets" />
        <Category image={handbag} title="handbag" />
        <Category image={tshirt} title={"tshirt"}/>
        <Category image={dress} title={"dress"} />
        <Category image={jeans} title={"jeans"} />
        <Category image={shoe} title={"shoe"} />
        <Category image={sweater} title={"sweater"} />
      </div>
    </section>
  );
}

export default Categories;
