import React, { useEffect } from "react";
import { useProductStore } from "../store/Product";
import { Plus, Eye, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { products, fetchProducts, deleteProduct, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <p className="text-center p-6">Loading products...</p>;
  if (error) return <p className="text-center p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-[#f7f9fc] p-8">
        <Link
                to="/"
                className="text-blue-600 hover:underline mb-6 inline-block"
              >
                ← Back to Products
              </Link>
      
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#2E2E2E]">
              Product Management Dashboard
            </h1>
            <p className="text-gray-500">Manage and monitor medical products</p>
          </div>

         <div className="flex gap-1.5">
             <Link to="/add">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Plus size={18} /> Add New Product
            </button>

            
         
          </Link>

           <Link to="/orders">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Plus size={18} /> orders
            </button>
          </Link>
         </div>
        </div>

        {/* ======= عرض المنتجات ======= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((p) => (
              <div
                key={p.id}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                {/* ✅ الصورة والفيديو جنب بعض */}
                <div className="flex flex-col sm:flex-row">
                  {/* الصورة */}
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full sm:w-1/2 h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full sm:w-1/2 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}

                  {/* الفيديو */}
                  {p.videoUrl ? (
                    <video
                      controls
                      className="w-full sm:w-1/2 h-48 object-cover"
                    >
                      <source src={p.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full sm:w-1/2 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                      No Video
                    </div>
                  )}
                </div>

                {/* التفاصيل تحت */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                  <p className="text-gray-700 mt-2">
                    💰 <span className="font-semibold">${p.price}</span>
                  </p>
                  <p className="text-gray-600 text-sm">🌿 {p.ingredient}</p>

                  {/* الأزرار */}
                  <div className="flex justify-end items-center gap-3 mt-4">
                    <Link to={`/view/${p.id}`} className="text-blue-600 hover:text-blue-800">
                      <Eye size={18} />
                    </Link>

                    <Link to={`/edit/${p.id}`} className="text-green-600 hover:text-green-800">
                      <Edit size={18} />
                    </Link>

                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full italic">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
