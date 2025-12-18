import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import ProductsData from "../Data/products.json";
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs sm:text-sm text-gray-400 mt-3">
            Discover our handpicked collection of premium tech and lifestyle products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(product.id % 5) * 100}  // Staggered animation
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  {/* Price */}
                  <p className="text-2xl font-bold text-primary">
                    ${product.price}
                  </p>

                  {/* Rating (fake average 4.5 for demo) */}
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm">4.5</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-200 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;