import { useParams, Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import products from "../Data/products.json";
import { FaShoppingCart, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <Link to="/" className="text-primary hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white border border-gray-100 rounded-2xl p-4 shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Polished Content Section */}
          <div className="flex flex-col">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-primary">
                ${product.price}
              </span>
              <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-bold border border-green-100">
                <FaCheckCircle className="text-xs" />
                In Stock
              </div>
            </div>

            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>

            <Link
              to="/"
              className="group flex items-center gap-2 text-blue-400 hover:text-gray-900 font-medium transition-colors mt-8"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
               Back to Products
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}