import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

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
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center px-4 mx-auto">
          <a href="#" className="font-bold text-2xl sm:text-3xl">
            Shopsy
          </a>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="search"
                className="w-[140px] sm:w-[200px] group-hover:w-[180px] sm:group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none"
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2"
            >
              <FaCartShopping />
            </button>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 py-2">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <span className="sm:flex hidden items-center gap-4 py-2">
              Trending Products
              <FaCaretDown className="group-hover:rotate-180 transition-transform" />
            </span>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-black shadow-md rounded-md w-[200px] z-[9999]">
              {DropdownLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block px-4 py-2 hover:bg-primary/20"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
