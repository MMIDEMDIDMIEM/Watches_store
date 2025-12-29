import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ImageUploader from "../dashboard/ImageUpload";
import VideoUploader from "../dashboard/VedioUpload";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    ingredient: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (url) => {
    setForm({ ...form, imageUrl: url });
  };

  const handleVideoUpload = (url) => {
    setForm({ ...form, videoUrl: url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.imageUrl) {
      toast.error("⚠️ Please fill in all required fields and upload an image.");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        ...form,
        price: parseFloat(form.price),
        createdAt: new Date(),
      });

      toast.success("✅ Product added successfully!");

      // Reset form
      setForm({
        name: "",
        description: "",
        price: "",
        ingredient: "",
        imageUrl: "",
        videoUrl: "",
      });

      // Navigate to Home
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("❌ Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Add New Product
        </h2>

        <input
          name="name"
          placeholder="Product Name"
          className="w-full mb-3 p-2 border rounded-lg"
          value={form.name}
          onChange={handleChange}
        />
       <textarea
  name="description"
  placeholder="Description"
  className="w-full mb-3 p-2 border rounded-lg resize-none overflow-hidden"
  value={form.description}
  onChange={(e) => {
    setForm({ ...form, description: e.target.value });
    e.target.style.height = "auto";          // إعادة ضبط الارتفاع
    e.target.style.height = e.target.scrollHeight + "px"; // ضبط حسب المحتوى
  }}
/>

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full mb-3 p-2 border rounded-lg"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="ingredient"
          placeholder="Main Ingredient"
          className="w-full mb-3 p-2 border rounded-lg"
          value={form.ingredient}
          onChange={handleChange}
        />

        {/* 🖼️ Image Upload */}
        <p className="mb-2 text-sm font-medium">Upload Product Image:</p>
        <ImageUploader onUpload={handleImageUpload} />
        {form.imageUrl && (
          <img
            src={form.imageUrl}
            alt="Product"
            className="w-full h-40 object-cover rounded-lg mt-2"
          />
        )}

        {/* 🎥 Video Upload */}
        <p className="mt-6 mb-2 text-sm font-medium">Upload Product Video:</p>
        <VideoUploader onUpload={handleVideoUpload} />
        {form.videoUrl && (
          <video
            controls
            src={form.videoUrl}
            className="w-full h-48 rounded-lg mt-2"
          />
        )}

        <button
          type="submit"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded-lg transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
