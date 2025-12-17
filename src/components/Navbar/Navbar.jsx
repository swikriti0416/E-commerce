import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom"; //

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* Search bar + buttons */}
          <div className="flex items-center gap-4">
            
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
                  w-[200px] group-hover:w-[300px]
                  transition-all duration-300
                  rounded-full
                  border border-gray-300
                  px-3 py-1
                  focus:outline-none
                  focus:border-primary
                  dark:border-gray-500
                  dark:bg-gray-800
                "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order button */}
            <button
              onClick={handleOrderPopup}
              className="
                bg-gradient-to-r from-primary to-secondary
                transition-all duration-200
                text-white
                py-1 px-4
                rounded-full
                flex items-center gap-3
                group
              "
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                4
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Checkout */}
            <Link
              to="/checkout"
              className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
            >
              Checkout
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
