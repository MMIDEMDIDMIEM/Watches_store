import React from "react";
import { useOrderStore } from "../store/OrderSTORE";

const Orders = () => {
  const { orders, removeOrder, clearOrders } = useOrderStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Product</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">WhatsApp</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Hours</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td className="border p-2">{order.productName}</td>
                  <td className="border p-2">{order.name}</td>
                  <td className="border p-2">{order.phone}</td>
                  <td className="border p-2">{order.whatsapp}</td>
                  <td className="border p-2">{order.address}</td>
                  <td className="border p-2">{order.hours}</td>
                  <td className="border p-2">{order.date}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => removeOrder(i)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={clearOrders}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Clear All Orders
          </button>
        </>
      )}
    </div>
  );
};

export default Orders;
