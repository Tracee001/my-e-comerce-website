// Simple localStorage-based auth helper for sellers (SMEs), customers, and admin
import { ondoSellerAccounts } from "../data/ondoSellers";

const KEY_SELLERS = "sellers";
const KEY_CURRENT_SELLER = "currentSeller";
const KEY_CUSTOMERS = "customers";
const KEY_CURRENT_CUSTOMER = "currentCustomer";
const KEY_CURRENT_ADMIN = "currentAdmin";

export function getSellers() {
  try {
    return JSON.parse(localStorage.getItem(KEY_SELLERS) || "[]");
  } catch {
    return [];
  }
}

export function saveSellers(sellers) {
  localStorage.setItem(KEY_SELLERS, JSON.stringify(sellers));
}

export function seedDefaultSellers() {
  const sellers = getSellers();
  if (sellers.length === 0) {
    const seeded = ondoSellerAccounts.map((seller) => ({
      ...seller,
      approved: false,
      createdAt: new Date().toISOString(),
    }));
    saveSellers(seeded);
  }
}

export function registerSeller({ name, email, phone, password }) {
  const sellers = getSellers();
  if (sellers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
    throw new Error("Email already registered");
  }
  const seller = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    password,
    approved: false,
    createdAt: new Date().toISOString(),
  };
  sellers.push(seller);
  saveSellers(sellers);
  return seller;
}

export function findSellerByEmail(email) {
  return getSellers().find((s) => s.email.toLowerCase() === (email || "").toLowerCase());
}

export function loginSeller(email, password) {
  const seller = findSellerByEmail(email);
  if (!seller) throw new Error("No account found for that email");
  if (!seller.approved) throw new Error("Seller account not approved");
  if (seller.password !== password) throw new Error("Invalid credentials");
  localStorage.setItem(KEY_CURRENT_SELLER, JSON.stringify(seller));
  return seller;
}

export function approveSeller(sellerId) {
  const sellers = getSellers();
  const idx = sellers.findIndex((s) => s.id === sellerId);
  if (idx === -1) throw new Error("Seller not found");
  sellers[idx].approved = true;
  saveSellers(sellers);
  return sellers[idx];
}

export function deleteSeller(sellerId) {
  const sellers = getSellers();
  const filtered = sellers.filter((s) => s.id !== sellerId);
  saveSellers(filtered);
  return filtered;
}

export function logoutSeller() {
  localStorage.removeItem(KEY_CURRENT_SELLER);
}

export function getCurrentSeller() {
  try {
    return JSON.parse(localStorage.getItem(KEY_CURRENT_SELLER) || "null");
  } catch {
    return null;
  }
}

export function getCustomers() {
  try {
    return JSON.parse(localStorage.getItem(KEY_CUSTOMERS) || "[]");
  } catch {
    return [];
  }
}

export function saveCustomers(customers) {
  localStorage.setItem(KEY_CUSTOMERS, JSON.stringify(customers));
}

export function registerCustomer({ name, email, password, phone, address }) {
  const customers = getCustomers();
  if (customers.some((c) => c.email.toLowerCase() === email.toLowerCase())) {
    throw new Error("Email already registered");
  }
  const customer = {
    id: `c-${Date.now()}`,
    name,
    email,
    password,
    phone: phone || "",
    address: address || "",
    createdAt: new Date().toISOString(),
  };
  customers.push(customer);
  saveCustomers(customers);
  return customer;
}

export function findCustomerByEmail(email) {
  return getCustomers().find((c) => c.email.toLowerCase() === (email || "").toLowerCase());
}

export function loginCustomer(email, password) {
  const customer = findCustomerByEmail(email);
  if (!customer) throw new Error("No account found for that email");
  if (customer.password !== password) throw new Error("Invalid credentials");
  localStorage.setItem(KEY_CURRENT_CUSTOMER, JSON.stringify(customer));
  return customer;
}

export function loginAdmin(username, password) {
  const adminUser = { username: "admin", password: "admin123" };
  if (username !== adminUser.username || password !== adminUser.password) {
    throw new Error("Invalid admin credentials");
  }
  localStorage.setItem(KEY_CURRENT_ADMIN, JSON.stringify({ username: adminUser.username }));
  return { username: adminUser.username };
}

export function logoutAdmin() {
  localStorage.removeItem(KEY_CURRENT_ADMIN);
}

export function getCurrentAdmin() {
  try {
    return JSON.parse(localStorage.getItem(KEY_CURRENT_ADMIN) || "null");
  } catch {
    return null;
  }
}

export function getAllSellers() {
  return getSellers();
}

export function getAllCustomers() {
  return getCustomers();
}

export function logoutCustomer() {
  localStorage.removeItem(KEY_CURRENT_CUSTOMER);
}

export function getCurrentCustomer() {
  try {
    return JSON.parse(localStorage.getItem(KEY_CURRENT_CUSTOMER) || "null");
  } catch {
    return null;
  }
}
