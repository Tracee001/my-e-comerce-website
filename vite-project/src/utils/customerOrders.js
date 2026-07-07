const KEY_PREFIX = "customerOrders:";

function keyFor(customerId) {
  return `${KEY_PREFIX}${customerId}`;
}

export function getCustomerOrders(customerId) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(customerId)) || "[]");
  } catch {
    return [];
  }
}

export function saveCustomerOrders(customerId, orders) {
  localStorage.setItem(keyFor(customerId), JSON.stringify(orders));
}

export function addCustomerOrder(customerId, order) {
  const orders = getCustomerOrders(customerId);
  orders.unshift(order);
  saveCustomerOrders(customerId, orders);
  return orders;
}

export function getPurchasedProducts(customerId) {
  const orders = getCustomerOrders(customerId);
  const products = orders.flatMap((order) => order.items || []);
  return products;
}
