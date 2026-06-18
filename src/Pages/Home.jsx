
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import Collection1 from "../Components/Collection1";
import CollectionContent from "../Components/CollectionContent";

function Home() {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <Categories />
        <Featured/>
        <CollectionContent />
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
