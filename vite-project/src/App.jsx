import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Tax from "./pages/Tax";
import Payment from "./pages/Payment";

const AppContent = () => {
  const location = useLocation();
  // Normalize path to handle trailing slash and case
  const normalizedPath = location.pathname.replace(/\/+$/, '').toLowerCase();
  const showFooter = normalizedPath !== "/tax";

  return (
    <>
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
        <Route path="/tax" element={<Tax />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </CartProvider>
);

export default App;