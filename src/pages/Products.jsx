import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain p-4"
        />

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-700">
              ${product.price}
            </span>
            <span className="text-sm text-gray-600">
              ⭐ {product.rating.rate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
