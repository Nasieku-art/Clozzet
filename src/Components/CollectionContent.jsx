import Collection1 from "./Collection1";
import Mens from "../assets/images/mens.png";
import handbags from "../assets/images/hbags.png";
import watches from "../assets/images/watches.png";
import ladies from "../assets/images/ladies.png";

function CollectionContent() {
  return (
    <section className="max-w-5xl mx-auto mt-6 px-6">
      <div className="grid grid-cols-2 gap-4 py-20 ">
        <Collection1 bg="bg-gray-300" image={Mens} label="Men's Collections" />
        <Collection1
          bg="bg-cyan-100 "
          image={handbags}
          label="Handbag Collections"
        />
        <Collection1
          bg="bg-pink-100 "
          image={watches}
          label="Watch Collections"
        />
        <Collection1
          bg="bg-pink-300  "
          image={ladies}
          label="Ladies Collections"
        />
      </div>
    </section>
  );
}

export default CollectionContent;
