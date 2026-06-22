import SignuPage from "./SignuPage";
import Colleshop from "../Components/Colleshop";
import HeroShop from "../Components/HeroShop";
import Login from "./Login";

function Shop() {
  return (
    <div>
    <HeroShop/>
    <main>
      <Colleshop/>
    </main>
    <section>
      <SignuPage/>
      <Login/>
    </section>
    </div>
    
  );
}
export default Shop;
