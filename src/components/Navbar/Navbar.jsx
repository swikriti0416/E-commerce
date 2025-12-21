import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";



const Navbar = ({ handleOrderPopup }) => {
  const cartCount = useCartStore((state) => state.getTotalItems());
  const wishlistCount = useWishlistStore((state) => state.getWishlistCount());



  return (
    <div className="bg-orange-200 shadow-md sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3">
            <span className="font-bold text-3xl text-primary">Shopsy</span>
          </Link>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-5 py-3 pl-12 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-primary bg-gray-50 transition-all duration-300 group-hover:border-primary"
              />
              <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>

          {/* Right Icons & Menu */}
          <div className="flex items-center gap-6">
            {/* Desktop Menu: Home & Category */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 font-medium hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categorypage"
                  className="text-gray-700 font-medium hover:text-primary transition"
                >
                  Category
                </Link>
              </li>
            </ul>

            {/* Icons: Wishlist & Cart */}
            <div className="flex items-center gap-5 text-gray-700">
              {/* Wishlist */}
              <Link to="/wishlist" className="relative group">
                <FaHeart className="text-2xl hover:text-red-500 transition" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                 {wishlistCount}
                </span>
              </Link>

              {/* Cart - Links to Cart Page */}
              <Link to="/cart" className="relative group">
                <FaCartShopping className="text-2xl hover:text-primary transition" />
                {/* Cart Item Count Badge */}
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Optional - shown on small screens) */}
        {/* <div className="md:hidden flex justify-center mt-4 gap-8 text-gray-700">
          <Link to="/" className="font-medium hover:text-primary">Home</Link>
          <Link to="/categorypage" className="font-medium hover:text-primary">Category</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
