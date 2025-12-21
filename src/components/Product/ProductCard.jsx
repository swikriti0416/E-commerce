import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { wishlist, toggleWishlist } = useWishlistStore(); 
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div
      key={product.id}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Clickable Image → Product Detail */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")
            }
          />
        </div>
      </Link>

      {/* Product Info - EXACT same as your Products.jsx */}
      <div className="p-6 flex flex-col flex-grow space-y-3">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-900 text-xl line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-auto">
          <p className="text-2xl font-bold text-primary">
            ${product.price}
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-medium text-gray-600">4.5</span>
          </div>
        </div>

        
        <div className="flex items-center gap-3 mt-4">
          
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md font-semibold"
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          {/* Wishlist Heart - Red when added */}
          <button
            onClick={() => toggleWishlist(product)}
            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <FaHeart
              className={`text-xl transition-colors ${
                isWishlisted ? "text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;