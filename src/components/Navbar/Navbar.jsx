import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaHeart, FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import DarkMode from "./DarkMode.jsx";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartCount = useCartStore((state) => state.getTotalItems());
  const wishlistCount = useWishlistStore((state) => state.getWishlistCount());

  const isLoggedIn = !!localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setDrawerOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
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
                {/* My Account Drawer Trigger */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <FaUser className="text-2xl" />
                  <span className="hidden sm:inline">My Account</span>
                </button>

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

      {/* Sliding Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Account</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-4 pb-4 border-b dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Hello!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {JSON.parse(localStorage.getItem("user"))?.email || "User"}
                  </p>
                </div>
              </div>

              <Link
                to="/profile"
                className="block py-3 text-gray-700 dark:text-gray-300 hover:text-primary transition"
              >
                Edit Profile
              </Link>

              <Link
                to="/orders"
                className="block py-3 text-gray-700 dark:text-gray-300 hover:text-primary transition"
              >
                Order History
              </Link>

              <button
                onClick={handleLogout}
                className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
              >
                <FaArrowRightFromBracket />
                Logout
              </button>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-6">Please login to access your account</p>
              <Link
                to="/login"
                onClick={() => setDrawerOpen(false)}
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when drawer is open */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;