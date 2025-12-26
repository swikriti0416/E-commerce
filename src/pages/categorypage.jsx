import React from "react";
import { Link } from "react-router-dom";
import products from "../Data/products.json"; 

const CategoryPage = () => {
  
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="min-h-screen page-bg py-16">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          All Products by Category
        </h1>

        {/* Loop through each category */}
        <div className="space-y-20">
          {categories.map((categoryName) => {
            // Filter products for current category
            const categoryProducts = products.filter(
              (product) => product.category === categoryName
            );

            return (
              <section key={categoryName} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                {/* Category Header */}
                <h2 className="text-3xl font-bold mb-8 text-primary border-b-4 border-primary inline-block pb-2">
                  {categoryName} ({categoryProducts.length} products)
                </h2>

                {/* Products Grid for this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {categoryProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
                    >
                      {/* Product Image */}
                      <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-6 space-y-3">
                        {/* Product Name - Always visible, bold and clear */}
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Price */}
                        <p className="text-2xl font-bold text-primary">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-secondary transition transform hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;