import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import Hero from "./Hero";
import { ondoSellerProducts } from "../data/ondoSellers";
import { localFoodProducts } from "../data/localFoodProducts";
import { convertUsdToNaira } from "../utils/currency";

const categories = [
  { title: "Fashion", color: "bg-orange-100", emoji: "👗" },
  { title: "Supermarket", color: "bg-lime-100", emoji: "🛒" },
  { title: "Electronics", color: "bg-blue-100", emoji: "📱" },
  { title: "Home", color: "bg-sky-100", emoji: "🏠" },
  { title: "Beauty", color: "bg-pink-100", emoji: "💄" },
  { title: "Baby", color: "bg-violet-100", emoji: "🍼" },
  { title: "Sports", color: "bg-teal-100", emoji: "⚽" },
  { title: "Deals", color: "bg-red-100", emoji: "🔥" },
];

const promoCards = [
  {
    title: "Awoof of the Month",
    subtitle: "Special discounts on top picks",
    badge: "Up to 80% off",
    className: "bg-gradient-to-r from-orange-500 to-yellow-400 text-white",
  },
  {
    title: "Clearance Sales",
    subtitle: "Hot prices on clearance items",
    badge: "Lowest prices",
    className: "bg-gradient-to-r from-sky-500 to-blue-500 text-white",
  },
  {
    title: "Zevoria Force",
    subtitle: "Fast shipping, trusted sellers",
    badge: "Best Seller",
    className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();



  // Fetch products from both APIs
  useEffect(() => {
    const loadData = async () => {
      try {
        const [fakeRes, dummyRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products").then((res) => res.json()),
          fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => data.products),
        ]);

        // Prefix IDs to avoid conflicts
        const fakeProducts = fakeRes.map((p) => ({ ...p, id: `f-${p.id}`, price: convertUsdToNaira(p.price) }));
        const dummyProducts = dummyRes.map((p) => ({ ...p, id: `d-${p.id}`, price: convertUsdToNaira(p.price) }));

        // Combine all products including local food products and Ondo seller products
        const combined = [...localFoodProducts, ...ondoSellerProducts, ...fakeProducts, ...dummyProducts].map((p) => ({
          ...p,
          sellerId: p.sellerId || "platform",
          sellerName: p.sellerName || (p.id && p.id.startsWith("local-") ? "Local Vendor" : "Marketplace"),
          sellerLocation: p.sellerLocation || "Global",
        }));
        setProducts(combined);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadData();
  }, []);

  // Filter logic (search + category)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero only at top */}
      <Hero />

      {/* Category strip */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((categoryItem) => (
              <button
                key={categoryItem.title}
                onClick={() => setCategory(categoryItem.title.toLowerCase())}
                className={`${categoryItem.color} flex-shrink-0 rounded-2xl px-4 py-3 text-sm font-semibold shadow-sm transition hover:shadow-md`}
              >
                <span className="mr-2">{categoryItem.emoji}</span>
                {categoryItem.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Promo banners */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {promoCards.map((promo) => (
            <div key={promo.title} className={`${promo.className} rounded-3xl p-6 relative overflow-hidden shadow-lg`}>
              <div className="absolute inset-0 opacity-20 bg-white" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3">{promo.badge}</p>
                <h2 className="text-xl sm:text-2xl font-extrabold mb-2">{promo.title}</h2>
                <p className="text-sm opacity-90 mb-5">{promo.subtitle}</p>
                <button className="bg-white text-gray-900 font-semibold rounded-full px-5 py-2 shadow-sm hover:bg-gray-100 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Top Picks for You</h1>
            <p className="text-sm text-gray-600 mt-1">Explore trending deals and fresh arrivals.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setCategory("all")}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              All
            </button>
            <button
              onClick={() => setCategory("groceries")}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Groceries
            </button>
            <button
              onClick={() => setCategory("electronics")}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Electronics
            </button>
          </div>
        </div>

        <div className="mb-6 bg-white rounded-3xl shadow-sm p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Search for products, brands and categories"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:border-orange-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus:outline-none focus:border-orange-500"
            >
              <option value="all">All Categories</option>
              <option value="groceries">Groceries & Foodstuff</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="phones">Phones</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelry</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No products found. Try adjusting your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
