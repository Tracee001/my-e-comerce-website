import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import CustomerAccount from "./pages/CustomerAccount";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { seedDefaultSellers } from "./utils/auth";
import { seedDefaultSellerProducts } from "./utils/products";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  useEffect(() => {
    seedDefaultSellers();
    seedDefaultSellerProducts();
  }, []);
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/register" element={<CustomerRegister />} />
        <Route path="/customer/account" element={<CustomerAccount />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => (
  <CartProvider>
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  </CartProvider>
);

export default App;