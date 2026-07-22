import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ondoSellerProducts } from "../data/ondoSellers";
import { localFoodProducts } from "../data/localFoodProducts";
import { formatNaira, convertUsdToNaira } from "../utils/currency";
import LazyImage from "./LazyImage";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Detect API source by prefix
    let url = "";
    if (id.startsWith("f-")) {
      url = `https://fakestoreapi.com/products/${id.replace("f-", "")}`;
      fetch(url).then(res => res.json()).then(data => setProduct({ ...data, price: convertUsdToNaira(data.price) })).catch(()=>setProduct(null));
    } else if (id.startsWith("d-")) {
      url = `https://dummyjson.com/products/${id.replace("d-", "")}`;
      fetch(url).then(res => res.json()).then(data => setProduct({ ...data, price: convertUsdToNaira(data.price) })).catch(()=>setProduct(null));
    } else if (id.startsWith("p-")) {
      // Seller product stored in localStorage under keys sellerProducts:<sellerId>
      const prefix = "sellerProducts:";
      let found = null;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith(prefix)) continue;
        try {
          const list = JSON.parse(localStorage.getItem(key) || "[]");
          const match = list.find((it) => it.id === id);
          if (match) {
            found = match;
            break;
          }
        } catch {
          continue;
        }
      }
      setProduct(found);
    } else {
      const staticProduct = ondoSellerProducts.find((item) => item.id === id) || localFoodProducts.find((item) => item.id === id);
      setProduct(staticProduct || null);
    }
  }, [id]);

  if (!product) return <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
    <div className="text-center">
      <p className="text-lg font-semibold text-gray-800 mb-2">Product not found</p>
      <p className="text-gray-500">This item may have been removed or the link is invalid.</p>
    </div>
  </div>;

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 bg-white rounded-[2rem] shadow-2xl mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-8 lg:gap-10 items-start">
        <div className="rounded-[28px] overflow-hidden bg-gray-100 shadow-inner">
          <LazyImage
            src={product.image || product.thumbnail || "https://via.placeholder.com/300"}
            alt={product.title}
            wrapperClassName="w-full h-[420px]"
            className="w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">{product.category || "Featured"}</p>
            <h2 className="text-4xl font-extrabold text-gray-900">{product.title}</h2>
            <p className="text-sm text-gray-500">Sold by {product.sellerName || "Marketplace"}</p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-5 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">{formatNaira(product.price)}</span>
              <span className="text-sm text-gray-600">Fast delivery available</span>
            </div>
            {product.brand && <p className="text-sm text-gray-600">Brand: <span className="font-semibold text-gray-900">{product.brand}</span></p>}
            <p className="text-sm text-gray-600">Product ID: <span className="font-medium text-gray-900">{product.id}</span></p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Product Description</h3>
              <p className="text-gray-700 leading-relaxed mt-3">{product.description || "No description available for this product."}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold text-gray-900">{product.category || "General"}</p>
              </div>
              <div className="rounded-3xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-semibold text-gray-900">In stock</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-3xl text-lg font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;