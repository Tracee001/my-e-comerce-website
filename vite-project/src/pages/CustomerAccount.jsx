import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentCustomer, logoutCustomer } from "../utils/auth";
import { getCustomerOrders } from "../utils/customerOrders";

const CustomerAccount = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const current = getCurrentCustomer();
    if (!current) {
      navigate("/customer/login");
      return;
    }
    setCustomer(current);
    setOrders(getCustomerOrders(current.id));
  }, [navigate]);

  const handleLogout = () => {
    logoutCustomer();
    window.dispatchEvent(new Event("customerAuthChanged"));
    navigate("/customer/login");
  };

  if (!customer) return null;

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Hello, {customer.name}</h1>
            <p className="text-gray-600 mt-1">Welcome back to your customer account.</p>
          </div>
          <button onClick={handleLogout} className="self-start bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
        </div>

        <div className="p-6 grid gap-6 md:grid-cols-2">
          <div className="p-5 bg-gray-50 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Profile</h2>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium mb-3">{customer.name}</p>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium mb-3">{customer.email}</p>
            {customer.phone && (
              <>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium mb-3">{customer.phone}</p>
              </>
            )}
            {customer.address && (
              <>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{customer.address}</p>
              </>
            )}
          </div>

          <div className="p-5 bg-gray-50 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            <p className="text-sm text-gray-500 mb-1">Total Orders</p>
            <p className="text-2xl font-bold mb-4">{orders.length}</p>
            <p className="text-sm text-gray-500 mb-1">Purchased Products</p>
            <p className="text-2xl font-bold">{orders.reduce((sum, order) => sum + (order.items?.length || 0), 0)}</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          {orders.length === 0 ? (
            <div className="p-6 bg-gray-50 rounded-xl text-gray-600">You have no orders yet. Place an order to see your history here.</div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-xl p-5 bg-white shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Order</p>
                      <p className="font-semibold">#{order.orderNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p>{new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="font-semibold">₦{order.total.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img src={item.image || "https://via.placeholder.com/80"} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                        </div>
                        <p className="font-semibold">₦{(item.price * item.qty).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerAccount;
