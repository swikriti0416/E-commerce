import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCartStore();

  // Total items count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Your Cart is Empty
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-md">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link
          to="/products"
          className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-secondary transition transform hover:scale-105 shadow-lg"
        >
          ← Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-primary">
          Your Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row gap-6 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="sm:w-48 sm:h-48 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300?text=No+Image")
                    }
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    ${item.price.toFixed(2)} each
                  </p>

                  
                  <div className="flex items-center gap-4 mt-auto">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaMinus className="text-sm" />
                    </button>

                    <span className="text-xl font-bold w-12 text-center text-gray-900">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition"
                    >
                      <FaPlus className="text-sm" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-600 hover:text-red-800 transition"
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-right flex flex-col justify-center">
                  <p className="text-2xl font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-6 text-lg text-gray-800">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-bold">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>

              {/* Total */}
              <div className="border-t-2 border-gray-300 pt-6">
                <div className="flex justify-between text-3xl font-bold">
                  <span>Total</span>
                  <span className="text-gray-900">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold py-5 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95">
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <Link
              to="/categorypage"
              className="block text-center mt-8 text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2 transition"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
