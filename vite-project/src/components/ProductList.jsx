import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import Hero from "./Hero";

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

        setProducts([...fakeProducts, ...dummyProducts]);
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
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
