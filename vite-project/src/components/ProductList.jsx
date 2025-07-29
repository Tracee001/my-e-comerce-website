import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
  const loadData = async () => {
    const [fakeRes, dummyRes] = await Promise.all([
      fetch("https://fakestoreapi.com/products").then(res => res.json()),
      fetch("https://dummyjson.com/products").then(res => res.json()).then(data => data.products)
    ]);
    // Prefix IDs to ensure uniqueness
    const fakeProducts = fakeRes.map(p => ({ ...p, id: `f-${p.id}` }));
    const dummyProducts = dummyRes.map(p => ({ ...p, id: `d-${p.id}` }));
    const merged = [...fakeProducts, ...dummyProducts];
    setProducts(merged);
  };
  loadData();
}, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="mb-4 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;