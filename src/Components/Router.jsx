import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Pages/Layout";
import Shop from "../Pages/Shop";
import { useState } from "react";
import Cart from "../Pages/Cart";

function Router() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <Layout cart={cart} setCart={setCart}>
                <Home cart={cart} setCart={setCart} />
               
              </Layout>
            }
          />
          <Route
            path="Shop"
            element={
              <Layout cart={cart} setCart={setCart}>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout cart={cart} setCart={setCart}>
                <NotFound />
              </Layout>
            }
          />
        </Route>
        <Route
          path="cart"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Cart cart={cart}/>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
