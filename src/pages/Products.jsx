import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import ProductsData from "../Data/products.json";

const Products = () => {
  return (
    <div className="mt-14 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs sm:text-sm text-gray-600 mt-3">
            Discover our handpicked collection of premium tech and lifestyle products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(product.id % 5) * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="block overflow-hidden">
                <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                  />
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-grow space-y-2">
                <h3 className="font-bold text-gray-800 text-lg line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed min-h-[32px]">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <p className="text-xl font-bold text-primary">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-medium text-gray-600">4.5</span>
                  </div>
                </div>

                <button className="w-full mt-3 bg-gradient-to-r from-primary to-secondary text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-md">
                  <FaShoppingCart className="text-sm" />
                  <span className="font-semibold text-sm">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-200 hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;