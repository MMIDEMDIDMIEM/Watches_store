import React, { useState } from "react";
import { useOrderStore } from "../../store/OrderSTORE";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OrderForm = ({ product }) => {
  const addOrder = useOrderStore((state) => state.addOrder);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    hours: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      productName: product.name,
      ...form,
      date: new Date().toLocaleString(),
    };

    addOrder(newOrder);
    setSubmitted(true);

    toast.success(`✅ Order placed for ${product.name}`);
    setForm({ name: "", phone: "", address: "", hours: "", whatsapp: "" });

    // ⏳ بعد ثانية ونصف يرجع لصفحة الهوم
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-8 w-full md:w-[500px] mx-auto absolute top-4 left-1/2 transform -translate-x-1/2">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
        Order Now
      </h3>

      {submitted && (
        <p className="text-green-600 text-center mb-3">
          ✅ Order submitted successfully!
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          type="text"
          name="hours"
          placeholder="Number of hours"
          value={form.hours}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={form.whatsapp}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
