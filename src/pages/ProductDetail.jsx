import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import products from "../Data/products.json";
import { FaShoppingCart, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Product Not Found</h2>
        <Link to="/" className="text-primary hover:underline text-lg">
          ← Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900  px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 dark:group-hover:opacity-50  "></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[600px] object-contain"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/600?text=No+Image")
                }
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-6">
              <span className="text-5xl font-black text-primary">
                ${product.price}
              </span>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                <FaCheckCircle />
                In Stock
              </div>
            </div>

            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="w-full max-w-md flex items-center justify-center gap-4 bg-gradient-to-r from-primary to-secondary text-white text-xl font-bold py-5 px-12 rounded-full shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              <FaShoppingCart className="text-2xl" />
              Add to Cart
            </button>

            {/* Back Link */}
            <Link
              to="/"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 font-medium text-lg transition dark:text-gray-300 dark:hover:text-white"
            >
              <FaArrowLeft />
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}