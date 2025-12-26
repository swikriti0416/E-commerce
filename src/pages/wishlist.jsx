import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import { useWishlistStore } from "../store/wishlistStore";

const Wishlist = () => {
  const { wishlist } = useWishlistStore();

  if (wishlist.length === 0) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-20 px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Your Wishlist is Empty
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md">
            Looks like you haven't added any products to your wishlist yet.
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-primary">
          Your Wishlist
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showAddToCart={true}
              showWishlist={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;