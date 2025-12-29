import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/Product";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProductStore();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    manufacturer: "",
    ingredient: "",
  });

  // تحميل بيانات المنتج الحالي
  useEffect(() => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setFormData({
        name: product.name,
        brand: product.brand,
        manufacturer: product.manufacturer,
        ingredient: product.ingredient,
      });
    }
  }, [id, products]);

  // تحديث البيانات في الـ state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // عند الضغط على زر "Save Changes"
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, formData);
    navigate("/"); // الرجوع للصفحة الرئيسية بعد الحفظ
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc]">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Edit Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Manufacturer
            </label>
            <input
              type="text"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Ingredient
            </label>
            <input
              type="text"
              name="ingredient"
              value={formData.ingredient}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
