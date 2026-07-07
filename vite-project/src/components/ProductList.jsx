import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import Hero from "./Hero";
import { ondoSellerProducts } from "../data/ondoSellers";

// Local food/groceries products (moved out of component to avoid useEffect dependency warning)
const localFoodProducts = [
  {
    id: "local-1",
    title: "Premium Palm Oil (5L)",
    price: 3500,
    image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Pure, unrefined palm oil perfect for cooking. 5 liters."
  },
  {
    id: "local-2",
    title: "Basmati Rice (5kg)",
    price: 2800,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Long grain basmati rice, premium quality. 5kg bag."
  },
  {
    id: "local-3",
    title: "Fresh Tomatoes (1kg)",
    price: 800,
    image: "https://images.unsplash.com/photo-1546470427-227c7369a9b4?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Fresh, ripe tomatoes directly from the farm. 1kg."
  },
  {
    id: "local-4",
    title: "Chicken Eggs (30 pieces)",
    price: 1500,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Fresh farm eggs. 30 pieces tray."
  },
  {
    id: "local-5",
    title: "Groundnut Oil (3L)",
    price: 2200,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Pure groundnut oil for cooking. 3 liters."
  },
  {
    id: "local-6",
    title: "Garri (Yellow, 5kg)",
    price: 1800,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Processed cassava flakes (garri). 5kg bag."
  },
  {
    id: "local-7",
    title: "Fresh Onions (1kg)",
    price: 500,
    image: "https://images.unsplash.com/photo-1590092308527-38f5f89d0f4c?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Fresh red onions. 1kg."
  },
  {
    id: "local-8",
    title: "Pepper (Scotch Bonnet, 500g)",
    price: 600,
    image: "https://images.unsplash.com/photo-1566041827250-9c0b2802d02f?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Fresh scotch bonnet pepper. 500g."
  },
  {
    id: "local-9",
    title: "Semovita (5kg)",
    price: 2500,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Premium semovita for swallow. 5kg pack."
  },
  {
    id: "local-10",
    title: "Spaghetti (500g)",
    price: 400,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Italian spaghetti. 500g pack."
  },
  {
    id: "local-11",
    title: "Custard (500g)",
    price: 550,
    image: "https://images.unsplash.com/photo-1557637138-75c46b9858e4?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Instant custard powder. 500g."
  },
  {
    id: "local-12",
    title: "Indomie Pack (40 packs)",
    price: 2800,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80",
    category: "groceries",
    description: "Indomie instant noodles. 40 packs carton."
  }
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
        const fakeProducts = fakeRes.map((p) => ({ ...p, id: `f-${p.id}` }));
        const dummyProducts = dummyRes.map((p) => ({ ...p, id: `d-${p.id}` }));

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

      {/* Filters */}
      <div className="p-6">
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-3 border rounded-lg w-full sm:flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
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

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
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
