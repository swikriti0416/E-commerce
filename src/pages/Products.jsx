import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import ProductsData from "../Data/products.json";
import { useCartStore } from "../store/cartStore"; // ← Import the store

const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart); // ← Get the function

  return (
    <div className="mt-14 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs sm:text-sm text-gray-600 mt-3"
          >
            Discover our handpicked collection of premium tech and lifestyle products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(product.id % 5) * 100}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Clickable Image → Product Detail */}
              <Link to={`/product/${product.id}`} className="block overflow-hidden">
                <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")
                    }
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow space-y-3">
                {/* Product Name - Always visible */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-gray-900 text-xl line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Short Description */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Price & Rating */}
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-2xl font-bold text-primary">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-medium text-gray-600">4.5</span>
                  </div>
                </div>

                {/* Add to Cart Button - Functional */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md font-semibold"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
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