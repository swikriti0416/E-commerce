
import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-6 text-center">
      <FaCheckCircle className="text-9xl text-green-500 mb-8" />

      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Order Placed Successfully!
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        Thank you for your order. We have received your order and will start processing it soon.
      </p>

      <div className="flex gap-6">
        <Link
          to="/"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-secondary transition flex items-center gap-3 shadow-lg"
        >
          <FaHome />
          Back to Home
        </Link>

        <Link
          to="/products"
          className="bg-gray-200 text-gray-800 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-300 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;