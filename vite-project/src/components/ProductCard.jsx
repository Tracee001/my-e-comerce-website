import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  // Check if it's a local product (uses Naira)
  const isLocalProduct = product.id && product.id.startsWith("local-");
  const displayPrice = isLocalProduct 
    ? `₦${product.price.toLocaleString()}` 
    : `$${product.price}`;

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image || product.thumbnail || "https://via.placeholder.com/150"}
          alt={product.title || "Product"}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-xs sm:text-sm md:text-lg text-gray-800 truncate">
          {product.title || "No Title"}
        </h3>

        <p className="text-xs text-gray-500 mt-1">Sold by {product.sellerName || "Marketplace"}</p>

        {product.brand && (
          <p className="text-xs sm:text-sm text-gray-500">{product.brand}</p>
        )}

        <p className="font-bold text-sm sm:text-lg md:text-xl text-red-600 mt-1 sm:mt-2">
          {displayPrice}
        </p>

        {/* Spacer to push buttons down */}
        <div className="flex-grow" />

        {/* Action Buttons */}
        <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-4">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-red-600 text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-red-700 transition duration-200"
          >
            Add
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center border border-gray-300 text-gray-700 text-xs sm:text-sm font-medium py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-gray-100 transition duration-200"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
