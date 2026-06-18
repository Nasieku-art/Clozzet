import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../Pages/Layout";
import Shop from "../Pages/Shop";
import { useState } from "react";
import Cart from "../Pages/Cart";

function Router() {
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
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
