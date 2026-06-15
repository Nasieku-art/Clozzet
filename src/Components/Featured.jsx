import Collection from "./Collection";
import leatherJacket from "../assets/images/leather-jacket.png";
import Roundnecksweatshirts from "../assets/images/sweatshirts.png";
import PleatedPallazotrousers from "../assets/images/Pallazo.png";
import M22DenimJacket from "../assets/images/denim.png";
import Collection1 from "./Collection1";

function Featured({ cart, setCart }) {
  return (
    <div>
      <h2 className="text-center mt-6 p-3 font-bold">Featured Collection</h2>

      <div className="flex gap-4 justify-center py-4">
        <Collection
          image={leatherJacket}
          title=" Brown Leather Jacket"
          price="Ksh 2,250"
          cart={cart}
          setCart={setCart}
        />
        <Collection
          image={Roundnecksweatshirts}
          title="Round-neck Sweatshirts"
          price="Ksh 2,000"
          cart={cart}
          setCart={setCart}
        />
        <Collection
          image={PleatedPallazotrousers}
          title="Pleated Pallazo Trousers"
          price="Ksh 1,800"
          cart={cart}
          setCart={setCart}
        />
        <Collection
          image={M22DenimJacket}
          title="Leather Jacket"
          price="Ksh,1250"
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
}

export default Featured;
