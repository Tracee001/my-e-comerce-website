import React from "react";
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <img src={product.thumbnail || product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.brand}</p>
      <p className="font-bold text-blue-600">${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="mt-2 bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
