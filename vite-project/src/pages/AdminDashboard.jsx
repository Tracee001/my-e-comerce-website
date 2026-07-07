import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentAdmin, logoutAdmin, getAllSellers, getAllCustomers, approveSeller, deleteSeller } from "../utils/auth";
import { getAllProducts, deleteProductById, deleteProductsBySeller } from "../utils/products";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [sellers, setSellers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const current = getCurrentAdmin();
    if (!current) {
      navigate("/admin/login");
      return;
    }
    setAdmin(current);
    setSellers(getAllSellers());
    setCustomers(getAllCustomers());
    setProducts(getAllProducts());
  }, [navigate]);

  const reloadData = () => {
    setSellers(getAllSellers());
    setCustomers(getAllCustomers());
    setProducts(getAllProducts());
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login");
  };

  const handleApproveSeller = async (id) => {
    try {
      approveSeller(id);
      reloadData();
    } catch (err) {
      alert(err.message || "Unable to approve seller");
    }
  };

  const handleRemoveSeller = (id) => {
    if (!confirm("Remove this seller and all their products?")) return;
    deleteSeller(id);
    deleteProductsBySeller(id);
    reloadData();
  };

  const handleDeleteProduct = (id) => {
    if (!confirm("Delete this product?")) return;
    deleteProductById(id);
    reloadData();
  };

  if (!admin) return null;

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage sellers, customers, and products from one place.</p>
          </div>
          <button onClick={handleLogout} className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">Logout</button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Sellers</p>
            <p className="text-3xl font-bold">{sellers.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Customers</p>
            <p className="text-3xl font-bold">{customers.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">Products</p>
            <p className="text-3xl font-bold">{products.length}</p>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sellers</h2>
              <button onClick={reloadData} className="text-sm text-teal-600 hover:text-teal-800">Refresh</button>
            </div>
            <div className="space-y-4">
              {sellers.map((seller) => (
                <div key={seller.id} className="rounded-xl border border-gray-200 p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div>
                      <p className="font-semibold">{seller.name}</p>
                      <p className="text-sm text-gray-500">{seller.email}</p>
                      <p className="text-sm text-gray-500">{seller.phone}</p>
                      <p className="text-sm text-gray-500">{seller.location || "Unknown location"}</p>
                    </div>
                    <div className="space-x-2">
                      {!seller.approved && (
                        <button onClick={() => handleApproveSeller(seller.id)} className="px-3 py-1 rounded bg-green-600 text-white text-sm">Approve</button>
                      )}
                      <button onClick={() => handleRemoveSeller(seller.id)} className="px-3 py-1 rounded bg-red-600 text-white text-sm">Remove</button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm">Status: <span className={seller.approved ? "text-green-600" : "text-orange-600"}>{seller.approved ? "Approved" : "Pending"}</span></p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Customers</h2>
              <span className="text-sm text-gray-500">Total: {customers.length}</span>
            </div>
            <div className="space-y-4">
              {customers.map((customer) => (
                <div key={customer.id} className="rounded-xl border border-gray-200 p-4">
                  <p className="font-semibold">{customer.name}</p>
                  <p className="text-sm text-gray-500">{customer.email}</p>
                  <p className="text-sm text-gray-500">{customer.phone || "No phone"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Products</h2>
            <span className="text-sm text-gray-500">Total: {products.length}</span>
          </div>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-xl border border-gray-200 p-4 grid gap-3 md:grid-cols-[1fr,auto]">
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-sm text-gray-500">{product.sellerName || "Marketplace"}</p>
                  <p className="text-sm text-gray-500">{product.sellerLocation || "Unknown"}</p>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleDeleteProduct(product.id)} className="px-3 py-1 rounded bg-red-600 text-white text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
