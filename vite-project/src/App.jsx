import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Register from "./pages/Register";

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CartProvider>
);

export default App;