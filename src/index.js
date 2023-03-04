import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Home,
  Textbooks,
  Products,
  Signup,
  Login,
  Profile,
  Checkout,
  SingleProduct,
  Cart,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/textbooks" element={<Textbooks />} />
        <Route path="/products" element={<Products />}>
          <Route path="id" element={<SingleProduct />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/textbooks" element={<Textbooks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);