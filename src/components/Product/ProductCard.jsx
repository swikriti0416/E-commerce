import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { toggleWishlist } = useWishlistStore();
  const wishlist = useWishlistStore((state) => state.wishlist);
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("user");

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success(`${product.name} added to cart! 🛒`);
  };

  const handleToggleWishlist = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    toggleWishlist(product);
    if (isWishlisted) {
      toast.info(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist! ❤️`);
    }
  };

  return (
    <div className="group bg-orange-100 border-2 border-gray-200 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")}
          />
        </div>
      </Link>

      
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-gray-900 dark:text-white text-xl line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mt-2">
            {product.description}
          </p>

          {/* Price + Rating */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-2xl font-bold text-primary">
              ${product.price}
            </p>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">4.5</span>
            </div>
          </div>
        </div>

        {/* Buttons - Always at bottom */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md font-semibold"
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          <button
            onClick={handleToggleWishlist}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            <FaHeart
              className={`text-xl transition-colors ${
                isWishlisted ? "text-red-500" : "text-gray-600 dark:text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;