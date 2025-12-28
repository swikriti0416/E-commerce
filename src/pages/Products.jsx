import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import ProductsData from "../Data/products.json";

const Products = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const filteredProducts = ProductsData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
  bg-gradient-to-br from-orange-200 via-white to-indigo-400
    dark:from-blackish-soft dark:via-blackish dark:to-blackish/95
  flex justify-center items-center duration-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-lg sm:text-4xl font-semibold text-primary mt-10">
            {query ? `Search Results for "${query}"` : "Top Selling Products for you"}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Best Products
          </h1>
          <p className="text-lg font-semibold text-black-600 mt-4 dark:text-white-1000">
            Discover our handpicked collection of premium tech and lifestyle products.
          </p>
        </div>

        {/* Results Count */}
        {query && (
          <p className="text-center text-lg text-gray-600 mb-8 dark:text-white">
            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 dark:text-white">
            <p className="text-2xl text-gray-600 dark:text-white">No products found for "{query}"</p>
            <p className="text-gray-500 mt-2 dark:text-white">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 dark:text-white">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* View All Button (only when no search) */}
        {!query && (
          <div className="flex justify-center mt-12">
            <Link to="/categorypage">
              <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-secondary transition-all hover:scale-105 shadow-lg">
                View All Products
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;