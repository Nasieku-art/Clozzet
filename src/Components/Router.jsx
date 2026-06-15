import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Pages/Layout";
import Shop from "../Pages/Shop";
import { useState } from "react";
function Router() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <Layout>
                <Home cart={cart} setCart={setCart} />
              </Layout>
            }
          />
          <Route
            path="Shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Route>
        <Route
          path="Addcart"
          element={
            <Layout>
              <Addcart />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
