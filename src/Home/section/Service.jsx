import React from "react";
import { FaShippingFast, FaTools, FaClock, FaAward } from "react-icons/fa";

const services = [
  {
    title: "Fast Delivery",
    description: "We provide fast and secure shipping across all regions.",
    icon: <FaShippingFast className="text-4xl text-primary mb-4" />,
  },
  {
    title: "Repair & Maintenance",
    description: "Precise maintenance service for all types of watches.",
    icon: <FaTools className="text-4xl text-primary mb-4" />,
  },
  {
    title: "Product Warranty",
    description: "One-year warranty on all watches to ensure quality.",
    icon: <FaAward className="text-4xl text-primary mb-4" />,
  },
  {
    title: "Accurate Timekeeping",
    description: "Our watches feature high precision and consistent performance.",
    icon: <FaClock className="text-4xl text-primary mb-4" />,
  },
];

function Service() {
  return (
    <section className="min-h-screen bg-base-100 px-6 md:px-16 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore the premium services we provide for watch enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="card p-6 shadow-lg hover:shadow-xl hover:bg-[#FFB568]  transition-shadow duration-300 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#FFB568] text-center"
          >
                        {service.icon}

            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 dark:text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
