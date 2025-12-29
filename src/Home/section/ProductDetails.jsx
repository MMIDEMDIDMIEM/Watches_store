import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductStore } from "../../store/Product";
import OrderForm from "../../Home/section/OrderForm";

function ProductDetails() {
  const { id } = useParams();
  const { products, fetchProducts } = useProductStore();
  const [product, setProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    } else {
      const found = products.find((p) => p.id === id);
      setProduct(found);
    }
  }, [id, products, fetchProducts]);

  useEffect(() => {
    if (products.length > 0) {
      const found = products.find((p) => p.id === id);
      setProduct(found);
    }
  }, [products, id]);

  if (!product)
    return <p className="text-center py-10 text-gray-500">Loading product...</p>;

  return (
    <div>
      <div className="relative min-h-screen bg-base-100 p-8">
        {showForm && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/60 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] md:w-[500px] relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
              <OrderForm product={product} />
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto bg-base-100 border-1 border-amber-600 rounded-2xl shadow-lg p-6 relative z-0">
          <Link
            to="/"
            className="text-blue-600 hover:underline mb-6 inline-block"
          >
            ← Back to Products
          </Link>

          {/* 🖼️ الصورة والفيديو */}
          <div
            className={`flex flex-col ${
              product.videoUrl ? "md:flex-row" : ""
            } justify-center items-start gap-6 mb-8`}
          >
            {/* الصورة */}
            <div className="w-full md:w-1/2">
              <img
                src={product.imageUrl || "https://via.placeholder.com/400"}
                alt={product.name}
                className="w-full h-[350px] rounded-xl object-cover"
              />
            </div>

            {/* الفيديو (يظهر فقط لو موجود) */}
            {product.videoUrl && (
              <div className="w-full md:w-1/2">
                <video
                  controls
                  className="w-full h-[350px] rounded-xl object-cover"
                >
                  <source src={product.videoUrl} type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو
                </video>
              </div>
            )}
          </div>

          {/* 🧾 تفاصيل المنتج */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#2E2E2E] mb-3">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-2 w-[400px] break-words">
              <span className="font-semibold">Description:</span>{" "}
              {product.description}
            </p>

            {product.price && (
              <div className="text-2xl font-bold text-[#FFB568] mb-6">
                ${product.price}
              </div>
            )}

            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
