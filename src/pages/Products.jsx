import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import ProductsData from "../Data/products.json";

const Products = () => {
  return (
    <div className="pt-14 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-lg sm:text-4xl font-semibold text-primary">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Best Products
          </h1>
          <p className="text-lg font-semibold text-gray-600 mt-4">
            Discover our handpicked collection of premium tech and lifestyle products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ProductsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <Link to="/categorypage">
            <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-secondary transition-all hover:scale-105 shadow-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;