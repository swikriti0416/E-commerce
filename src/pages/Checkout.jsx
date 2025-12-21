import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

const Checkout = () => {
  const { cart, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/ordersuccess");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Your Cart is Empty</h2>
        <Link
          to="/"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-14 text-primary">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* SHIPPING FORM */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur rounded-3xl p-10 border border-orange-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                Shipping Information
              </h2>

              <form onSubmit={handlePlaceOrder} className="space-y-6 text-x font-italic text-gray-700">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="input"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <textarea
                  name="address"
                  placeholder="Delivery Address"
                  required
                  rows="4"
                  onChange={handleChange}
                  className="input resize-none"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  onChange={handleChange}
                  className="input"
                />

                <textarea
                  name="notes"
                  placeholder="Order Notes (optional)"
                  rows="3"
                  onChange={handleChange}
                  className="input resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-5 text-xl font-bold text-white rounded-full
                  bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400
                  shadow-[0_15px_30px_rgba(255,165,0,0.45)]
                  hover:shadow-[0_20px_40px_rgba(255,165,0,0.6)]
                  hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-gradient-to-br from-orange-150 to-white rounded-3xl p-8 h-fit border border-orange-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl font-extrabold mb-6 text-gray-600">Order Summary</h2>

            <div className="space-y-4 text-gray-700">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="truncate pr-4">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-orange-200 my-6 pt-6 space-y-4">
              <div className="flex justify-between text-lg text-gray-700">
                <span>Subtotal</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="text-gray-700">
                <span>Shipping</span>
                <span className=" flex justify-end text-green-600 font-bold">Free</span>
              </div>

              <div className="flex justify-between items-center pt-6 mt-4 border-t border-orange-200">
                <span className="text-xl font-extrabold text-gray-600">Total</span>
                <span className="text-3xl font-extrabold text-orange-500">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 mt-6 font-medium"
            >
              <FaArrowLeft />
              Back to Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Tailwind reusable input style */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 1rem 1.25rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb;
            background-color: #f9fafb;
            outline: none;
            transition: all 0.2s ease;
          }
          .input:focus {
            background-color: #fff7ed;
            border-color: #fb923c;
            box-shadow: 0 0 0 4px rgba(251,146,60,0.15);
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
