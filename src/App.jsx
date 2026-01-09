import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/nav.jsx";
import LandingPage from "./components/landingPage.jsx";
import CategoriesSection from "./components/categories.jsx";
import "./App.css";
import ScrollToTop from "./components/scrollToTop";
import CheckoutPage from "./components/Checkout.jsx";
import ShoppingCart from "./components/shoppingCart.jsx";

import ProductDetails from "./components/clothDetails.jsx";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App" style={{ fontFamily: '"Playfair Display", serif' }}>
      <Navbar />
      <ShoppingCart />
      <ScrollToTop />
      {/* <LandingPage /> */}
      {/* <CategoriesSection /> */}
      {/* <ProductDetails /> */}
      <div className="pt-18">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/" element={<ProductDetails />} />
          <Route path="/shop" element={<CategoriesSection />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
