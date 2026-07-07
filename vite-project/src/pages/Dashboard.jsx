import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentSeller, logoutSeller } from "../utils/auth";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../utils/products";
import { ensureMockOrders, getTotals } from "../utils/orders";

const Dashboard = () => {
  const navigate = useNavigate();
  const [seller, setSeller] = useState(null);
  const [products, setProducts] = useState([]);
  const [totals, setTotals] = useState({ totalOrders: 0, revenue: 0 });
  const [showAdd, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", price: "", image: "", description: "" });

  useEffect(() => {
    // Prefer localStorage (persistent) but fall back to sessionStorage
    const local = getCurrentSeller();
    if (local) {
      setSeller(local);
      return;
    }
    try {
      const session = JSON.parse(sessionStorage.getItem("currentSeller") || "null");
      if (session) setSeller(session);
    } catch {
      setSeller(null);
    }
  }, []);

  useEffect(() => {
    if (!seller) return;
    const p = getProducts(seller.id);
    setProducts(p);
    // ensure orders exist for mock totals
    ensureMockOrders(seller.id, p);
    setTotals(getTotals(seller.id));
  }, [seller]);

  useEffect(() => {
    if (!seller) {
      navigate("/login");
    }
  }, [seller, navigate]);

  const handleLogout = () => {
    logoutSeller();
    sessionStorage.removeItem("currentSeller");
    navigate("/login");
  };

  const refresh = () => {
    const p = getProducts(seller.id);
    setProducts(p);
    setTotals(getTotals(seller.id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    try {
      addProduct(seller.id, form);
      setForm({ title: "", price: "", image: "", description: "" });
      setShowAdd(false);
      refresh();
    } catch (err) {
      alert(err.message || "Unable to add product");
    }
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    try {
      updateProduct(seller.id, id, form);
      setEditingId(null);
      setForm({ title: "", price: "", image: "", description: "" });
      refresh();
    } catch (err) {
      alert(err.message || "Unable to update product");
    }
  };

  const handleDelete = (id) => {
    if (!confirm("Delete this product?")) return;
    deleteProduct(seller.id, id);
    refresh();
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setForm({ title: p.title, price: p.price, image: p.image, description: p.description });
  };

  if (!seller) return null;

  return (
    <section className="min-h-screen flex items-start justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Seller Dashboard</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAdd((s) => !s)}
              className="px-4 py-2 rounded bg-green-600 text-white"
            >
              {showAdd ? "Close" : "Add Product"}
            </button>
            <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-600 text-white">Logout</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-sm text-gray-500">Total Products</div>
            <div className="text-2xl font-bold">{products.length}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-sm text-gray-500">Total Orders</div>
            <div className="text-2xl font-bold">{totals.totalOrders}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-sm text-gray-500">Revenue</div>
            <div className="text-2xl font-bold">₦{totals.revenue.toLocaleString()}</div>
          </div>
        </div>

        {/* Add form */}
        {showAdd && (
          <form onSubmit={handleAdd} className="mb-6 grid grid-cols-2 gap-4">
            <input required placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} className="p-2 border rounded" />
            <input required placeholder="Price" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})} className="p-2 border rounded" />
            <input placeholder="Image URL" value={form.image} onChange={(e)=>setForm({...form,image:e.target.value})} className="p-2 border rounded col-span-2" />
            <textarea placeholder="Description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} className="p-2 border rounded col-span-2" />
            <div className="col-span-2">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add Product</button>
            </div>
          </form>
        )}

        {/* Products list */}
        <div className="space-y-3">
          {products.length === 0 && (
            <p className="text-gray-500">No products yet. Use "Add Product" to create one.</p>
          )}

          {products.map((p) => (
            <div key={p.id} className="flex items-start gap-4 p-3 border rounded">
              <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                {editingId === p.id ? (
                  <form onSubmit={(e)=>handleEdit(e,p.id)} className="grid grid-cols-2 gap-2">
                    <input required value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} className="p-1 border rounded" />
                    <input required value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})} className="p-1 border rounded" />
                    <input value={form.image} onChange={(e)=>setForm({...form,image:e.target.value})} className="p-1 border rounded col-span-2" />
                    <input value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} className="p-1 border rounded col-span-2" />
                    <div className="col-span-2 flex gap-2 mt-1">
                      <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
                      <button type="button" onClick={()=>{setEditingId(null); setForm({title:'',price:'',image:'',description:''})}} className="px-3 py-1 bg-gray-200 rounded">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{p.title}</h4>
                      <div className="text-red-600 font-bold">₦{Number(p.price).toLocaleString()}</div>
                    </div>
                    <p className="text-sm text-gray-600">{p.description}</p>
                    <div className="mt-2 flex gap-2">
                      <button onClick={()=>startEdit(p)} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
                      <button onClick={()=>handleDelete(p.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
