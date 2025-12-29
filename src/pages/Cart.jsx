import React, { useMemo } from "react"; // ← Added useMemo
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, getTotalPrice } =
    useCartStore();

  // Memoized (memo ko use ho hai)
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  
  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Your Cart is Empty
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md">
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-blackish-soft dark:via-blackish dark:to-blackish/95 py-20">
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
                className="bg-orange-100 border-2 border-orange-200 dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row gap-6 hover:shadow-2xl transition-shadow duration-300"
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
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaMinus className="text-sm" />
                    </button>

                    <span className="text-xl font-bold w-12 text-center text-gray-900 dark:text-white">
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
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-orange-150 to-white rounded-3xl p-8 h-fit border border-orange-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Order Summary
            </h2>

            <div className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
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
                  <span className="text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout" className="block w-full mt-10">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold py-5 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95">
                Proceed to Checkout
              </button>
            </Link>

            {/* Continue Shopping */}
            <Link
              to="/categorypage"
              className="block text-center mt-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium flex items-center justify-center gap-2 transition"
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