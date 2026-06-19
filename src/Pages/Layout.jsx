import { StateContext } from "../Context/State";
import { useContext } from "react";

import Nav from "../Components/Nav";
import Footer1 from "../Components/Footer1";

function Layout({ children }) {
  const { cart } = useContext(StateContext);
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer1 />
      </footer>
    </div>
  );
}
export default Layout;
