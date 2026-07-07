const PREFIX = "sellerOrders:";

function keyFor(sellerId) {
  return `${PREFIX}${sellerId}`;
}

export function getOrders(sellerId) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(sellerId)) || "[]");
  } catch {
    return [];
  }
}

export function saveOrders(sellerId, orders) {
  localStorage.setItem(keyFor(sellerId), JSON.stringify(orders));
}

// Generate simple mock orders for a seller based on their products if none exist.
export function ensureMockOrders(sellerId, products = []) {
  const existing = getOrders(sellerId);
  if (existing && existing.length > 0) return existing;

  // Create few mock orders
  const orders = [];
  for (let i = 0; i < Math.min(8, Math.max(1, Math.floor(products.length / 1 || 1))); i++) {
    const product = products[i % products.length] || { price: 1000 };
    const qty = Math.floor(Math.random() * 5) + 1;
    orders.push({
      id: `o-${Date.now()}-${i}`,
      productId: product.id || null,
      amount: (Number(product.price) || 0) * qty,
      qty,
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
    });
  }
  saveOrders(sellerId, orders);
  return orders;
}

export function getTotals(sellerId) {
  const orders = getOrders(sellerId);
  const totalOrders = orders.length;
  const revenue = orders.reduce((s, o) => s + (Number(o.amount) || 0), 0);
  return { totalOrders, revenue };
}
