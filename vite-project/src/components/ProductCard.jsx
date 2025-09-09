import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image || product.thumbnail || "https://via.placeholder.com/150"}
          alt={product.title || "Product"}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 truncate">
          {product.title || "No Title"}
        </h3>

        {product.brand && (
          <p className="text-sm text-gray-500">{product.brand}</p>
        )}

        <p className="font-bold text-xl text-red-600 mt-2">
          ${product.price ? product.price : "N/A"}
        </p>

        {/* Spacer to push buttons down */}
        <div className="flex-grow" />

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-red-600 text-white font-medium py-2 rounded-xl hover:bg-red-700 transition duration-200"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center border border-gray-300 text-gray-700 font-medium py-2 rounded-xl hover:bg-gray-100 transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
