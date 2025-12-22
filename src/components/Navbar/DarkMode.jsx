import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white-700 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        {theme === "dark" ? (
          <FaSun className="text-xl text-yellow-400" />
        ) : (
          <FaMoon className="text-xl text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;