import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#f7f9fc] py-16 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row gap-10 items-center"
    >
      {/* النص الجانبي */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          Have questions about our products or services?  
          Reach out to us — we’d love to hear from you.
        </p>

        {/* معلومات التواصل */}
        <div className="flex flex-col gap-4 text-gray-700 mb-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Mail className="text-[#FFB568]" />
            <span>kandsonlinestore05@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="text-[#FFB568]" />
            <span>+201040514409</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <MapPin className="text-[#FFB568]" />
            <span>Cairo, Egypt</span>
          </div>
        </div>

        {/* أيقونات السوشيال */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://wa.me/201015661301"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/1DCav72jfT/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/k_s_accessories7?igsh=enV5NzZpem4yZXBs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>

           <a
            href="https://www.tiktok.com/@ks.accessories10?_t=ZS-90xcbkcY7Xg&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-950 transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* نموذج التواصل */}
      <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 w-full">
        <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">
          Send us a message
        </h3>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFB568]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFB568]"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFB568]"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#FFB568] text-white font-semibold py-3 rounded-lg hover:bg-[#e6a14f] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
