import { getCurrentSeller } from "./auth";
import { ondoSellerProducts } from "../data/ondoSellers";

const PREFIX = "sellerProducts:";

function keyFor(sellerId) {
  return `${PREFIX}${sellerId}`;
}

export function seedDefaultSellerProducts() {
  ondoSellerProducts.forEach((defaultProduct) => {
    const existing = getProducts(defaultProduct.sellerId);
    if (!existing.some((product) => product.id === defaultProduct.id)) {
      existing.push(defaultProduct);
      saveProducts(defaultProduct.sellerId, existing);
    }
  });
}

export function getAllProducts() {
  const products = [...ondoSellerProducts];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(PREFIX)) continue;
    try {
      const list = JSON.parse(localStorage.getItem(key) || "[]");
      products.push(...list);
    } catch {
      continue;
    }
  }
  return products;
}

export function deleteProductById(productId) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(PREFIX)) continue;
    const sellerId = key.replace(PREFIX, "");
    const products = getProducts(sellerId);
    const filtered = products.filter((product) => product.id !== productId);
    if (filtered.length !== products.length) {
      saveProducts(sellerId, filtered);
      return true;
    }
  }
  return false;
}

export function deleteProductsBySeller(sellerId) {
  localStorage.removeItem(keyFor(sellerId));
}

export function getProducts(sellerId) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(sellerId)) || "[]");
  } catch {
    return [];
  }
}

export function saveProducts(sellerId, products) {
  localStorage.setItem(keyFor(sellerId), JSON.stringify(products));
}

export function addProduct(sellerId, { title, price, image, description, sellerName, sellerLocation } = {}) {
  const products = getProducts(sellerId);
  const current = getCurrentSeller();
  const product = {
    id: `p-${Date.now()}`,
    title: title || "Untitled Product",
    price: Number(price) || 0,
    image: image || "https://via.placeholder.com/200",
    description: description || "",
    sellerId: sellerId || (current && current.id) || "platform",
    sellerName: sellerName || (current && current.name) || "Marketplace",
    sellerLocation: sellerLocation || (current && current.location) || "",
    createdAt: new Date().toISOString(),
  };
  products.unshift(product);
  saveProducts(sellerId, products);
  return product;
}

export function updateProduct(sellerId, id, updates) {
  const products = getProducts(sellerId);
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) throw new Error("Product not found");
  products[idx] = { ...products[idx], ...updates };
  saveProducts(sellerId, products);
  return products[idx];
}

export function deleteProduct(sellerId, id) {
  const products = getProducts(sellerId);
  const filtered = products.filter((p) => p.id !== id);
  saveProducts(sellerId, filtered);
  return filtered;
}
