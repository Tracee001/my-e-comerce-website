import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Detect API source by prefix
    let url = "";
    if (id.startsWith("f-")) {
      url = `https://fakestoreapi.com/products/${id.replace("f-", "")}`;
    } else if (id.startsWith("d-")) {
      url = `https://dummyjson.com/products/${id.replace("d-", "")}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={product.image || product.thumbnail || "https://via.placeholder.com/300"}
          alt={product.title}
          className="w-full md:w-80 h-80 object-cover rounded-xl bg-gray-100"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          {product.brand && <p className="text-lg text-gray-600 mb-2">{product.brand}</p>}
          <p className="text-xl text-red-600 font-bold mb-4">${product.price}</p>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;