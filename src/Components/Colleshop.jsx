import Collectionshop from "./Collectionshop";
import jeans from "../assets/shop-images/ragged-jeans.png";
import brownjacket from "../assets/images/sweatshirts.png";
import dress from "../assets/shop-images/slim-banquet-dress.png";
import denim from "../assets/images/denim.png";
import leather from "../assets/images/leather-Jacket.png";
import watch from "../assets/shop-images/smartwatch.png";
import denimjeans from "../assets/shop-images/denim-jeans.png";
import brownhandbag from "../assets/shop-images/brown-handbag.png";
import graphic from "../assets/shop-images/graphic-tshirts.png";
import blackjacket from "../assets/shop-images/bomber.png";
import pallazo from "../assets/images/pallazo.png";
import brownshoes from "../assets/shop-images/leather-shoes.png";
import serpenti from "../assets/shop-images/serpenti-forever.png";
import unisexshoes from "../assets/shop-images/Unisex.png";
import bluedress from "../assets/shop-images/cocktail.png";
import offshoulder from "../assets/shop-images/Off-The-Shoulder.png";
import official from "../assets/shop-images/Airsense-Pleated.png";
import smartwatch from "../assets/shop-images/smartwatch.png";
import heels from "../assets/shop-images/ZOOSHI-COBALT.png";
import stripsweater from "../assets/shop-images/knitted-sweater.png";

function Colleshop() {
  return (
    <div className="mt-4 mb-30">
      {/* <h2 className="text-center mt-6 p-3 font-bold">Featured Collection</h2> */}
      <div className="flex gap-4 justify-center py-4">
        <Collectionshop
          image={jeans}
          title="Blue Ragged Jeans"
          price="Ksh 2,250"
        />
        <Collectionshop
          image={brownjacket}
          title="Brown Leather Jacket"
          price="ksh 2,250"
        />
        <Collectionshop
          image={dress}
          title="Slim Banquet Dress"
          price="ksh 10,250"
        />
        <Collectionshop
          image={denim}
          title="Blue Denim jacket"
          price="Ksh 2,250"
        />
      </div>
      <div className="flex gap-4 justify-center py-4">
        <Collectionshop
          image={leather}
          title="Brown Leather Jacket"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={watch}
          title="Quartz Men’s Watch
"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={denimjeans}
          title="Women Denim Jeans"
          price="KSh 2,250"
        />
        <Collectionshop
          image={brownhandbag}
          title="Brown handbag
"
          price="KSh 2,250"
        />
      </div>
      <div className="flex gap-4 justify-center py-4">
        <Collectionshop
          image={graphic}
          title="Unisex Graphic T-shirt
"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={blackjacket}
          title="Black Bomber Jacket

"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={pallazo}
          title="Pleated pallazo Pants
"
          price="KSh 2,250"
        />
        <Collectionshop
          image={brownshoes}
          title="pure Leather Shoes
"
          price="KSh 2,250"
        />
      </div>
      <div className="flex gap-4 justify-center py-4">
        <Collectionshop
          image={serpenti}
          title="Purple Serpenti purse

"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={unisexshoes}
          title="Unisex Airforce Sneakers


"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={bluedress}
          title="Blue Cocktail Dress

"
          price="KSh 2,250"
        />
        <Collectionshop
          image={offshoulder}
          title="Off-Shoulder Crop Top

"
          price="KSh 2,250"
        />
      </div>
      <div className="flex gap-4 justify-center py-4">
        <Collectionshop
          image={official}
          title="Airsense Pleated Pants

"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={smartwatch}
          title="Classy Smart Watch


"
          price="KSh 2,250
"
        />
        <Collectionshop
          image={heels}
          title="Blue Platform Heels

"
          price="KSh 2,250"
        />
        <Collectionshop
          image={stripsweater}
          title="Strip Knitted Sweater

"

          price="KSh 2,250"
        />
      </div>
    </div>
  );
}

export default Colleshop;
