import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      {/* Newsletter Section */}
      <div className="bg-orange-300 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Subscribe Our Newsletter</h2>
          <p className="text-gray-700 max-w-md">
            Don’t miss out on your discounts. Subscribe to our email newsletter
            to get the best offers, discounts, coupons, gifts and much more.
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full md:w-72 border-1 border-amber-400 outline-1"
          />
          <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-10 px-6 md:px-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200">
        <div>
          <h3 className="font-semibold mb-3">Our information</h3>
          <ul className="space-y-1 text-gray-600">
            <li>1234 - Peru</li>
            <li>La Libertad 43210</li>
            <li>123-456-789</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copy Right</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Road bikes</li>
            <li>Mountain bikes</li>
            <li>Electric</li>
            <li>Accesories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <div className="flex gap-4 text-gray-700 text-xl">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-200 text-center py-4 text-gray-500 text-sm">
        © Bedimcode. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
