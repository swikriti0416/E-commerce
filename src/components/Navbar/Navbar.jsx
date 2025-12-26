import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import DarkMode from "./DarkMode.jsx";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const cartCount = useCartStore((state) => state.getTotalItems());
  const wishlistCount = useWishlistStore((state) => state.getWishlistCount());

  
  const isLoggedIn = !!localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setDropdownOpen(false);
    window.location.href = "/"; 
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-orange-200 dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-bold text-3xl text-primary">ShopEasy</span>
          </Link>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-5 py-3 pl-12 pr-10 rounded-full border border-gray-900 dark:border-gray-600 focus:outline-none focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-primary"
              />
              <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-300 text-xl" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <DarkMode />

            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link to="/" className="text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categorypage" className="text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition">
                  Category
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-5 text-gray-700 dark:text-gray-200">
              {/* My Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <FaUser className="text-2xl" />
                  <span className="hidden sm:inline">My Account</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-3 z-50 border border-gray-200 dark:border-gray-700">
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-6 py-3 text-sm hover:bg-orange-100 dark:hover:bg-gray-700 transition"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-6 py-3 text-sm hover:bg-orange-100 dark:hover:bg-gray-700 transition"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                )}
              </div>

              <Link to="/wishlist" className="relative group">
                <FaHeart className="text-2xl hover:text-red-500 transition" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center shadow-md">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="relative group">
                <FaCartShopping className="text-2xl hover:text-primary transition" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;