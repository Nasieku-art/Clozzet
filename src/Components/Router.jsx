import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Pages/Layout";
import Shop from "../Pages/Shop";
import { useContext, useEffect } from "react";
import Cart from "../Pages/Cart";

import { StateContext } from "../Context/State";
import CartItem from "./CartItem";
import SignuPage from "../Pages/SignuPage";
import Login from "../Pages/Login";
import Aboutus from "../Pages/Aboutus"

function Router() {
  const { cart, setCart } = useContext(StateContext);

  useEffect(() => {
    const CartItems = JSON.parse(localStorage.getItem("cart"));
    if (CartItems) {
      setCart(CartItems);
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="shop"
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
          path="cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="signupage"
          element={
            <Layout>
              <SignuPage />
            </Layout>
          }
        />
        <Route
          path="login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
